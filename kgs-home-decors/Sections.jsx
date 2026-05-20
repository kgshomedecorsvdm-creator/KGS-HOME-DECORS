/* KGS Home Décors — Home page sections */

// ====== HERO ================================================================
function Hero({ onShop, onSellers }) {
  const SLIDES = [
    {
      img: 'assets/lifestyle/showroom_interior.webp',
      eyebrow: 'New Arrivals · Spring 2026',
      headline: (<>New pieces just in.<br/>Come see what we <em>picked</em><br/>this season.</>),
      sub: 'Free delivery in Virudhachalam. Orders over ₹5,000 ship free across India.',
    },
    {
      img: 'assets/banners/storefront_hero.webp',
      eyebrow: 'Visit Us',
      headline: (<>We\'re open every day<br/>on <em>Junction Road,</em><br/>Virudhachalam.</>),
      sub: '10 AM to 10 PM. Free parking. No appointment needed.',
    },
    {
      img: 'assets/lifestyle/room_zen.webp',
      eyebrow: 'Heritage Pieces',
      headline: (<>Made the way<br/>things were <em>made</em><br/>to last.</>),
      sub: 'Brass. Stone. Slow craft. Every piece hand-checked before it ships.',
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
        {/* Slide indicators — horizontal row above headline */}
        <div className="hero-slides-indicator">
          {SLIDES.map((_, idx) => (
            <React.Fragment key={idx}>
              <span
                className={idx === i ? 'active' : ''}
                onClick={() => set(idx)}>
                {String(idx + 1).padStart(2, '0')}
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
            Browse the Collection
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="btn btn-ghost" onClick={onSellers}>See Best Sellers</button>
        </div>

        <div className="hero-stats">
          <div>
            <b>500+</b>
            <span>Pieces in stock now</span>
          </div>
          <div className="hero-stats__divider"/>
          <div>
            <b>5.0<span className="hero-stats__star">★</span></b>
            <span>240+ on Google</span>
          </div>
          <div className="hero-stats__divider"/>
          <div>
            <b>Free</b>
            <span>Delivery in Virudhachalam</span>
          </div>
        </div>

        <div className="hero-arrows" style={{ marginTop: 20 }}>
          <button
            className="carousel-arrow"
            style={{ position:'static', transform:'none', boxShadow:'0 8px 18px -8px rgba(0,0,0,0.18)' }}
            onClick={() => set(i - 1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            className="carousel-arrow"
            style={{ position:'static', transform:'none', boxShadow:'0 8px 18px -8px rgba(0,0,0,0.18)' }}
            onClick={() => set(i + 1)}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="hero-photo">
        <img key={s.img} src={s.img} alt="" style={{ animation: 'heroFade 700ms ease' }}/>
        <div className="hero-floating-chip">
          <span className="stars">★★★★★</span>
          <b>5.0</b>
          <span style={{ color:'#5E5B59' }}>240+ on Google</span>
        </div>
        <div className="hero-delivery-chip">
          <span className="material-symbols-outlined">local_shipping</span>
          <div>
            <b>Free in Virudhachalam</b>
            <span>₹5,000+ ships free pan-India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ====== CATEGORY GRID =======================================================
function CategoryGrid({ onClick }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Browse</div>
            <h2>What are you looking for?</h2>
          </div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onClick(); }}
            className="view-all">
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map(c => (
            <div key={c.id} className="cat-card" onClick={() => onClick(c.id)}>
              <div className="cat-frame">
                <img src={c.img} alt={c.label} loading="lazy"/>
              </div>
              <div className="cat-name">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== PRODUCT CARD ========================================================
function ProductCard({ p, onAdd, onView, wishlisted, onWishToggle }) {
  const proof = (() => {
    if (p.stock && p.stock <= 4) return { tone:'warm', icon:'local_fire_department', text: `Only ${p.stock} left` };
    if (p.sold && p.sold >= 40)  return { tone:'ink',  icon:'trending_up',           text: `${p.sold} sold this week` };
    if (p.sold && p.sold >= 20)  return { tone:'gold', icon:'visibility',            text: `${p.sold} people viewing` };
    return null;
  })();

  return (
    <div className="prod-card">
      <div className="prod-img" onClick={() => onView(p)} style={{ cursor:'pointer' }}>
        {p.badge && (
          <span className={
            'prod-badge' +
            (p.badgeKind === 'gold' ? ' prod-badge--gold' :
             p.badgeKind === 'ink'  ? ' prod-badge--ink'  :
             p.badgeKind === 'warm' ? ' prod-badge--warm' : '')
          }>{p.badge}</span>
        )}
        {p.off && <span className="prod-off">{p.off}</span>}
        <button
          className={'heart-btn' + (wishlisted ? ' active' : '')}
          onClick={(e) => { e.stopPropagation(); onWishToggle(p.id); }}
          aria-label="Save to wishlist">
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <img src={p.image} alt={p.name} loading="lazy"/>
        <div className="prod-quick" onClick={(e) => { e.stopPropagation(); onView(p); }}>
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
      <button className="prod-cta" onClick={() => onAdd(p)}>
        <span className="material-symbols-outlined">shopping_bag</span>
        Add to Cart
      </button>
    </div>
  );
}

// ====== BEST SELLERS ========================================================
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
            <div className="label-tag">This week</div>
            <h2>What's flying off the shelves</h2>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="view-all">
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="carousel-wrap">
          <button
            className="carousel-arrow left"
            onClick={() => setStart(s => (s - 1 + total) % total)}
            aria-label="Previous">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            className="carousel-arrow right"
            onClick={() => setStart(s => (s + 1) % total)}
            aria-label="Next">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {view.map((p, idx) => (
              <ProductCard
                key={p.id + '-' + idx}
                p={p}
                onAdd={onAdd}
                onView={onView}
                wishlisted={wishlist.includes(p.id)}
                onWishToggle={onWishToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== WHY KGS =============================================================
function WhyKGS() {
  const ROWS = [
    {
      icon: 'verified',
      h: 'We look at every piece.',
      s: 'Before anything ships, someone at the showroom checks it by hand. If it\'s not right, it doesn\'t go out.',
    },
    {
      icon: 'local_shipping',
      h: 'Free delivery, properly packed.',
      s: 'Free in Virudhachalam on every order. Over ₹5,000 ships free anywhere in India. Packed so it arrives intact.',
    },
    {
      icon: 'replay',
      h: 'Return it if you don\'t love it.',
      s: 'Seven days to change your mind. No forms, no restocking fees. We\'ll sort it out over WhatsApp.',
    },
    {
      icon: 'chat',
      h: 'We pick up the phone.',
      s: 'WhatsApp us. We\'re on Junction Road — real owners, real answers. Not a call centre.',
    },
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-head">
          <div className="label-tag">Why KGS</div>
          <h2>Four things we actually do.</h2>
        </div>
        <div className="why-grid">
          {ROWS.map((r, idx) => (
            <div key={r.h} className="why-card">
              <div className="why-num">0{idx + 1}</div>
              <div className="why-icon">
                <span className="material-symbols-outlined">{r.icon}</span>
              </div>
              <div className="why-h">{r.h}</div>
              <div className="why-s">{r.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== COMPLETE THE LOOK ===================================================
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
            <img src="assets/lifestyle/room_living.webp" alt="Heritage lounge setup"/>
            <div className="bundle-photo-tag">Shot in our showroom</div>
          </div>
          <div className="bundle-body">
            <div className="label-tag" style={{ marginBottom: 14 }}>Complete the Look</div>
            <h2 style={{ fontSize: 32, lineHeight: 1.1, marginBottom: 12 }}>
              Three pieces, one mood.<br/>
              <em style={{ fontStyle:'italic', color:'#B89657', fontWeight: 400 }}>The Heritage Lounge.</em>
            </h2>
            <p style={{ fontSize: 13.5, marginBottom: 22, color:'#5E5B59', lineHeight: 1.75 }}>
              A floor vase, a brass clock, a banana plant. We ship them together as a set with a placement guide — so you're not guessing where things go.
            </p>
            <div className="bundle-items">
              {ITEMS.map((p, idx) => (
                <button key={p.id} className="bundle-item" onClick={() => onView(p)}>
                  <img src={p.image} alt={p.name}/>
                  <div>
                    <div className="bundle-item__name">{p.name}</div>
                    <div className="bundle-item__price">{fmtPrice(p.price)}</div>
                  </div>
                  {idx < ITEMS.length - 1 && <span className="bundle-plus">+</span>}
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

// ====== PROMO BANNER ========================================================
function PromoBanner({ onShop }) {
  return (
    <section style={{ padding: '20px 0 60px' }}>
      <div className="container">
        <div className="promo">
          <div className="promo-copy">
            <div className="promo-eyebrow">Right Now</div>
            <div className="promo-headline">
              Up to <em>30% off</em><br/>on selected pieces.
            </div>
            <div>
              <button className="btn btn-gold" onClick={onShop}>
                See What's on Sale
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="promo-photo">
            <img src="assets/banners/split_lighting.webp" alt="On-sale collection"/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====== TESTIMONIALS ========================================================
function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Customer Stories</div>
            <h2>What people say once they've moved in.</h2>
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} className="view-all">
            All Reviews <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20 }}>
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
              <div className="thumb">
                <img src={t.thumb} alt="" loading="lazy"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== INSTAGRAM ============================================================
function Instagram() {
  return (
    <section className="section" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label-tag">Follow Along</div>
            <h2>Follow us @kgs_home_decor</h2>
            <div style={{ fontSize:13, color:'#5E5B59', marginTop:6 }}>
              Real pieces, real rooms, real showroom.
            </div>
          </div>
          <a href="https://instagram.com/kgs_home_decor" className="view-all">
            Open Instagram <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="ig-grid">
          {IG_TILES.map((src, idx) => (
            <div key={idx} className="ig-tile">
              <img src={src} alt={'KGS showroom ' + (idx + 1)} loading="lazy"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, CategoryGrid, BestSellers, PromoBanner,
  Testimonials, Instagram, ProductCard, WhyKGS, CompleteTheLook
});
