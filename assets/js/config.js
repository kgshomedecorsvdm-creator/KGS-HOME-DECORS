// ═══════════════════════════════════════════════════════════
// KGS HOME DÉCORS — Configuration
// Safe to commit — no secrets here. Resend key is stored in
// admin localStorage (set once via Admin → Settings).
// ═══════════════════════════════════════════════════════════
const KGS_CONFIG = {
  supabase: {
    url: 'https://rgpkomngygapwjhnbgaf.supabase.co',
    anonKey: 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P'
  },
  razorpay: {
    keyId: '', // Add once Razorpay account is set up
  },
  resend: {
    fromEmail: 'KGS Home Décors <orders@kgshomedecors.in>',
  },
  store: {
    name: 'KGS Home Décors',
    phone: '+919789182921',
    whatsapp: '919789182921',
    email: 'kgshomedecorsvdm@gmail.com',
    address: '185/G, Junction Road, near EB Office, Virudhachalam, Tamil Nadu – 606 001',
    currency: 'INR',
    freeDeliveryCity: 'Tamil Nadu',
    codMinOrder: 0,
    onlinePaymentMinOrder: 0,
  }
};
