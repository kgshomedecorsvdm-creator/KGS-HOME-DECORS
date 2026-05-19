/* Catalogue + nav + footer chrome for the KGS website kit */

const PRODUCTS = [
  // === Real KGS catalogue (names from your live products.json) ===
  { id:'sofa-3seater',        name:'Premium 3-Seater Sofa',       category:'Furniture',     price:18500, was:22000, off:'16% OFF', rating:4.8, reviews:124, sold: 38, stock: 4,  image:'../../assets/products/sofa.webp',         badge:'Best Seller', badgeKind:'gold' },
  { id:'clock-brass',         name:'Antique Brass Wall Clock',    category:'Wall Clocks',   price: 1299, was: null, off:null,      rating:4.7, reviews: 98, sold: 64, stock: 12, image:'../../assets/products/clock.webp',        badge:'New',         badgeKind:'ink' },
  { id:'fountain-tabletop',   name:'Indoor Tabletop Fountain',    category:'Fountains',     price: 2850, was: null, off:null,      rating:4.9, reviews: 56, sold: 22, stock: 6,  image:'../../assets/products/fountain.webp',     badge:'Staff Pick',  badgeKind:'gold' },
  { id:'wall-art-botanical',  name:'Botanical Wall Art Panel',    category:'Wall Frames',   price: 1850, was: null, off:null,      rating:4.8, reviews:113, sold: 41, stock: 18, image:'../../assets/products/wall_decor.webp',   badge:null },
  { id:'plant-banana',        name:'Large Artificial Banana Plant',category:'Plants',       price: 3200, was: null, off:null,      rating:4.9, reviews: 84, sold: 31, stock: 9,  image:'../../assets/products/plant.png',         badge:'Popular',     badgeKind:'gold' },
  { id:'vase-ceramic',        name:'Designer Ceramic Vase',       category:'Vases',         price: 1950, was: null, off:null,      rating:5.0, reviews: 42, sold: 18, stock: 14, image:'../../assets/products/ceramic_vase.webp', badge:'New',         badgeKind:'ink' },
  { id:'lamp-table',          name:'Artisan Table Lamp',          category:'Lighting',      price: 3400, was: null, off:null,      rating:4.6, reviews: 72, sold: 27, stock: 11, image:'../../assets/products/table_lamp.webp',   badge:null },
  { id:'horse-statue',        name:'Decorative Horse Statue',     category:'Statues',       price: 4250, was: 5500, off:'23% OFF', rating:4.9, reviews:168, sold: 52, stock: 3,  image:'../../assets/products/horse.webp',        badge:'Best Seller', badgeKind:'gold' },
  // === Live catalogue extensions (matched with real product photos) ===
  { id:'clock-peacock',       name:'Peacock Brass Wall Clock',    category:'Wall Clocks',   price: 4250, was: null, off:null,      rating:4.9, reviews: 91, sold: 24, stock: 5,  image:'../../assets/products-real/clock-peacock.png',  badge:'Staff Pick', badgeKind:'gold' },
  { id:'fountain-lotus',      name:'Lotus Water Fountain',        category:'Fountains',     price: 4850, was: null, off:null,      rating:5.0, reviews: 42, sold: 16, stock: 8,  image:'../../assets/products-real/fountain-01.png',    badge:null },
  { id:'vase-marble',         name:'Tall Marble Floor Vase',      category:'Vases',         price: 2650, was: 3200, off:'17% OFF', rating:4.8, reviews: 58, sold: 21, stock: 7,  image:'../../assets/products-real/vase-02.png',        badge:null },
  { id:'statue-ganesha',      name:'Ganesha Brass Statue',        category:'Statues',       price: 4250, was: 5500, off:'23% OFF', rating:4.9, reviews:168, sold: 47, stock: 2,  image:'../../assets/products-real/statue-01.png',      badge:'Selling Fast', badgeKind:'warm' },
];

