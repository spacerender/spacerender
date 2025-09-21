# 🚀 Server-Side Setup Guide

## 🎯 Overview
This guide shows you how to move from localStorage to a secure server-side solution with proper payment verification and data storage.

## 🔧 What's Changed

### **Before (Client-Side):**
- ❌ Payment data stored in localStorage
- ❌ Anyone could manipulate payment status
- ❌ No real payment verification
- ❌ Razorpay secret exposed

### **After (Server-Side):**
- ✅ Payment data stored securely on server
- ✅ Real Razorpay signature verification
- ✅ API-based access control
- ✅ Razorpay secret kept secure

## 📋 Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
# Copy example environment file
copy .env.example .env

# Edit .env with your actual values
RAZORPAY_KEY_ID=rzp_live_RJn6bJb2qAHcuW
RAZORPAY_KEY_SECRET=AlFTUDhCuU71YO2I3Qqy7M2E
PORT=3000
NODE_ENV=production
```

### 3. Start the Server
```bash
# Development mode (auto-restart)
npm run dev

# Production mode
npm start
```

## 🔐 Security Features

### **Payment Verification**
- ✅ Server-side Razorpay signature verification
- ✅ Cryptographic validation of payments
- ✅ No payment data stored on client

### **Access Control**
- ✅ API endpoints verify user payment status
- ✅ GitHub models only accessible to paid users
- ✅ User-specific access tracking

### **Data Protection**
- ✅ Sensitive keys stored on server only
- ✅ Payment data encrypted in transit
- ✅ User sessions managed securely

## 📡 API Endpoints

### **Payment System**
```javascript
// Check payment status
GET /api/user/:email/payment-status

// Create payment order
POST /api/create-order

// Verify payment
POST /api/verify-payment

// Get models (premium users only)
GET /api/models?user_email=user@example.com
```

### **Admin Endpoints**
```javascript
// Get all paid users
GET /api/admin/paid-users

// Remove user payment
DELETE /api/admin/user/:email/payment

// Server health check
GET /api/health
```

## 🗄️ Database Options

### **Current: In-Memory (Development)**
```javascript
const database = {
  users: new Map(),
  payments: new Map(),
  userPayments: new Map()
};
```

### **Production: Real Database**

#### **Option 1: MongoDB**
```bash
npm install mongoose
```

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  user_id: String,
  has_premium: Boolean,
  payment_id: String,
  last_login: Date
});

const PaymentSchema = new mongoose.Schema({
  payment_id: String,
  user_email: String,
  status: String,
  timestamp: Date,
  verified: Boolean
});
```

#### **Option 2: PostgreSQL**
```bash
npm install pg sequelize
```

```javascript
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  user_id: DataTypes.STRING,
  has_premium: DataTypes.BOOLEAN,
  payment_id: DataTypes.STRING
});

const Payment = sequelize.define('Payment', {
  payment_id: DataTypes.STRING,
  user_email: DataTypes.STRING,
  status: DataTypes.STRING,
  verified: DataTypes.BOOLEAN
});
```

## 🚀 Deployment Options

### **Option 1: Railway (Recommended)**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

### **Option 2: Heroku**
```bash
# Install Heroku CLI
heroku create your-app-name
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
git push heroku main
```

### **Option 3: DigitalOcean App Platform**
```yaml
# app.yaml
name: sketchup-payment-system
services:
- name: api
  source_dir: /
  github:
    repo: your-username/your-repo
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: RAZORPAY_KEY_ID
    value: rzp_live_RJn6bJb2qAHcuW
  - key: RAZORPAY_KEY_SECRET
    value: AlFTUDhCuU71YO2I3Qqy7M2E
```

### **Option 4: VPS (Ubuntu)**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
npm install

# Install PM2 for production
sudo npm install -g pm2

# Start application
pm2 start server.js --name "sketchup-api"

# Setup auto-restart
pm2 startup
pm2 save
```

## 🔄 Migration Process

### **Step 1: Test Locally**
1. Start the server: `npm run dev`
2. Open http://localhost:3000
3. Test payment flow end-to-end
4. Verify admin panel works

### **Step 2: Deploy to Production**
1. Choose deployment platform
2. Set environment variables
3. Deploy server code
4. Update frontend to use production API

### **Step 3: Update Frontend URLs**
```javascript
// In your frontend files, replace:
const API_BASE = 'https://your-app.railway.app'; // Your production URL

// Instead of:
fetch('/api/user/email/payment-status')

// Use:
fetch(`${API_BASE}/api/user/email/payment-status`)
```

## 🧪 Testing

### **Test Payment Flow**
```bash
# Test payment verification
curl -X POST http://localhost:3000/api/verify-payment \
  -H "Content-Type: application/json" \
  -d '{
    "payment_id": "pay_test123",
    "order_id": "order_test123", 
    "signature": "test_signature",
    "user_email": "test@example.com",
    "user_id": "test_user_123"
  }'
```

### **Test User Access**
```bash
# Check payment status
curl http://localhost:3000/api/user/test@example.com/payment-status

# Get models (should require payment)
curl http://localhost:3000/api/models?user_email=test@example.com
```

## 📊 Monitoring

### **Server Health**
```bash
# Check server status
curl http://localhost:3000/api/health

# Response:
{
  "status": "healthy",
  "timestamp": "2024-01-30T10:00:00.000Z",
  "users_count": 5,
  "payments_count": 5
}
```

### **Logs**
```bash
# View server logs
pm2 logs sketchup-api

# Or with Railway
railway logs

# Or with Heroku
heroku logs --tail
```

## 🔧 Advanced Configuration

### **Add Rate Limiting**
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### **Add Authentication Middleware**
```javascript
const authenticateUser = (req, res, next) => {
  const userEmail = req.headers['x-user-email'];
  
  if (!userEmail) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  req.userEmail = userEmail;
  next();
};

app.use('/api/models', authenticateUser);
```

### **Add CORS for Production**
```javascript
app.use(cors({
  origin: ['https://your-domain.com', 'https://www.your-domain.com'],
  credentials: true
}));
```

## 🎉 Benefits of Server-Side

### **Security**
- ✅ **Payment verification** - Real Razorpay signature checking
- ✅ **Secret protection** - Keys never exposed to client
- ✅ **Access control** - API-based permission system
- ✅ **Audit trail** - Server logs all payment activities

### **Reliability**
- ✅ **Data persistence** - Survives browser clearing
- ✅ **Centralized storage** - Single source of truth
- ✅ **Backup support** - Can backup database
- ✅ **Scalability** - Supports multiple users

### **Features**
- ✅ **Real-time sync** - Multiple devices stay in sync
- ✅ **Admin dashboard** - Proper user management
- ✅ **Analytics** - Track usage and payments
- ✅ **Support tools** - Help users with payment issues

## 🚨 Important Notes

### **Environment Variables**
- ❌ **NEVER** commit `.env` files
- ❌ **NEVER** expose Razorpay secret key
- ✅ Use different keys for development/production
- ✅ Rotate keys periodically

### **Database Backups**
- Set up automatic backups
- Test restore procedures
- Keep payment data encrypted
- Follow data protection regulations

### **SSL/HTTPS**
- Always use HTTPS in production
- Payment data must be encrypted in transit
- Use proper SSL certificates

---

## 🎯 You're Ready!

Your server-side system now provides:
- ✅ **Real payment verification**
- ✅ **Secure data storage**  
- ✅ **Professional API endpoints**
- ✅ **Admin management tools**
- ✅ **Production-ready architecture**

Start with local testing, then deploy to your chosen platform! 🚀