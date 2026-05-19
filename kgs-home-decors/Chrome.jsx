/* KGS Home Décors — Chrome: Announcement, Nav, TrustStrip, Newsletter, Footer, WAFloat */

const PRODUCTS = [
  { id:'sofa-3seater',        name:'3-Seater Sofa — Fabric & Wood',   category:'Furniture',     price:18500, was:22000, off:'16% OFF', rating:4.8, reviews:124, sold: 38, stock: 4,  image:'assets/products/sofa.webp',         badge:'Best Seller', badgeKind:'gold' },
  { id:'clock-brass',         name:'Antique Brass Wall Clock',         category:'Wall Clocks',   price: 1299, was: null, off:null,      rating:4.7, reviews: 98, sold: 64, stock: 12, image:'assets/products/clock.webp',        badge:'New',         badgeKind:'ink' },
  { id:'fountain-tabletop',   name:'Indoor Tabletop Fountain',         category:'Fountains',     price: 2850, was: null, off:null,      rating:4.9, reviews: 56, sold: 22, stock: 6,  image:'assets/products/fountain.webp',     badge:'Staff Pick',  badgeKind:'gold' },
  { id:'wall-art-botanical',  name:'Botanical Wall Art Panel',         category:'Wall Frames',   price: 1850, was: null, off:null,      rating:4.8, reviews:113, sold: 41, stock: 18, image:'assets/products/wall_decor.webp',   badge:null },
  { id:'plant-banana',        name:'Large Artificial Banana Plant',    category:'Plants',        price: 3200, was: null, off:null,      rating:4.9, reviews: 84, sold: 31, stock: 9,  image:'assets/products/plant.png',         badge:'Popular',     badgeKind:'gold' },
  { id:'vase-ceramic',        name:'Designer Ceramic Vase',            category:'Vases',         price: 1950, was: null, off:null,      rating:5.0, reviews: 42, sold: 18, stock: 14, image:'assets/products/ceramic_vase.webp', badge:'New',         badgeKind:'ink' },
  { id:'lamp-table',          name:'Artisan Table Lamp',               category:'Lighting',      price: 3400, was: null, off:null,      rating:4.6, reviews: 72, sold: 27, stock: 11, image:'assets/products/table_lamp.webp',   badge:null },
  { id:'horse-statue',        name:'Decorative Horse Statue',          category:'Statues',       price: 4250, was: 5500, off:'23% OFF', rating:4.9, reviews:168, sold: 52, stock: 3,  image:'assets/products/horse.webp',        badge:'Best Seller', badgeKind:'gold' },
  { id:'clock-peacock',       name:'Peacock Brass Wall Clock',         category:'Wall Clocks',   price: 4250, was: null, off:null,      rating:4.9, reviews: 91, sold: 24, stock: 5,  image:'assets/products-real/clock-peacock.png',  badge:'Staff Pick', badgeKind:'gold' },
  { id:'fountain-lotus',      name:'Lotus Water Fountain',             category:'Fountains',     price: 4850, was: null, off:null,      rating:5.0, reviews: 42, sold: 16, stock: 8,  image:'assets/products-real/fountain-01.png',    badge:null },
  { id:'vase-marble',         name:'Tall Marble Floor Vase',           category:'Vases',         price: 2650, was: 3200, off:'17% OFF', rating:4.8, reviews: 58, sold: 21, stock: 7,  image:'assets/products-real/vase-02.png',        badge:null },
  { id:'statue-ganesha',      name:'Ganesha Brass Statue',             category:'Statues',       price: 4250, was: 5500, off:'23% OFF', rating:4.9, reviews:168, sold: 47, stock: 2,  image:'assets/products-real/statue-01.png',      badge:'Selling Fast', badgeKind:'warm' },
];