const CATEGORIES = [
  { id:'wall-decor',   label:'Wall Décor',         img:'../../assets/categories/cat_wall_decor.webp' },
  { id:'lighting',     label:'Lighting',           img:'../../assets/categories/cat_lighting.webp' },
  { id:'furniture',    label:'Furniture',          img:'../../assets/categories/cat_sofas.webp' },
  { id:'textiles',     label:'Home Textiles',      img:'../../assets/lifestyle/room_bedroom.webp' },
  { id:'vases',        label:'Vases & Décor',      img:'../../assets/categories/cat_decor.webp' },
  { id:'mirrors',      label:'Mirrors',            img:'../../assets/lifestyle/room_hallway.webp' },
  { id:'clocks',       label:'Clocks',             img:'../../assets/banners/split_lighting.webp' },
  { id:'cushions',     label:'Cushions & Covers',  img:'../../assets/categories/cat_lifestyle.webp' },
  { id:'tables',       label:'Table Décor',        img:'../../assets/lifestyle/room_living.webp' },
  { id:'plants',       label:'Plants & Planters',  img:'../../assets/categories/cat_plants.webp' },
  { id:'fountains',    label:'Fountains & Pooja',  img:'../../assets/lifestyle/room_zen.webp' },
  { id:'baskets',      label:'Storage & Baskets',  img:'../../assets/lifestyle/showroom.webp' },
  { id:'statues',      label:'Statues',            img:'../../assets/banners/split_sofas.webp' },
  { id:'gifts',        label:'Gifts & Hampers',    img:'../../assets/categories/cat_gifts.webp' },
];

const TESTIMONIALS = [
  { name:'Priya Sharma', initial:'P', stars:5, quote:'Absolutely loved the quality and packaging. KGS never disappoints!', thumb:'../../assets/lifestyle/room_bedroom.webp' },
  { name:'Rohit Verma',  initial:'R', stars:5, quote:'Beautiful collection and fast delivery. Highly recommended!',        thumb:'../../assets/lifestyle/room_living.webp' },
  { name:'Ananya Iyer',  initial:'A', stars:5, quote:'The best place for premium home decor in India.',                    thumb:'../../assets/lifestyle/room_hallway.webp' },
];

const IG_TILES = [
  '../../assets/lifestyle/room_living.webp',
  '../../assets/lifestyle/room_bedroom.webp',
  '../../assets/lifestyle/room_hallway.webp',
  '../../assets/lifestyle/room_zen.webp',
  '../../assets/lifestyle/showroom.webp',
  '../../assets/lifestyle/showroom_interior.webp',
  '../../assets/categories/cat_decor.webp',
  '../../assets/categories/cat_lighting.webp',
  '../../assets/categories/cat_plants.webp',
  '../../assets/categories/cat_lifestyle.webp',
];

const fmtPrice = (n) => '₹' + n.toLocaleString('en-IN');

function Announcement() {
  const MSGS = [
    { icon:'local_shipping', text:<>Free delivery on orders over <b>₹5,000</b> &middot; pan India</> },
    { icon:'star',           text:<><b>5.0/5</b> on Google &middot; 240+ verified reviews</> },
    { icon:'replay',         text:<><b>7-day</b> easy returns &middot; no questions asked</> },
    { icon:'verified',       text:<><b>500+</b> personally curated pieces &middot; export-grade quality</> },
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
          <a href="#" onClick={(e)=>e.preventDefault()}>Track Order</a>
          <span className="announce-divider"/>
          <a href="#" onClick={(e)=>e.preventDefault()}>WhatsApp · +91 97891 82921</a>
        </span>
      </div>
    </div>
  );
}

