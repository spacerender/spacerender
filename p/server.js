const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// In-memory storage (In production, use a proper database like MongoDB, PostgreSQL, etc.)
const database = {
  users: new Map(), // userId -> user data
  payments: new Map(), // paymentId -> payment data
  userPayments: new Map() // userEmail -> paymentId
};

// Razorpay configuration (KEEP THESE SECRET!)
const RAZORPAY_CONFIG = {
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_RJn6bJb2qAHcuW',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'AlFTUDhCuU71YO2I3Qqy7M2E'
};

// Routes

// Get user payment status
app.get('/api/user/:email/payment-status', (req, res) => {
  try {
    const userEmail = req.params.email;
    const paymentId = database.userPayments.get(userEmail);
    
    if (!paymentId) {
      return res.json({ hasPaid: false, message: 'No payment found for this user' });
    }
    
    const payment = database.payments.get(paymentId);
    if (!payment || payment.status !== 'completed') {
      return res.json({ hasPaid: false, message: 'Payment not completed' });
    }
    
    res.json({
      hasPaid: true,
      paymentInfo: {
        payment_id: payment.payment_id,
        status: payment.status,
        timestamp: payment.timestamp,
        user_email: payment.user_email
      }
    });
  } catch (error) {
    console.error('Error checking payment status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify Razorpay payment
app.post('/api/verify-payment', (req, res) => {
  try {
    const { payment_id, order_id, signature, user_email, user_id } = req.body;
    
    // Verify signature (CRITICAL SECURITY STEP)
    const body = order_id + "|" + payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_CONFIG.key_secret)
      .update(body.toString())
      .digest('hex');
    
    if (expectedSignature !== signature) {
      return res.status(400).json({ 
        success: false, 
        message: 'Payment verification failed - invalid signature' 
      });
    }
    
    // Store payment data securely
    const paymentData = {
      payment_id,
      order_id,
      signature,
      user_id,
      user_email,
      status: 'completed',
      timestamp: new Date().toISOString(),
      amount: 999, // Amount in paise
      verified: true
    };
    
    // Store in database
    database.payments.set(payment_id, paymentData);
    database.userPayments.set(user_email, payment_id);
    
    // Store/update user data
    database.users.set(user_email, {
      user_id,
      user_email,
      has_premium: true,
      payment_id,
      last_login: new Date().toISOString()
    });
    
    console.log(`✅ Payment verified for ${user_email}: ${payment_id}`);
    
    res.json({
      success: true,
      message: 'Payment verified successfully',
      payment_id
    });
    
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Payment verification failed' 
    });
  }
});

// Create Razorpay order (for better security)
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, user_email } = req.body;
    
    // In a real app, you'd use Razorpay SDK to create order
    const orderId = 'order_' + Math.random().toString(36).substr(2, 9);
    
    res.json({
      success: true,
      order_id: orderId,
      amount: amount || 999,
      currency: 'INR',
      key_id: RAZORPAY_CONFIG.key_id // Safe to send to frontend
    });
    
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

// Get all paid users (admin endpoint)
app.get('/api/admin/paid-users', (req, res) => {
  try {
    const paidUsers = [];
    
    for (const [email, userData] of database.users.entries()) {
      if (userData.has_premium) {
        const payment = database.payments.get(userData.payment_id);
        paidUsers.push({
          email,
          user_id: userData.user_id,
          payment_id: userData.payment_id,
          payment_date: payment?.timestamp,
          last_login: userData.last_login
        });
      }
    }
    
    res.json({ users: paidUsers });
  } catch (error) {
    console.error('Error getting paid users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove user payment (admin endpoint)
app.delete('/api/admin/user/:email/payment', (req, res) => {
  try {
    const userEmail = req.params.email;
    const paymentId = database.userPayments.get(userEmail);
    
    if (paymentId) {
      database.payments.delete(paymentId);
      database.userPayments.delete(userEmail);
      
      const user = database.users.get(userEmail);
      if (user) {
        user.has_premium = false;
        user.payment_id = null;
        database.users.set(userEmail, user);
      }
    }
    
    res.json({ success: true, message: 'Payment removed successfully' });
  } catch (error) {
    console.error('Error removing payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GitHub models endpoint (with caching)
let modelsCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

app.get('/api/models', async (req, res) => {
  try {
    const userEmail = req.query.user_email;
    
    // Check if user has premium access
    const user = database.users.get(userEmail);
    if (!user || !user.has_premium) {
      return res.status(403).json({ 
        error: 'Premium access required',
        message: 'Please complete payment to access models' 
      });
    }
    
    // Use cache if available and fresh
    if (modelsCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
      return res.json({ models: modelsCache });
    }
    
    // Fetch from GitHub API
    const githubResponse = await fetch(
      'https://api.github.com/repos/spacerender/sketchup-models/git/trees/main?recursive=1'
    );
    
    if (!githubResponse.ok) {
      throw new Error('Failed to fetch from GitHub');
    }
    
    const data = await githubResponse.json();
    
    // Filter and process .skp files
    const skpFiles = data.tree.filter(file => 
      file.path.endsWith('.skp') && file.type === 'blob'
    );
    
    const models = skpFiles.map(file => {
      const pathParts = file.path.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const category = pathParts[0] || 'Uncategorized';
      const modelName = fileName.replace('.skp', '').replace(/[-_]/g, ' ');
      
      return {
        id: `github_${file.sha.substring(0, 8)}`,
        name: modelName.charAt(0).toUpperCase() + modelName.slice(1),
        description: `SketchUp model from ${category} collection`,
        size: "GitHub hosted",
        category: category.charAt(0).toUpperCase() + category.slice(1),
        tags: ["sketchup", "model", category.toLowerCase()],
        thumbnail: `https://raw.githubusercontent.com/spacerender/sketchup-models/main/thumbnails/${fileName.replace('.skp', '')}.jpg`,
        downloadUrl: `https://github.com/spacerender/sketchup-models/raw/main/${file.path}`,
        previewUrl: `https://github.com/spacerender/sketchup-models/blob/main/${file.path}`,
        dateAdded: new Date().toISOString().split('T')[0]
      };
    });
    
    // Update cache
    modelsCache = models;
    cacheTimestamp = Date.now();
    
    res.json({ models });
    
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    users_count: database.users.size,
    payments_count: database.payments.size
  });
});

// Serve frontend files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`💾 Database: In-memory (${database.users.size} users)`);
  console.log(`🔑 Razorpay: ${RAZORPAY_CONFIG.key_id}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;