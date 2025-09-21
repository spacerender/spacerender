# Razorpay Payment Integration System

A complete payment system integrating Google Authentication with Razorpay payments.

## Files Overview

- **test.html** - Main dashboard that checks authentication and payment status
- **payment.html** - Payment page with Razorpay integration
- **admin.html** - Admin panel for testing and payment verification

## Setup Instructions

### 1. Razorpay Configuration
Your Razorpay credentials are already configured:
- Key ID: `rzp_live_RJn6bJb2qAHcuW`
- Key Secret: `AlFTUDhCuU71YO2I3Qqy7M2E` (⚠️ Keep this secret!)

### 2. File Structure
```
/
├── test.html      # Main dashboard
├── payment.html   # Payment page
└── admin.html     # Admin/testing panel
```

### 3. How to Use

1. **Start with test.html**
   - Open `test.html` in your browser
   - Login with Google
   - If no payment detected, you'll see payment required message

2. **Make a Payment**
   - Click "Complete Payment" to go to `payment.html`
   - Make sure you're logged in with Google
   - Click "Pay with Razorpay" to initiate payment
   - After successful payment, you'll be redirected back to `test.html`

3. **Access Premium Features**
   - After successful payment, `test.html` will show premium dashboard
   - Access downloads, content, tools, and support

4. **Testing (Development Only)**
   - Use `admin.html` to simulate payments for testing
   - Clear payment data to test different scenarios

## Payment Flow

```
User Flow:
test.html (login) → payment.html (pay) → test.html (access premium)

Authentication Check:
- Not logged in → Show login button
- Logged in + No payment → Show payment required
- Logged in + Payment complete → Show premium access
```

## Security Notes ⚠️

### Current Implementation (Demo)
- Payment verification is stored in localStorage
- This is **NOT SECURE** for production

### Production Requirements
1. **Server-side Verification**
   - Never verify payments on the client-side
   - Use Razorpay webhooks to verify payments
   - Store payment status in a secure database

2. **API Security**
   - Keep your Razorpay Key Secret on the server only
   - Use order creation API on your backend
   - Implement proper authentication tokens

3. **Data Protection**
   - Never store sensitive payment data in localStorage
   - Use HTTPS for all payment-related pages
   - Implement proper session management

## Production Backend Example

```javascript
// Node.js/Express example for payment verification
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: 'rzp_live_RJn6bJb2qAHcuW',
  key_secret: 'AlFTUDhCuU71YO2I3Qqy7M2E'
});

// Verify payment
app.post('/verify-payment', (req, res) => {
  const { payment_id, order_id, signature } = req.body;
  
  const body = order_id + "|" + payment_id;
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
                                  .update(body.toString())
                                  .digest('hex');
  
  if (expectedSignature === signature) {
    // Payment is valid - update user's access in database
    res.json({ status: 'success' });
  } else {
    res.json({ status: 'failed' });
  }
});
```

## Testing

1. **Test Authentication**
   - Try accessing without login
   - Login and check user info display

2. **Test Payment Flow**
   - Go through complete payment process
   - Test payment cancellation
   - Test payment failure scenarios

3. **Test Access Control**
   - Verify premium content shows only after payment
   - Test logout/login persistence

## Customization

### Change Product Details
Edit in `payment.html`:
```javascript
const amount = 999; // Amount in paise (₹9.99)
// Update product name, description, features
```

### Add More Premium Features
Edit the product access section in `test.html`:
```html
<div class="bg-gray-700 rounded-lg p-4">
  <h3>Your New Feature</h3>
  <!-- Add your premium content here -->
</div>
```

## Troubleshooting

### Payment Not Detected
- Check browser console for errors
- Verify localStorage has payment_data
- Use admin.html to check/clear payment status

### Authentication Issues
- Verify Firebase configuration
- Check Google OAuth settings
- Ensure Firebase Auth is enabled

### Razorpay Issues
- Verify Key ID is correct
- Check network connectivity
- Test with Razorpay test keys first

## Next Steps for Production

1. Set up a backend server (Node.js/PHP/Python)
2. Implement proper payment verification
3. Add database for user and payment management
4. Set up Razorpay webhooks
5. Add proper error handling and logging
6. Implement security measures (HTTPS, CSRF protection)
7. Add email notifications for successful payments
8. Create admin dashboard for payment management

---

**⚠️ Remember: This is a demo implementation. For production use, implement proper server-side verification and security measures.**