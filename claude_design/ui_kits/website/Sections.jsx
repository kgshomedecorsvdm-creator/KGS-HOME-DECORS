/* Home page sections — modern revision */

// ====== HERO ============================================================
function Hero({ onShop, onSellers }) {
  const SLIDES = [
    {
      img: '../../assets/lifestyle/showroom_interior.webp',
      eyebrow: 'New Collection · Spring 2026',
      headline: <>Luxury Home Décor<br/>Crafted For <em>Modern</em><br/>Spaces.</>,
      sub: 'Personally curated. Free delivery on orders over ₹5,000.',
    },
    {
      img: '../../assets/banners/storefront_hero.webp',
      eyebrow: 'Visit The Showroom',
      headline: <>Visit Our Showroom<br/>On <em>Junction Road,</em><br/>Virudhachalam.</>,
      sub: 'Open daily · 10 AM – 10 PM · Free parking.',
    },
    {
      img: '../../assets/lifestyle/room_zen.webp',
      eyebrow: 'Heritage Collection',
      headline: <>Heritage Décor<br/>For <em>Homes That</em><br/>Hold Memory.</>,
      sub: 'Brass · stone · slow craft. Hand-checked, every piece.',
    },
  ];
  const [i, setI] = React.useState(0);
  const s = SLIDES[i];
  const set = (n) => setI((n + SLIDES.length) % SLIDES.length);

  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero">
      <div className="hero-copy">
        <div className="hero-slides-indicator">
          {SLIDES.map((_, idx) => (
            <React.Fragment key={idx}>
              <span className={idx === i ? 'active' : ''} onClick={()=>set(idx)}>
                {String(idx+1).padStart(2, '0')}
              </span>
              {idx < SLIDES.length - 1 && <span className="rule"/>}
            </React.Fragment>
          ))}
        </div>

        <div className="hero-eyebrow">
          <span className="hero-eyebrow__dot"/>
          {s.eyebrow}
        </div>

        <h1>{s.headline}</h1>
        <p className="hero-sub">{s.sub}</p>

        <div className="hero-ctas">
          <button className="btn btn-dark" onClick={onShop}>
            Shop Collection
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="btn btn-ghost" onClick={onSellers}>Explore Best Sellers</button>
        </div>

        <div className="hero-stats">
          <div>
            <b>500+</b>
            <span>Curated pieces</span>
          </div>
          <div className="hero-stats__divider"/>
          <div>
            <b>5.0<span className="hero-stats__star">★</span></b>
            <span>240+ Google reviews</span>
          </div>
          <div className="hero-stats__divider"/>
          <div>
            <b>7&#8209;day</b>
            <span>Easy returns</span>
          </div>
        </div>

        <div className="hero-arrows">
          <button className="carousel-arrow" style={{ position:'static', transform:'none', boxShadow:'0 8px 18px -8px rgba(0,0,0,0.18)' }} onClick={()=>set(i-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="carousel-arrow" style={{ position:'static', transform:'none', boxShadow:'0 8px 18px -8px rgba(0,0,0,0.18)' }} onClick={()=>set(i+1)}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="hero-photo">
        <img key={s.img} src={s.img} alt="" style={{ animation: 'heroFade 700ms ease' }} />
        <div className="hero-floating-chip">
          <span className="stars">★★★★★</span>
          <b>5.0</b>
          <span style={{ color:'#5E5B59' }}>240+ on Google</span>
        </div>
        <div className="hero-delivery-chip">
          <span className="material-symbols-outlined">local_shipping</span>
          <div>
            <b>Free delivery</b>
            <span>Same-day in Virudhachalam</span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes heroFade { from { opacity:0; transform:scale(1.03); } to { opacity:1; transform:scale(1); } }
      `}</style>
    </div>
  );
}

// ====== CATEGORY GRID ===================================================
function CategoryGrid({ onClick }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Collections</div>
            <h2>Shop by Category</h2>
          </div>
          <a href="#" onClick={(e)=>{e.preventDefault(); onClick();}} className="view-all">
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap: '24px 18px' }}>
          {CATEGORIES.map(c => (
            <div key={c.id} className="cat-card" onClick={()=>onClick(c.id)}>
              <div className="cat-frame"><img src={c.img} alt={c.label}/></div>
              <div className="cat-name">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== PRODUCT CARD ===================================================
function ProductCard({ p, onAdd, onView, wishlisted, onWishToggle }) {
  const proof = (() => {
    if (p.stock && p.stock <= 4) return { tone:'warm', icon:'local_fire_department', text: `Only ${p.stock} left in stock` };
    if (p.sold && p.sold >= 40)  return { tone:'ink',  icon:'trending_up',           text: `${p.sold} sold this week` };
    if (p.sold && p.sold >= 20)  return { tone:'gold', icon:'visibility',            text: `${p.sold} viewing this week` };
    return null;
  })();

  return (
    <div className="prod-card">
      <div className="prod-img" onClick={()=>onView(p)} style={{ cursor:'pointer' }}>
        {p.badge && <span className={'prod-badge' + (p.badgeKind === 'gold' ? ' prod-badge--gold' : p.badgeKind === 'ink' ? ' prod-badge--ink' : p.badgeKind === 'warm' ? ' prod-badge--warm' : '')}>{p.badge}</span>}
        {p.off && <span className="prod-off">{p.off}</span>}
        <button className={'heart-btn' + (wishlisted ? ' active' : '')} onClick={(e)=>{ e.stopPropagation(); onWishToggle(p.id); }} aria-label="Wishlist">
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <img src={p.image} alt={p.name}/>
        <div className="prod-quick" onClick={(e)=>{ e.stopPropagation(); onView(p); }}>
          <span className="material-symbols-outlined">visibility</span> Quick View
        </div>
      </div>
      <div className="prod-body">
        <div className="prod-cat">{p.category}</div>
        <div className="prod-name">{p.name}</div>
        <div className="prod-rating">
          <span className="stars">★★★★★</span>
          <span><b style={{ color:'#1A1A1A' }}>{p.rating.toFixed(1)}</b> · {p.reviews} reviews</span>
        </div>
      </div>
      <div className="prod-price">
        <span className="now">{fmtPrice(p.price)}</span>
        {p.was && <span className="was">{fmtPrice(p.was)}</span>}
      </div>
      {proof && (
        <div className={'prod-proof prod-proof--' + proof.tone}>
          <span className="material-symbols-outlined">{proof.icon}</span>
          {proof.text}
        </div>
      )}
      <button className="prod-cta" onClick={()=>onAdd(p)}>
        <span className="material-symbols-outlined">shopping_bag</span>
        Add to Cart
      </button>
    </div>
  );
}

// ====== BEST SELLERS ====================================================
function BestSellers({ onAdd, onView, wishlist, onWishToggle }) {
  const [start, setStart] = React.useState(0);
  const pool = PRODUCTS;
  const total = pool.length;
  const view = Array.from({ length: 4 }, (_, k) => pool[(start + k) % total]);
  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">This Week</div>
            <h2>Best Sellers</h2>
          </div>
          <a href="#" onClick={(e)=>e.preventDefault()} className="view-all">View All <span className="material-symbols-outlined">arrow_forward</span></a>
        </div>
        <div className="carousel-wrap">
          <button className="carousel-arrow left"  onClick={()=>setStart(s => (s - 1 + total) % total)}><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="carousel-arrow right" onClick={()=>setStart(s => (s + 1) % total)}><span className="material-symbols-outlined">chevron_right</span></button>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {view.map((p, idx) => (
              <ProductCard key={p.id + '-' + idx} p={p} onAdd={onAdd} onView={onView}
                           wishlisted={wishlist.includes(p.id)} onWishToggle={onWishToggle}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== WHY KGS — premium promise grid ==================================
function WhyKGS() {
  const ROWS = [
    { icon:'verified',        h:'Hand-checked, every piece',  s:'Each item passes a personal QC at our showroom before it ships.' },
    { icon:'local_shipping',  h:'Free delivery, white-glove', s:'Free over ₹5,000. Local same-day. Pan-India in 3–7 days.' },
    { icon:'replay',          h:'7-day no-fuss returns',      s:'Don’t love it? Return within 7 days for a full refund.' },
    { icon:'chat',            h:'Reach a human in 10 minutes',s:'WhatsApp the showroom. Real owners. Real answers.' },
  ];
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-head">
          <div className="label-tag">Why KGS</div>
          <h2>Four quiet promises<br/>we keep on every order.</h2>
        </div>
        <div className="why-grid">
          {ROWS.map((r, idx) => (
            <div key={r.h} className="why-card">
              <div className="why-num">0{idx + 1}</div>
              <div className="why-icon"><span className="material-symbols-outlined">{r.icon}</span></div>
              <div className="why-h">{r.h}</div>
              <div className="why-s">{r.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== COMPLETE THE LOOK — cross-sell strip ============================
function CompleteTheLook({ onAdd, onView }) {
  const ITEMS = [
    PRODUCTS.find(p => p.id === 'vase-marble'),
    PRODUCTS.find(p => p.id === 'plant-banana'),
    PRODUCTS.find(p => p.id === 'clock-peacock'),
  ].filter(Boolean);
  const total = ITEMS.reduce((s, p) => s + p.price, 0);
  const bundle = Math.round(total * 0.88 / 50) * 50;
  return (
    <section className="section" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <div className="container">
        <div className="bundle">
          <div className="bundle-photo">
            <img src="../../assets/lifestyle/room_living.webp" alt=""/>
            <div className="bundle-photo-tag">Photographed in our showroom</div>
          </div>
          <div className="bundle-body">
            <div className="label-tag" style={{ marginBottom: 14 }}>Complete the Look</div>
            <h2 style={{ fontSize: 32, lineHeight: 1.1, marginBottom: 12 }}>The Heritage Lounge<br/><em style={{ fontStyle:'italic', color:'#B89657', fontWeight: 400 }}>three pieces, one mood.</em></h2>
            <p style={{ fontSize: 13.5, marginBottom: 22, color:'#5E5B59' }}>A floor vase, a brass clock, a banana plant. Buy them together and we ship them as a styled set with our complimentary placement guide.</p>
            <div className="bundle-items">
              {ITEMS.map((p, i) => (
                <button key={p.id} className="bundle-item" onClick={()=>onView(p)}>
                  <img src={p.image} alt={p.name}/>
                  <div>
                    <div className="bundle-item__name">{p.name}</div>
                    <div className="bundle-item__price">{fmtPrice(p.price)}</div>
                  </div>
                  {i < ITEMS.length - 1 && <span className="bundle-plus">+</span>}
                </button>
              ))}
            </div>
            <div className="bundle-cta-row">
              <div className="bundle-price">
                <div className="bundle-price__strike">{fmtPrice(total)}</div>
                <div className="bundle-price__now">{fmtPrice(bundle)} <span>bundle</span></div>
                <div className="bundle-price__save">You save {fmtPrice(total - bundle)}</div>
              </div>
              <button className="btn btn-dark" onClick={() => ITEMS.forEach(p => onAdd(p))}>
                <span className="material-symbols-outlined">shopping_bag</span>
                Add Set to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ====== PROMO BANNER ====================================================
function PromoBanner({ onShop }) {
  return (
    <section style={{ padding: '20px 0 60px' }}>
      <div className="container">
        <div className="promo">
          <div className="promo-copy">
            <div className="promo-eyebrow">Special Offer</div>
            <div className="promo-headline">Up to <em>30% Off</em><br/>On Premium Collection.</div>
            <div><button className="btn btn-gold" onClick={onShop}>Shop Now <span className="material-symbols-outlined">arrow_forward</span></button></div>
          </div>
          <div className="promo-photo">
            <img src="../../assets/banners/split_lighting.webp" alt="Premium collection"/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== TESTIMONIALS ====================================================
function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Customer Stories</div>
            <h2>What Our Customers Say</h2>
          </div>
          <a href="#" onClick={(e)=>e.preventDefault()} className="view-all">View All <span className="material-symbols-outlined">arrow_forward</span></a>
        </div>
        <div className="carousel-wrap">
          <button className="carousel-arrow left"><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="carousel-arrow right"><span className="material-symbols-outlined">chevron_right</span></button>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial">
                <div>
                  <div className="head-row">
                    <div className="avatar">{t.initial}</div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="stars">{'★'.repeat(t.stars)}</div>
                    </div>
                  </div>
                  <div className="quote">"{t.quote}"</div>
                </div>
                <div className="thumb"><img src={t.thumb} alt=""/></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== INSTAGRAM =======================================================
function Instagram() {
  return (
    <section className="section" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Follow Along</div>
            <h2>On Instagram</h2>
            <div style={{ fontSize:13, color:'#5E5B59', marginTop:6 }}>@kgs_home_decor</div>
          </div>
          <a href="#" onClick={(e)=>e.preventDefault()} className="view-all">View Instagram <span className="material-symbols-outlined">arrow_forward</span></a>
        </div>
        <div className="ig-grid">
          {IG_TILES.map((src, i) => (
            <div key={i} className="ig-tile"><img src={src} alt={'ig-' + i}/></div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, CategoryGrid, BestSellers, PromoBanner, Testimonials, Instagram, ProductCard, WhyKGS, CompleteTheLook });
