// Vercel Serverless Function: /api/verify-payment
import crypto from 'crypto';

// In-memory storage for demo (replace with real database)
const paymentDatabase = new Map();
const userDatabase = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { payment_id, order_id, signature, user_email, user_id } = req.body;
    
    if (!payment_id || !order_id || !signature || !user_email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required payment data' 
      });
    }

    // Get Razorpay secret from environment variables
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET || 'AlFTUDhCuU71YO2I3Qqy7M2E';
    
    // Verify signature (CRITICAL SECURITY STEP)
    const body = order_id + "|" + payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', razorpaySecret)
      .update(body.toString())
      .digest('hex');
    
    if (expectedSignature !== signature) {
      console.error('Payment verification failed - invalid signature');
      return res.status(400).json({ 
        success: false, 
        message: 'Payment verification failed - invalid signature' 
      });
    }
    
    // Store payment data
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
    
    // Store in database (replace with real database)
    paymentDatabase.set(payment_id, paymentData);
    paymentDatabase.set(user_email, paymentData); // Also store by email for quick lookup
    
    // Store/update user data
    userDatabase.set(user_email, {
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
      message: 'Payment verification failed: ' + error.message 
    });
  }
}