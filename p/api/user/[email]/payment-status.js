// Vercel Serverless Function: /api/user/[email]/payment-status
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({ error: 'Email parameter required' });
    }

    // For Vercel, we'll use a simple key-value storage solution
    // In production, you'd use a proper database like PlanetScale, Supabase, or MongoDB Atlas
    
    // For now, we'll simulate database lookup
    // You'll need to implement actual database integration
    const userPaymentData = await getUserPaymentStatus(email);
    
    if (!userPaymentData) {
      return res.json({ 
        hasPaid: false, 
        message: 'No payment found for this user' 
      });
    }
    
    res.json({
      hasPaid: true,
      paymentInfo: {
        payment_id: userPaymentData.payment_id,
        status: userPaymentData.status,
        timestamp: userPaymentData.timestamp,
        user_email: userPaymentData.user_email
      }
    });
    
  } catch (error) {
    console.error('Error checking payment status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Temporary in-memory storage (replace with real database)
const paymentDatabase = new Map();

async function getUserPaymentStatus(email) {
  // This is a placeholder - replace with real database query
  return paymentDatabase.get(email) || null;
}

// Helper function to store payment (used by verify-payment endpoint)
export function storePaymentData(email, paymentData) {
  paymentDatabase.set(email, paymentData);
}