const CATEGORIES = [
  { id:'wall-decor',   label:'Wall Décor',        img:'assets/categories/cat_wall_decor.webp' },
  { id:'lighting',     label:'Lighting',          img:'assets/categories/cat_lighting.webp' },
  { id:'furniture',    label:'Furniture',         img:'assets/categories/cat_sofas.webp' },
  { id:'textiles',     label:'Home Textiles',     img:'assets/lifestyle/room_bedroom.webp' },
  { id:'vases',        label:'Vases & Décor',     img:'assets/categories/cat_decor.webp' },
  { id:'mirrors',      label:'Mirrors',           img:'assets/lifestyle/room_hallway.webp' },
  { id:'clocks',       label:'Clocks',            img:'assets/banners/split_lighting.webp' },
  { id:'cushions',     label:'Cushions',          img:'assets/categories/cat_lifestyle.webp' },
  { id:'tables',       label:'Table Décor',       img:'assets/lifestyle/room_living.webp' },
  { id:'plants',       label:'Plants',            img:'assets/categories/cat_plants.webp' },
  { id:'fountains',    label:'Fountains & Pooja', img:'assets/lifestyle/room_zen.webp' },
  { id:'baskets',      label:'Storage',           img:'assets/lifestyle/showroom.webp' },
  { id:'statues',      label:'Statues',           img:'assets/banners/split_sofas.webp' },
  { id:'gifts',        label:'Gifts',             img:'assets/categories/cat_gifts.webp' },
];

const TESTIMONIALS = [
  { name:'Priya Sharma',  initial:'P', stars:5, quote:'Ordered the tall marble vase and it arrived the next day, packed properly. Looks exactly like the photos. Will order again.', thumb:'assets/lifestyle/room_bedroom.webp' },
  { name:'Rohit Verma',   initial:'R', stars:5, quote:'WhatsApped them about a sofa and got a reply in five minutes. Good people. The piece itself is solid — no wobble, good finish.', thumb:'assets/lifestyle/room_living.webp' },
  { name:'Ananya Iyer',   initial:'A', stars:5, quote:'An incredibly premium selection right here in Virudhachalam. Went to the showroom on Junction Road and ended up buying three things I hadn\'t planned to.', thumb:'assets/lifestyle/room_hallway.webp' },
];

const IG_TILES = [
  'assets/lifestyle/room_living.webp',
  'assets/lifestyle/room_bedroom.webp',
  'assets/lifestyle/room_hallway.webp',
  'assets/lifestyle/room_zen.webp',
  'assets/lifestyle/showroom.webp',
  'assets/lifestyle/showroom_interior.webp',
  'assets/categories/cat_decor.webp',
  'assets/categories/cat_lighting.webp',
  'assets/categories/cat_plants.webp',
  'assets/categories/cat_lifestyle.webp',
];

const fmtPrice = (n) => '₹' + n.toLocaleString('en-IN');

// ===== Announcement bar =====================================================
function Announcement() {
  const MSGS = [
    { icon:'local_shipping', text:<>Free delivery in Virudhachalam on every order. <b>Pan-India over ₹5,000.</b></> },
    { icon:'star',           text:<><b>★ 5.0 on Google.</b> 240 families have left a review.</> },
    { icon:'replay',         text:<>Not happy with it? <b>Return within 7 days.</b> No forms, no drama.</> },
    { icon:'storefront',     text:<><b>500 pieces</b> on our floor right now. Come see them.</> },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % MSGS.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="announce">
      <div className="container announce-bar">
        <span className="announce-side">
          <span className="material-symbols-outlined">storefront</span>
          Junction Road · Virudhachalam
        </span>
        <span className="announce-center">
          {MSGS.map((m, idx) => (
            <span key={idx} className={'announce-msg ' + (idx === i ? 'in' : 'out')}>
              <span className="material-symbols-outlined">{m.icon}</span>
              {m.text}
            </span>
          ))}
        </span>
        <span className="announce-side announce-side--right">
          <a href="#" onClick={(e) => e.preventDefault()}>Track Order</a>
          <span className="announce-divider"/>
          <a href="#" onClick={(e) => e.preventDefault()}>WhatsApp · +91 97891 82921</a>
        </span>
      </div>
    </div>
  );
}

