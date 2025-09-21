// Vercel Serverless Function: /p/api/admin/user/[email]/payment
// In-memory storage (replace with real database)
const userDatabase = new Map();
const paymentDatabase = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({ error: 'Email parameter required' });
    }

    // Get user data
    const user = userDatabase.get(email);
    
    if (user && user.payment_id) {
      // Remove payment data
      paymentDatabase.delete(user.payment_id);
      
      // Update user data
      user.has_premium = false;
      user.payment_id = null;
      userDatabase.set(email, user);
    }
    
    res.json({ success: true, message: 'Payment removed successfully' });
  } catch (error) {
    console.error('Error removing payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}