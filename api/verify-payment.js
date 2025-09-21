// api/verify-payment.js
import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { payment_id } = req.body || {};
  if (!payment_id) {
    return res.status(400).json({ error: "Missing payment_id" });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return res.status(500).json({ error: "Razorpay keys not configured." });
  }

  try {
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    // Fetch payment details
    const payment = await razorpay.payments.fetch(payment_id);

    // The important field is `status`. `captured` means money received.
    // Possible statuses include: created, authorized, captured, failed, refunded, etc.
    return res.status(200).json({ ok: true, status: payment.status, payment });
  } catch (err) {
    console.error("verify-payment error:", err);
    // If Razorpay returns HTML (dev error), return text for debugging
    return res.status(500).json({ error: err.message || "Verification failed" });
  }
}
