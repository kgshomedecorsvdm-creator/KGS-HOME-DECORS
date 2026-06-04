var crypto = require('crypto');
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    var body = req.body || {};
    var razorpay_order_id = body.razorpay_order_id;
    var razorpay_payment_id = body.razorpay_payment_id;
    var razorpay_signature = body.razorpay_signature;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    var KEY_SECRET = process.env.RAZORPAY2 || process.env.RAZORPAY_KEY_SECRET;
    if (!KEY_SECRET) return res.status(500).json({ error: 'Payment gateway not configured' });
    var generated_signature = crypto
      .createHmac('sha256', KEY_SECRET)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');
    if (generated_signature === razorpay_signature) {
      return res.json({ success: true, payment_id: razorpay_payment_id });
    } else {
      return res.status(400).json({ success: false, error: 'Payment verification failed' });
    }
  } catch (err) {
    console.error('[KGS] Verify payment exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