function Nav({ route, setRoute, cart, wishlist, onSearch }) {
  const link = (id, label) => (
    <a className={'nav-link' + (route === id ? ' active' : '')}
       onClick={(e) => { e.preventDefault(); setRoute(id); }} href="#">{label}</a>
  );
  return (
    <div className="nav-wrap">
      <div className="container nav-bar">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home');}} className="logo">
          <span className="mark">KGS</span>
          <span className="sub">Home Décor</span>
        </a>
        <div className="nav-links">
          {link('home','Home')}
          {link('shop','Shop')}
          {link('about','Our Story')}
          {link('contact','Contact')}
        </div>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onSearch}><span className="material-symbols-outlined">search</span></button>
          <a href="#" onClick={(e)=>e.preventDefault()}><span className="material-symbols-outlined">person</span></a>
          <a href="#" onClick={(e)=>e.preventDefault()} style={{ position:'relative', display:'inline-flex' }}>
            <span className="material-symbols-outlined">favorite</span>
            {wishlist > 0 && <span className="pip">{wishlist}</span>}
          </a>
          <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('cart');}} style={{ position:'relative', display:'inline-flex' }}>
            <span className="material-symbols-outlined">shopping_bag</span>
            {cart > 0 && <span className="pip">{cart}</span>}
          </a>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const item = (icon, title, sub) => (
    <div className="trust-item">
      <div className="trust-icon"><span className="material-symbols-outlined">{icon}</span></div>
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
          {item('local_shipping', 'Free Delivery',    'Orders over \u20B95,000')}
          {item('replay',         '7-Day Returns',    'No questions asked')}
          {item('verified',       'Export Quality',   'Hand-checked, every piece')}
          {item('lock',           'Secure Checkout',  'UPI · Cards · COD')}
          {item('chat',           'WhatsApp Support', 'Replies in ~10 min')}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <div className="container">
      <section className="newsletter">
        <div>
          <h3>Stay Updated With New Arrivals &amp; Offers</h3>
          <p>Subscribe to our newsletter and get 10% off on your first order.</p>
        </div>
        <div className="newsletter-form">
          <input className="newsletter-input" placeholder="Enter your email" />
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  const col = (title, items) => (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>{items.map(t => <li key={t}><a href="#" onClick={(e)=>e.preventDefault()}>{t}</a></li>)}</ul>
    </div>
  );
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" onClick={(e)=>e.preventDefault()} className="logo" style={{ marginBottom: 18 }}>
              <span className="mark" style={{ color:'#fff' }}>KGS</span>
              <span className="sub" style={{ color:'#C5A880' }}>Home Décor</span>
            </a>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.55)', maxWidth:260, lineHeight:1.7 }}>
              Timeless home décor crafted to bring beauty, elegance and comfort to your spaces.
            </p>
            <div className="footer-socials">
              <a href="#" onClick={(e)=>e.preventDefault()}><span className="material-symbols-outlined" style={{ fontSize:17 }}>photo_camera</span></a>
              <a href="#" onClick={(e)=>e.preventDefault()}><span className="material-symbols-outlined" style={{ fontSize:17 }}>thumb_up</span></a>
              <a href="#" onClick={(e)=>e.preventDefault()}><span className="material-symbols-outlined" style={{ fontSize:17 }}>play_circle</span></a>
            </div>
          </div>
          {col('Shop',    ['New Arrivals','Best Sellers','Collections','Wall Décor','Lighting','Furniture','Sale'])}
          {col('Help',    ['Shipping & Delivery','Returns & Refunds','FAQ','Track Order','Payment Options'])}
          {col('Company', ['About Us','Our Story','Careers','Blog','Contact Us'])}
          <div className="footer-col">
            <h4>Customer Support</h4>
            <ul>
              <li className="info-line"><span className="material-symbols-outlined">mail</span><a href="#" onClick={(e)=>e.preventDefault()}>support@kgshome.com</a></li>
              <li className="info-line"><span className="material-symbols-outlined">call</span><a href="#" onClick={(e)=>e.preventDefault()}>+91 98765 43210</a></li>
              <li className="info-line"><span className="material-symbols-outlined">schedule</span>Mon – Sun · 10 AM – 7 PM</li>
            </ul>
            <div className="footer-pay" style={{ marginTop: 18 }}>
              <span>VISA</span><span>MC</span><span>UPI</span><span>AMEX</span><span>COD</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KGS Home Décor. All Rights Reserved.</span>
          <div className="links">
            <a href="#" onClick={(e)=>e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Terms & Conditions</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Shipping Policy</a>
            <a href="#" onClick={(e)=>e.preventDefault()}>Return Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WAFloat() {
  return (
    <a className="wa-float" href="#" onClick={(e)=>e.preventDefault()}>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:22, height:22, flexShrink:0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
      </svg>
      Chat With Us
    </a>
  );
}

Object.assign(window, { PRODUCTS, CATEGORIES, TESTIMONIALS, IG_TILES, fmtPrice, Announcement, Nav, TrustStrip, Newsletter, Footer, WAFloat });