// ===== Nav ==================================================================
function Nav({ route, setRoute, cart, wishlist, onSearch }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled]   = React.useState(false);
  const [hidden, setHidden]       = React.useState(false);
  const [progress, setProgress]   = React.useState(0);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      // Tighten pill after 80px
      setScrolled(y > 80);

      // Hide on scroll-down, show on scroll-up
      if (y > 120) {
        setHidden(y > lastY.current + 4);
      } else {
        setHidden(false);
      }
      lastY.current = y;

      // Gold progress bar
      setProgress(docH > 0 ? Math.min(100, (y / docH) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (id, label) => (
    <a
      className={'nav-link' + (route === id ? ' active' : '')}
      onClick={(e) => { e.preventDefault(); setRoute(id); }}
      href="#">
      {label}
    </a>
  );

  const mobileLink = (id, label) => (
    <div
      className={'mobile-nav-link' + (route === id ? ' active' : '')}
      onClick={() => { setRoute(id); setMenuOpen(false); }}>
      {label}
    </div>
  );

  const wrapCls = 'nav-wrap' +
    (scrolled ? ' nav--scrolled' : '') +
    (hidden   ? ' nav--hidden'   : '');

  return (
    <React.Fragment>
      <div className={wrapCls}>
        <div className="container nav-bar">
          {/* Gold scroll progress bar */}
          <div className="nav-progress" style={{ width: progress + '%' }} />

          <a href="#" onClick={(e) => { e.preventDefault(); setRoute('home'); }} className="logo">
            <span className="mark">KGS</span>
            <span className="sub">Home Décor</span>
          </a>
          <div className="nav-links">
            {link('home', 'Home')}
            {link('shop', 'Shop')}
            {link('about', 'Our Story')}
            {link('contact', 'Contact')}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={onSearch}>
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="icon-btn" onClick={() => setRoute('wishlist')} style={{ position:'relative' }}>
              <span className="material-symbols-outlined">favorite</span>
              {wishlist > 0 && <span className="pip">{wishlist}</span>}
            </button>
            <button className="icon-btn" onClick={() => setRoute('cart')} style={{ position:'relative' }}>
              <span className="material-symbols-outlined">shopping_bag</span>
              {cart > 0 && <span className="pip">{cart}</span>}
            </button>
            <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={'mobile-nav' + (menuOpen ? ' open' : '')}>
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}/>
        <div className="mobile-nav-panel">
          <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'1.3rem', color:'#1A1A1A', marginBottom:8 }}>
            KGS Home Décor
          </div>
          {mobileLink('home', 'Home')}
          {mobileLink('shop', 'Shop')}
          {mobileLink('wishlist', 'Wishlist')}
          {mobileLink('cart', 'Cart')}
          {mobileLink('about', 'Our Story')}
          {mobileLink('contact', 'Contact')}
          <div style={{ marginTop:'auto', paddingTop: 24 }}>
            <a href="https://wa.me/919789182921" style={{ display:'flex', alignItems:'center', gap: 10, padding:'12px 0', color:'#25D366', fontWeight:600 }}>
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
            <div style={{ fontSize: 11, color:'#5E5B59', marginTop: 12, lineHeight: 1.6 }}>
              185/G Junction Rd<br/>Virudhachalam 606001<br/>10 AM – 10 PM, every day
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// ===== Trust Strip ==========================================================
function TrustStrip() {
  const item = (icon, title, sub) => (
    <div className="trust-item">
      <div className="trust-icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <div className="trust-title">{title}</div>
        <div className="trust-sub">{sub}</div>
      </div>
    </div>
  );
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-row">
          {item('local_shipping', 'Free Delivery',     'Every order in Virudhachalam. ₹5K+ ships free pan-India.')}
          {item('replay',         'Changed Your Mind?','Return it within 7 days. No questions.')}
          {item('verified',       'Hand-Checked',      'We look at every piece before it ships.')}
          {item('payments',       'Pay How You Like',  'UPI, card, net banking, or COD.')}
          {item('chat',           'Text Us Anytime',   'WhatsApp — we reply fast.')}
        </div>
      </div>
    </section>
  );
}

