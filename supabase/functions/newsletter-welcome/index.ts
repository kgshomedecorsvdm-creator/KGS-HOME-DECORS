import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? '';
const FROM_EMAIL = 'KGS Home Décors <orders@kgshomedecors.in>';
const ADMIN_EMAIL = 'kgshomedecorsvdm@gmail.com';
const SITE_URL = 'https://kgshomedecors.in';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  try {
    const { email } = await req.json();
    if (!email) return new Response(JSON.stringify({ error: 'email required' }), { status: 400 });

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return new Response(JSON.stringify({ ok: false, error: 'email service not configured' }), { status: 500 });
    }

    const welcomeHtml = `
      <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;color:#1A1A1A">
        <div style="padding:40px 0 24px">
          <p style="font-size:13px;letter-spacing:0.08em;color:#9E9B98;text-transform:uppercase;margin:0">KGS HOME DÉCORS</p>
        </div>
        <h1 style="font-size:28px;font-weight:400;margin:0 0 16px;line-height:1.3">You're in the loop.</h1>
        <p style="font-size:15px;line-height:1.7;color:#5E5B59;margin:0 0 24px">
          Thank you for subscribing. We send one email a month — new arrivals, sale pieces, and whatever just came in from the showroom. No spam, ever.
        </p>
        <a href="${SITE_URL}" style="display:inline-block;background:#1A1A1A;color:#fff;text-decoration:none;padding:14px 28px;border-radius:6px;font-size:13px;letter-spacing:0.05em">
          Shop Now
        </a>
        <p style="font-size:12px;color:#9E9B98;margin:40px 0 0;line-height:1.6">
          KGS Home Décors · Virudhachalam, Tamil Nadu<br>
          <a href="${SITE_URL}" style="color:#9E9B98">kgshomedecors.in</a>
        </p>
      </div>
    `;

    // Send welcome email to subscriber
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: 'You\'re in the loop — KGS Home Décors',
        html: welcomeHtml,
      }),
    });

    // Notify admin
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `New newsletter subscriber: ${email}`,
        html: `<p style="font-family:sans-serif;font-size:14px"><strong>${email}</strong> just subscribed to the KGS Home Décors newsletter.</p>`,
      }),
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});
