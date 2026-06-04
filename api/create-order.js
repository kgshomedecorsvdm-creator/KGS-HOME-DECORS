module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    var body = req.body || {};
    var amount = body.amount;
    var currency = body.currency || 'INR';
    var receipt = body.receipt || ('kgs_' + Date.now());
    if (!amount || amount < 100) return res.status(400).json({ error: 'Amount must be at least 100 paise' });
    var KEY_ID = process.env.RAZORPAY1 || process.env.RAZORPAY_KEY_ID;
    var KEY_SECRET = process.env.RAZORPAY2 || process.env.RAZORPAY_KEY_SECRET;
    if (!KEY_ID || !KEY_SECRET) return res.status(500).json({ error: 'Payment gateway not configured' });
    var auth = Buffer.from(KEY_ID + ':' + KEY_SECRET).toString('base64');
    var response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Math.round(amount), currency: currency, receipt: receipt })
    });
    var data = await response.json();
    if (!response.ok) {
      console.error('[KGS] Razorpay create order error:', data);
      return res.status(500).json({ error: (data.error && data.error.description) || 'Failed to create order' });
    }
    return res.json({ order_id: data.id, amount: data.amount, currency: data.currency });
  } catch (err) {
    console.error('[KGS] Create order exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