// ===== Newsletter ============================================================
function Newsletter() {
  return (
    <div className="container">
      <section className="newsletter">
        <div>
          <h3>New pieces land every month. Be the first to know.</h3>
          <p>Drop your email. We send one newsletter a month — new arrivals, sale pieces, and whatever just came in from the showroom.</p>
        </div>
        <div className="newsletter-form">
          <input className="newsletter-input" placeholder="your@email.com" type="email"/>
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

// ===== Footer ================================================================
function Footer({ setRoute }) {
  const col = (title, items) => (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {items.map(([label, route]) => (
          <li key={label}>
            <a href="#" onClick={(e) => { e.preventDefault(); if (route && setRoute) setRoute(route); }}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" onClick={(e) => { e.preventDefault(); if (setRoute) setRoute('home'); }} className="logo" style={{ marginBottom: 18 }}>
              <span className="mark" style={{ color:'#fff' }}>KGS</span>
              <span className="sub" style={{ color:'#C5A880' }}>Home Décor</span>
            </a>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.55)', maxWidth:260, lineHeight:1.75 }}>
              Bringing premium, hand-curated home décor directly to your doorstep.
            </p>
            <div style={{ fontSize: 12.5, color:'rgba(255,255,255,0.45)', marginTop: 10, lineHeight: 1.7 }}>
              185/G Junction Road<br/>Virudhachalam 606001<br/>Tamil Nadu
            </div>
            <div className="footer-socials">
              <a href="#" onClick={(e) => e.preventDefault()} title="Instagram">
                <span className="material-symbols-outlined" style={{ fontSize:17 }}>photo_camera</span>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} title="Facebook">
                <span className="material-symbols-outlined" style={{ fontSize:17 }}>thumb_up</span>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} title="YouTube">
                <span className="material-symbols-outlined" style={{ fontSize:17 }}>play_circle</span>
              </a>
            </div>
            <div style={{ marginTop: 32 }}>
              <h4 style={{ marginBottom: 12, color: '#fff', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Stay in the loop</h4>
              <div style={{ display: 'flex', gap: 0, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                <input type="email" placeholder="Email address..." style={{ flex: 1, background: 'transparent', border: 'none', padding: '10px 14px', color: '#fff', fontSize: 13, outline: 'none' }} />
                <button style={{ background: '#C5A880', color: '#1A1614', border: 'none', padding: '0 16px', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}>Join</button>
              </div>
            </div>
          </div>
          {col('Shop', [
            ['Vases & Décor',     'shop'],
            ['Fountains & Pooja', 'shop'],
            ['Chairs & Sofas',    'shop'],
            ['Lighting',          'shop'],
            ['Gifts & Hampers',   'shop'],
            ['Statues & Idols',   'shop'],
          ])}
          {col('Help', [
            ['Shipping & Delivery',  null],
            ['Returns & Refunds',    null],
            ['FAQ',                  null],
            ['Track Order',          null],
            ['Payment Options',      null],
          ])}
          {col('Company', [
            ['About Us',  'about'],
            ['Our Story', 'about'],
            ['Blog',      null],
            ['Contact',   'contact'],
          ])}
          <div className="footer-col">
            <h4>Talk to Us</h4>
            <ul>
              <li className="info-line">
                <span className="material-symbols-outlined">mail</span>
                <a href="mailto:hello@kgshomedecors.in">hello@kgshomedecors.in</a>
              </li>
              <li className="info-line">
                <span className="material-symbols-outlined">call</span>
                <a href="tel:+919789182921">+91 97891 82921</a>
              </li>
              <li className="info-line">
                <span className="material-symbols-outlined">schedule</span>
                Every day · 10 AM – 10 PM
              </li>
            </ul>
            <div className="footer-pay" style={{ marginTop: 18 }}>
              <span>VISA</span>
              <span>MC</span>
              <span>UPI</span>
              <span>AMEX</span>
              <span>COD</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KGS Home Décors, Virudhachalam. All rights reserved.</span>
          <div className="links">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Shipping Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== WhatsApp Float ========================================================
function WAFloat() {
  return (
    <a className="wa-float" href="https://wa.me/919789182921">
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:22, height:22, flexShrink:0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
      </svg>
      Chat With Us
    </a>
  );
}

Object.assign(window, {
  PRODUCTS, CATEGORIES, TESTIMONIALS, IG_TILES, fmtPrice,
  Announcement, Nav, TrustStrip, Newsletter, Footer, WAFloat
});
