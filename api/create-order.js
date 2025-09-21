// Vercel Serverless Function: /api/create-order
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
    const { amount, user_email } = req.body;
    
    if (!user_email) {
      return res.status(400).json({ error: 'User email required' });
    }
    
    // Generate unique order ID
    const orderId = 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Return order details
    res.json({
      success: true,
      order_id: orderId,
      amount: amount || 999, // Default ₹9.99
      currency: 'INR',
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_RJn6bJb2qAHcuW'
    });
    
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create order' 
    });
  }
}