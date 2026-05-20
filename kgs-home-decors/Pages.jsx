/* KGS Home Décors — Inner pages: Shop, ProductDetail, Cart, Checkout, OrderConfirmation, Wishlist, About, Contact */

// ===== SHARED SUMLINE =======================================================
function Sumline({ label, value, note, bold }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'6px 0' }}>
      <div>
        <div style={{ fontSize: bold ? 14 : 13, fontWeight: bold ? 600 : 400, color: bold ? '#1A1A1A' : '#5E5B59' }}>
          {label}
        </div>
        {note && <div style={{ fontSize:10, color:'#5E5B59' }}>{note}</div>}
      </div>
      <div style={{
        fontFamily: bold ? '"Crimson Pro",serif' : 'Jost,sans-serif',
        fontWeight: 500,
        fontSize: bold ? '1.4rem' : 14,
        color: '#1A1A1A'
      }}>{value}</div>
    </div>
  );
}

// ===== SHOP PAGE ============================================================
function ShopPage({ filter, setFilter, onAdd, onView, wishlist, onWishToggle }) {
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p =>
        p.category.toLowerCase().replace(/[^a-z]/g, '').includes(
          filter.toLowerCase().replace(/[^a-z]/g, '')
        )
      );
  const cats = ['all', ...new Set(PRODUCTS.map(p => p.category))];

  return (
    <div data-screen-label="Shop">
      <section style={{ background:'#F2E8D6', padding:'56px 0 36px', paddingTop:'calc(56px)' }}>
        <div className="container">
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>
            The Collection
          </div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'3rem', lineHeight:1.05, letterSpacing:'-0.018em', marginBottom:10 }}>
            500 pieces.<br/><em style={{ fontStyle:'italic', color:'#B89657', fontWeight:400 }}>Find the one that's yours.</em>
          </h1>
          <p style={{ maxWidth:560, fontSize:14, color:'#5E5B59', lineHeight:1.8 }}>
            Everything you see here is in our showroom on Junction Road. Free delivery in Virudhachalam. Orders over ₹5,000 ship free across India.
          </p>
        </div>
      </section>

      <section style={{ background:'#fff', padding:'18px 0', borderBottom:'1px solid rgba(197,168,128,0.20)', position:'sticky', top:80, zIndex:40 }}>
        <div className="container" style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontSize:10, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#5E5B59', marginRight:10 }}>
            Filter by
          </span>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: '8px 16px',
                background: filter === c ? '#1A1A1A' : 'transparent',
                color:    filter === c ? '#fff' : '#1A1A1A',
                border: '1px solid ' + (filter === c ? '#1A1A1A' : 'rgba(26,26,26,0.20)'),
                borderRadius: 9999,
                fontFamily: 'Jost,sans-serif', fontSize: 10.5, fontWeight: 600,
                letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 200ms ease',
              }}>
              {c === 'all' ? 'All (' + PRODUCTS.length + ')' : c}
            </button>
          ))}
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'40px 0 96px' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign:'center', padding:'60px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize:44, color:'#C5A880' }}>search_off</span>
              <h3 style={{ marginTop:12, fontSize:'1.3rem' }}>Nothing here for that filter.</h3>
              <p style={{ marginBottom:20 }}>Try a different category or browse everything.</p>
              <button className="btn btn-dark" onClick={() => setFilter('all')}>Show All</button>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:20 }}>
              {filtered.map(p => (
                <ProductCard
                  key={p.id}
                  p={p}
                  onAdd={onAdd}
                  onView={onView}
                  wishlisted={wishlist.includes(p.id)}
                  onWishToggle={onWishToggle}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ===== PRODUCT DETAIL =======================================================
function ProductDetail({ p, onAdd, onBack }) {
  const [qty, setQty] = React.useState(1);
  if (!p) return null;

  const FREE_OVER = 5000;
  const lineTotal = p.price * qty;
  const toFree = Math.max(0, FREE_OVER - lineTotal);
  const related = PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);
  const moreFromUs = related.length < 4
    ? [...related, ...PRODUCTS.filter(x => x.id !== p.id && !related.includes(x))].slice(0, 4)
    : related;

  return (
    <div data-screen-label={'Product / ' + p.name}>
      <section style={{ background:'#FAF8F4', padding:'18px 0', borderBottom:'1px solid rgba(197,168,128,0.20)' }}>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            style={{ fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'#5E5B59', display:'inline-flex', alignItems:'center', gap:6 }}>
            <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_back</span>
            Back to Shop
          </a>
          <div style={{ fontSize:11.5, color:'#5E5B59', display:'flex', alignItems:'center', gap:8 }}>
            <span className="material-symbols-outlined" style={{ color:'#B89657', fontSize:14 }}>local_fire_department</span>
            <b style={{ color:'#1A1A1A', fontWeight:600 }}>{p.sold || 24}</b>
            &nbsp;people picked this up in the last 7 days
          </div>
        </div>
      </section>

      <section style={{ background:'#fff', padding:'56px 0 80px' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:64 }}>
          <div>
            <div style={{ background:'#F3EBDC', border:'1px solid rgba(197,168,128,0.30)', borderRadius:18, padding:48, aspectRatio:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
              {p.off && (
                <span style={{ position:'absolute', top:18, left:18, background:'#C97840', color:'#fff', fontSize:10, fontWeight:700, letterSpacing:'.16em', padding:'6px 12px', borderRadius:9999, textTransform:'uppercase' }}>
                  {p.off}
                </span>
              )}
              <img src={p.image} alt={p.name} style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:14 }}>
              {[p.image, p.image, p.image, p.image].map((src, idx) => (
                <div key={idx} style={{ aspectRatio:1, background:'#F3EBDC', borderRadius:10, overflow:'hidden', border: idx === 0 ? '2px solid #1A1A1A' : '1px solid rgba(197,168,128,0.30)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', padding: 10 }}>
                  <img src={src} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#B89657', marginBottom:12 }}>
              {p.category}
            </div>
            <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.4rem', lineHeight:1.05, letterSpacing:'-0.018em', marginBottom:16 }}>
              {p.name}
            </h1>

            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:24, flexWrap:'wrap' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 12px', background:'rgba(184,150,87,0.10)', borderRadius:9999 }}>
                <span style={{ color:'#B89657', letterSpacing:'.14em', fontSize:13 }}>★★★★★</span>
                <span style={{ fontSize:12.5, fontWeight:600, color:'#1A1A1A' }}>{p.rating.toFixed(1)}</span>
                <span style={{ fontSize:12, color:'#5E5B59' }}>({p.reviews} reviews)</span>
              </div>
              {p.badge && (
                <span style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'#1A1A1A', padding:'6px 14px', border:'1px solid rgba(26,26,26,0.16)', borderRadius:9999 }}>
                  {p.badge}
                </span>
              )}
            </div>

            <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:8 }}>
              <span style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.6rem', letterSpacing:'-0.01em' }}>
                {fmtPrice(p.price)}
              </span>
              {p.was && (
                <span style={{ fontSize:15, color:'#5E5B59', textDecoration:'line-through' }}>{fmtPrice(p.was)}</span>
              )}
              {p.was && (
                <span style={{ fontSize:11.5, color:'#C97840', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' }}>
                  Save {fmtPrice(p.was - p.price)}
                </span>
              )}
            </div>
            <div style={{ fontSize:12, color:'#5E5B59', marginBottom:22 }}>
              All taxes included · Free delivery over ₹5,000
            </div>

            {p.stock && p.stock <= 6 && (
              <div className="pdp-stock">
                <div className="pdp-stock__bar">
                  <span style={{ width: Math.max(8, (p.stock / 20) * 100) + '%' }}/>
                </div>
                <div className="pdp-stock__text">
                  <span className="material-symbols-outlined">local_fire_department</span>
                  <b>Only {p.stock} left</b> · restocking takes around 3 weeks
                </div>
              </div>
            )}

            <p style={{ marginBottom:28, fontSize:14.5, lineHeight:1.8, color:'#5E5B59' }}>
              Made to last — not just to look good in photos. We checked this one ourselves before listing it. If there's a defect when it arrives, we'll replace it, no argument.
            </p>

            <div className="pdp-trust">
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">local_shipping</span>
                <div>
                  <b>Free delivery</b>
                  <span>{toFree === 0 ? 'This order ships free' : 'Add ' + fmtPrice(toFree) + ' more'}</span>
                </div>
              </div>
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">replay</span>
                <div>
                  <b>7-day returns</b>
                  <span>Not happy? We'll sort it out.</span>
                </div>
              </div>
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">verified_user</span>
                <div>
                  <b>Hand-checked</b>
                  <span>Inspected at our showroom</span>
                </div>
              </div>
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">lock</span>
                <div>
                  <b>Secure checkout</b>
                  <span>UPI · Cards · COD</span>
                </div>
              </div>
            </div>

            <div style={{ display:'flex', gap:12, marginBottom:14, marginTop:26 }}>
              <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width:44, height:50, background:'none', border:'none', fontSize:17, cursor:'pointer' }}>−</button>
                <span style={{ width:36, textAlign:'center', fontWeight:500 }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width:44, height:50, background:'none', border:'none', fontSize:17, cursor:'pointer' }}>+</button>
              </div>
              <button className="btn btn-dark" style={{ flex:1 }} onClick={() => onAdd(p, qty)}>
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart · {fmtPrice(lineTotal)}
              </button>
            </div>
            <button
              className="btn btn-gold"
              style={{ width:'100%', background:'#25D366', borderColor:'#25D366' }}
              onClick={() => window.open('https://wa.me/919789182921?text=Hi, I want to ask about: ' + p.name, '_blank')}>
              <span className="material-symbols-outlined">chat</span>
              Ask on WhatsApp · We reply fast
            </button>
          </div>
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'64px 0 80px', borderTop:'1px solid rgba(197,168,128,0.20)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="label-tag">Goes Well With</div>
              <h2>You might also like</h2>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:20 }}>
            {moreFromUs.map(rp => (
              <ProductCard
                key={rp.id}
                p={rp}
                onAdd={(prod) => onAdd(prod, 1)}
                onView={() => {}}
                wishlisted={false}
                onWishToggle={() => {}}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="pdp-sticky">
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:20 }}>
          <div style={{ display:'flex', alignItems:'center', gap:14, minWidth:0 }}>
            <img src={p.image} alt="" style={{ width:44, height:44, borderRadius:8, objectFit:'cover', background:'#F3EBDC' }}/>
            <div style={{ minWidth:0 }}>
              <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:15, color:'#1A1A1A', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                {p.name}
              </div>
              <div style={{ fontSize:11.5, color:'#5E5B59', display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ color:'#B89657' }}>★</span>
                {p.rating.toFixed(1)} · {p.reviews} reviews
              </div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:22, color:'#1A1A1A', lineHeight:1 }}>
                {fmtPrice(lineTotal)}
              </div>
              {p.was && qty === 1 && (
                <div style={{ fontSize:11, color:'#5E5B59', textDecoration:'line-through' }}>{fmtPrice(p.was)}</div>
              )}
            </div>
            <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius:9999 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width:34, height:40, background:'none', border:'none', cursor:'pointer' }}>−</button>
              <span style={{ width:28, textAlign:'center', fontSize:13, fontWeight:500 }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width:34, height:40, background:'none', border:'none', cursor:'pointer' }}>+</button>
            </div>
            <button className="btn btn-dark" onClick={() => onAdd(p, qty)}>
              <span className="material-symbols-outlined">shopping_bag</span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== CART PAGE ============================================================
function CartPage({ cart, onChangeQty, onRemove, onCheckout, onBack }) {
  const items = cart
    .map(ci => ({ ...ci, product: PRODUCTS.find(p => p.id === ci.id) }))
    .filter(ci => ci.product);
  const subtotal = items.reduce((s, ci) => s + ci.product.price * ci.qty, 0);
  const FREE_OVER = 5000;
  const delivery = subtotal >= FREE_OVER ? 0 : 250;
  const toFree = Math.max(0, FREE_OVER - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_OVER) * 100));
  const total = subtotal + delivery;

  return (
    <div data-screen-label="Cart">
      <section style={{ background:'#F2E8D6', padding:'48px 0' }}>
        <div className="container">
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.6rem', letterSpacing:'-0.015em' }}>
            Your Cart
          </h1>
          <p style={{ marginTop:8 }}>
            {items.length === 0
              ? 'Nothing in here yet.'
              : items.length + ' item' + (items.length > 1 ? 's' : '') + ' · ' + fmtPrice(subtotal) + ' subtotal'}
          </p>
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'48px 0 96px' }}>
        <div className="container">
          {items.length === 0 ? (
            <div style={{ textAlign:'center', padding:'80px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize:48, color:'#C5A880' }}>shopping_bag</span>
              <h3 style={{ marginTop:12, fontSize:'1.4rem' }}>Your cart is empty.</h3>
              <p style={{ marginBottom:24 }}>Browse the collection and pick a few things you like.</p>
              <button className="btn btn-dark" onClick={onBack}>Go to Shop</button>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:36, alignItems:'flex-start' }}>
              <div>
                <div className="cart-progress">
                  <div className="cart-progress__head">
                    {toFree === 0 ? (
                      <>
                        <span className="material-symbols-outlined" style={{ color:'#25D366' }}>check_circle</span>
                        <b>Free delivery unlocked</b> · ships complimentary
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined" style={{ color:'#B89657' }}>local_shipping</span>
                        Add <b>{fmtPrice(toFree)}</b> more to get free delivery
                      </>
                    )}
                  </div>
                  <div className="cart-progress__bar">
                    <span style={{ width: progress + '%' }}/>
                  </div>
                </div>

                <div style={{ background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:14, overflow:'hidden' }}>
                  {items.map((ci, idx) => (
                    <div key={ci.id} style={{ display:'grid', gridTemplateColumns:'104px 1fr auto', gap:20, padding:20, alignItems:'center', borderBottom: idx < items.length - 1 ? '1px solid rgba(197,168,128,0.20)' : 'none' }}>
                      <div style={{ width:104, height:104, background:'#F3EBDC', borderRadius:10, overflow:'hidden', padding:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <img src={ci.product.image} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                      </div>
                      <div>
                        <div style={{ fontSize:9.5, fontWeight:600, color:'#B89657', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:4 }}>
                          {ci.product.category}
                        </div>
                        <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:17, color:'#1A1A1A', marginBottom:8 }}>
                          {ci.product.name}
                        </div>
                        <div style={{ fontSize:11.5, color:'#5E5B59', marginBottom:10, display:'flex', alignItems:'center', gap:6 }}>
                          <span className="material-symbols-outlined" style={{ fontSize:14, color:'#25D366' }}>check_circle</span>
                          In stock · ships within 24 hours
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                          <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius:9999 }}>
                            <button onClick={() => onChangeQty(ci.id, Math.max(1, ci.qty - 1))} style={{ width:32, height:34, background:'none', border:'none', cursor:'pointer' }}>−</button>
                            <span style={{ width:28, textAlign:'center', fontSize:12.5, fontWeight:500 }}>{ci.qty}</span>
                            <button onClick={() => onChangeQty(ci.id, ci.qty + 1)} style={{ width:32, height:34, background:'none', border:'none', cursor:'pointer' }}>+</button>
                          </div>
                          <button onClick={() => onRemove(ci.id)} style={{ background:'none', border:'none', color:'#5E5B59', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', fontWeight:600, cursor:'pointer' }}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:20 }}>
                          {fmtPrice(ci.product.price * ci.qty)}
                        </div>
                        {ci.product.was && (
                          <div style={{ fontSize:12, color:'#5E5B59', textDecoration:'line-through' }}>
                            {fmtPrice(ci.product.was * ci.qty)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-badges">
                  <div><span className="material-symbols-outlined">lock</span>Secure checkout</div>
                  <div><span className="material-symbols-outlined">replay</span>7-day returns</div>
                  <div><span className="material-symbols-outlined">verified_user</span>Hand-checked</div>
                  <div><span className="material-symbols-outlined">payments</span>UPI · Cards · COD</div>
                </div>
              </div>

              <div style={{ background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:14, padding:26, position:'sticky', top:96 }}>
                <h3 style={{ fontSize:20, marginBottom:18 }}>Order Summary</h3>
                <Sumline label="Subtotal" value={fmtPrice(subtotal)}/>
                <Sumline
                  label="Delivery"
                  value={delivery === 0 ? 'FREE' : fmtPrice(delivery)}
                  note={delivery === 0 ? 'Ships complimentary' : 'Free over ₹5,000'}
                />
                <div style={{ background:'#F3EBDC', borderRadius:10, padding:12, marginTop:12, fontSize:12, color:'#5E5B59', display:'flex', alignItems:'flex-start', gap:10 }}>
                  <span className="material-symbols-outlined" style={{ color:'#B89657', fontSize:18 }}>schedule</span>
                  <span><b style={{ color:'#1A1A1A' }}>3–7 days</b> across India. Same-day or next-day in Virudhachalam.</span>
                </div>
                <div style={{ borderTop:'1px solid rgba(197,168,128,0.30)', marginTop:14, paddingTop:14 }}>
                  <Sumline label="Total" value={fmtPrice(total)} bold/>
                </div>
                <button className="btn btn-dark" style={{ width:'100%', marginTop:20 }} onClick={onCheckout}>
                  <span className="material-symbols-outlined">lock</span>
                  Proceed to Checkout
                </button>
                <div style={{ fontSize:11, color:'#5E5B59', textAlign:'center', marginTop:12 }}>
                  By placing the order you agree to our{' '}
                  <a href="#" style={{ color:'#1A1A1A', textDecoration:'underline' }}>Terms</a>
                  {' '}and{' '}
                  <a href="#" style={{ color:'#1A1A1A', textDecoration:'underline' }}>Return Policy</a>.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ===== CHECKOUT PAGE ========================================================
function CheckoutPage({ cart, onPlaceOrder, onBack }) {
  const items = cart
    .map(ci => ({ ...ci, product: PRODUCTS.find(p => p.id === ci.id) }))
    .filter(ci => ci.product);
  const subtotal = items.reduce((s, ci) => s + ci.product.price * ci.qty, 0);
  const FREE_OVER = 5000;
  const delivery = subtotal >= FREE_OVER ? 0 : 250;
  const total = subtotal + delivery;

  const [form, setForm] = React.useState({
    name: '', phone: '', address: '', city: '', state: 'Tamil Nadu', pincode: '',
  });
  const [payment, setPayment] = React.useState('upi');
  const [errors, setErrors] = React.useState({});

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Required';
    if (!form.phone.trim())   e.phone   = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim())    e.city    = 'Required';
    if (!form.pincode.trim()) e.pincode = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) onPlaceOrder(form, payment);
  };

  const inputStyle = (k) => ({
    padding: '12px 18px',
    fontFamily: 'Jost,sans-serif', fontSize: 14, color: '#1A1A1A',
    background: errors[k] ? 'rgba(192,57,43,0.04)' : '#FAFAF8',
    border: '1px solid ' + (errors[k] ? '#C0392B' : 'rgba(197,168,128,0.35)'),
    borderRadius: 10, outline: 'none', width: '100%',
    transition: 'border-color 200ms',
  });

  return (
    <div data-screen-label="Checkout">
      <section style={{ background:'#F2E8D6', padding:'48px 0 32px' }}>
        <div className="container">
          <button
            onClick={onBack}
            style={{ background:'none', border:'none', cursor:'pointer', color:'#5E5B59', fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', display:'inline-flex', alignItems:'center', gap:6, marginBottom:20 }}>
            <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_back</span>
            Back to Cart
          </button>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.6rem', letterSpacing:'-0.015em' }}>
            Almost there.
          </h1>
          <p style={{ marginTop:8 }}>Fill in your address and pick how you'd like to pay.</p>
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'48px 0 96px' }}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="checkout-wrap">
              {/* Left — form */}
              <div>
                {/* Delivery section */}
                <div className="checkout-form-section" style={{ marginBottom: 20 }}>
                  <h3>Delivery details</h3>
                  <div className="form-field">
                    <label>Full name</label>
                    <input
                      className="form-input"
                      style={inputStyle('name')}
                      placeholder="Meena Krishnamurthy"
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                    />
                    {errors.name && <span style={{ fontSize:11, color:'#C0392B' }}>{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label>Phone (WhatsApp)</label>
                    <input
                      className="form-input"
                      style={inputStyle('phone')}
                      placeholder="+91 98765 43210"
                      type="tel"
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                    />
                    {errors.phone && <span style={{ fontSize:11, color:'#C0392B' }}>{errors.phone}</span>}
                  </div>
                  <div className="form-field">
                    <label>Address line 1</label>
                    <input
                      className="form-input"
                      style={inputStyle('address')}
                      placeholder="25, Gandhi Street, Virudhachalam"
                      value={form.address}
                      onChange={e => update('address', e.target.value)}
                    />
                    {errors.address && <span style={{ fontSize:11, color:'#C0392B' }}>{errors.address}</span>}
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>City</label>
                      <input
                        className="form-input"
                        style={inputStyle('city')}
                        placeholder="Virudhachalam"
                        value={form.city}
                        onChange={e => update('city', e.target.value)}
                      />
                      {errors.city && <span style={{ fontSize:11, color:'#C0392B' }}>{errors.city}</span>}
                    </div>
                    <div className="form-field">
                      <label>State</label>
                      <input
                        className="form-input"
                        style={inputStyle('state')}
                        placeholder="Tamil Nadu"
                        value={form.state}
                        onChange={e => update('state', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-field" style={{ maxWidth: 200 }}>
                    <label>Pincode</label>
                    <input
                      className="form-input"
                      style={inputStyle('pincode')}
                      placeholder="606001"
                      maxLength={6}
                      value={form.pincode}
                      onChange={e => update('pincode', e.target.value)}
                    />
                    {errors.pincode && <span style={{ fontSize:11, color:'#C0392B' }}>{errors.pincode}</span>}
                  </div>
                </div>

                {/* Payment section */}
                <div className="checkout-form-section">
                  <h3>How do you want to pay?</h3>
                  {[
                    { id:'upi',  icon:'payment',          label:'UPI',        sub:'Google Pay, PhonePe, Paytm, or any UPI app' },
                    { id:'card', icon:'credit_card',      label:'Card',        sub:'Debit or credit card — Visa, Mastercard, Amex' },
                    { id:'cod',  icon:'local_shipping',   label:'Cash on Delivery', sub:'Pay when it arrives at your door' },
                  ].map(opt => (
                    <div
                      key={opt.id}
                      className={'payment-option' + (payment === opt.id ? ' selected' : '')}
                      onClick={() => setPayment(opt.id)}>
                      <input
                        type="radio"
                        name="payment"
                        value={opt.id}
                        checked={payment === opt.id}
                        onChange={() => setPayment(opt.id)}
                      />
                      <span className="material-symbols-outlined" style={{ color: payment === opt.id ? '#1A1A1A' : '#C5A880', fontSize:22 }}>{opt.icon}</span>
                      <div>
                        <div className="payment-option-label">{opt.label}</div>
                        <div className="payment-option-sub">{opt.sub}</div>
                      </div>
                    </div>
                  ))}

                  {payment === 'upi' && (
                    <div style={{ marginTop:18, padding:'20px', background:'#FAF8F4', border:'1px solid rgba(197,168,128,0.25)', borderRadius:12, textAlign:'center' }}>
                      <div style={{ width:140, height:140, background:'#E4DDD4', borderRadius:8, margin:'0 auto 12px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize:56, color:'#C5A880' }}>qr_code_2</span>
                      </div>
                      <div style={{ fontSize:12.5, color:'#5E5B59' }}>Scan with any UPI app</div>
                      <div style={{ fontSize:11, color:'#8E7449', marginTop:4, fontWeight:600 }}>kgs@upi</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right — order summary */}
              <div className="checkout-summary">
                <h3>Your order</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:18 }}>
                  {items.map(ci => (
                    <div key={ci.id} style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <div style={{ width:52, height:52, background:'#F3EBDC', borderRadius:8, overflow:'hidden', flexShrink:0, padding:6, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <img src={ci.product.image} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:14, color:'#1A1A1A', lineHeight:1.25, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                          {ci.product.name}
                        </div>
                        <div style={{ fontSize:11.5, color:'#5E5B59', marginTop:2 }}>Qty: {ci.qty}</div>
                      </div>
                      <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:15, color:'#1A1A1A', flexShrink:0 }}>
                        {fmtPrice(ci.product.price * ci.qty)}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop:'1px solid rgba(197,168,128,0.25)', paddingTop:14 }}>
                  <Sumline label="Subtotal" value={fmtPrice(subtotal)}/>
                  <Sumline
                    label="Delivery"
                    value={delivery === 0 ? 'FREE' : fmtPrice(delivery)}
                    note={delivery === 0 ? 'Ships free' : 'Free over ₹5,000'}
                  />
                  <div style={{ borderTop:'1px solid rgba(197,168,128,0.25)', marginTop:10, paddingTop:10 }}>
                    <Sumline label="Total" value={fmtPrice(total)} bold/>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark" style={{ width:'100%', marginTop:20, padding:'16px 26px' }}>
                  <span className="material-symbols-outlined">lock</span>
                  Place Order
                </button>

                <div className="checkout-trust">
                  <span className="material-symbols-outlined">lock</span>
                  Secure payment
                  <span style={{ color:'rgba(26,26,26,0.20)' }}>·</span>
                  <span className="material-symbols-outlined">local_shipping</span>
                  Free delivery
                  <span style={{ color:'rgba(26,26,26,0.20)' }}>·</span>
                  <span className="material-symbols-outlined">verified</span>
                  Hand-checked
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

// ===== ORDER CONFIRMATION ===================================================
function OrderConfirmationPage({ cart, onKeepShopping }) {
  const orderNum = React.useMemo(() => 'KGS-' + Math.floor(10000 + Math.random() * 90000), []);
  const items = cart
    .map(ci => ({ ...ci, product: PRODUCTS.find(p => p.id === ci.id) }))
    .filter(ci => ci.product);
  const total = items.reduce((s, ci) => s + ci.product.price * ci.qty, 0);

  return (
    <div data-screen-label="Order Confirmation">
      <section style={{ background:'#FAF8F4', padding:'64px 0 80px' }}>
        <div className="container">
          <div className="order-confirm-wrap">
            <span className="material-symbols-outlined order-confirm-icon"
              style={{ fontVariationSettings:'"FILL" 1, "wght" 300' }}>
              check_circle
            </span>
            <h1>Your order is placed.</h1>
            <div className="order-num">Order #{orderNum}</div>
            <p style={{ fontSize:15, color:'#5E5B59', lineHeight:1.85, maxWidth:500, margin:'0 auto 28px' }}>
              We'll WhatsApp you the tracking link. It usually ships within 24 hours — if there's any delay, we'll let you know first.
            </p>

            {items.length > 0 && (
              <div style={{ background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:16, padding:24, maxWidth:500, margin:'0 auto 32px', textAlign:'left' }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'#8E7449', marginBottom:16 }}>
                  What you ordered
                </div>
                {items.map(ci => (
                  <div key={ci.id} style={{ display:'flex', alignItems:'center', gap:12, paddingBottom:12, borderBottom:'1px solid rgba(197,168,128,0.15)', marginBottom:12 }}>
                    <div style={{ width:46, height:46, background:'#F3EBDC', borderRadius:8, overflow:'hidden', flexShrink:0, padding:5, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <img src={ci.product.image} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:14, color:'#1A1A1A' }}>
                        {ci.product.name}
                      </div>
                      <div style={{ fontSize:11.5, color:'#5E5B59' }}>Qty: {ci.qty}</div>
                    </div>
                    <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:14, color:'#1A1A1A' }}>
                      {fmtPrice(ci.product.price * ci.qty)}
                    </div>
                  </div>
                ))}
                <div style={{ display:'flex', justifyContent:'space-between', paddingTop:4 }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>Total paid</span>
                  <span style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'1.2rem' }}>{fmtPrice(total)}</span>
                </div>
              </div>
            )}

            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <button className="btn btn-dark" onClick={onKeepShopping}>
                <span className="material-symbols-outlined">storefront</span>
                Keep Shopping
              </button>
              <a
                className="btn btn-gold"
                style={{ background:'#25D366', borderColor:'#25D366', color:'#fff', textDecoration:'none' }}
                href={'https://wa.me/919789182921?text=Hi, my order number is ' + orderNum + '. Can I get a tracking update?'}>
                <span className="material-symbols-outlined">chat</span>
                WhatsApp to Track
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== WISHLIST PAGE ========================================================
function WishlistPage({ wishlist, onAdd, onView, onWishToggle, onShop }) {
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div data-screen-label="Wishlist">
      <section style={{ background:'#F2E8D6', padding:'56px 0 36px' }}>
        <div className="container">
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>
            Saved Items
          </div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.8rem', lineHeight:1.05, letterSpacing:'-0.018em' }}>
            Things you saved.
          </h1>
          {items.length > 0 && (
            <p style={{ marginTop:8 }}>{items.length} item{items.length !== 1 ? 's' : ''} saved</p>
          )}
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'48px 0 96px' }}>
        <div className="container">
          {items.length === 0 ? (
            <div className="wishlist-empty">
              <span className="material-symbols-outlined">favorite</span>
              <h3>Nothing saved yet.</h3>
              <p>Browse the collection and tap the heart on anything you like. It'll show up here.</p>
              <button className="btn btn-dark" onClick={onShop}>Browse the Collection</button>
            </div>
          ) : (
            <div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:20 }}>
                {items.map(p => (
                  <div key={p.id} style={{ display:'flex', flexDirection:'column' }}>
                    <ProductCard
                      p={p}
                      onAdd={onAdd}
                      onView={onView}
                      wishlisted={true}
                      onWishToggle={onWishToggle}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ===== ABOUT PAGE ===========================================================
function AboutPage({ onShop }) {
  return (
    <div data-screen-label="About">
      <section style={{ background:'#F2E8D6', padding:'80px 0', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:720, margin:'0 auto' }}>
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:16 }}>
            Virudhachalam · Junction Road
          </div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'3rem', lineHeight:1.08, letterSpacing:'-0.018em', marginBottom:20 }}>
            Curating the finest pieces,<br/>
            <em style={{ fontStyle:'italic', color:'#B89657', fontWeight:400 }}>right here at home.</em>
          </h1>
          <p style={{ fontSize:15, lineHeight:1.85, color:'#5E5B59' }}>
            KGS Home Décors started on Junction Road, Virudhachalam. We had a simple vision: to bring premium, high-end furniture and décor directly to our community, offering uncompromising quality and timeless design.
          </p>
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'72px 0' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
          <div style={{ aspectRatio:'4/5', overflow:'hidden', borderRadius:4 }}>
            <img src="assets/lifestyle/showroom_interior.webp" alt="KGS showroom interior" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          </div>
          <div>
            <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>
              Our Story
            </div>
            <h2 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.3rem', lineHeight:1.1, marginBottom:22 }}>
              Built on Junction Road.<br/>
              <em style={{ fontStyle:'italic', color:'#B89657', fontWeight:400 }}>Here every day.</em>
            </h2>
            <p style={{ marginBottom:16, fontSize:14.5, lineHeight:1.85, color:'#5E5B59' }}>
              When we started, we had a small space and a few hundred pieces. We'd travel to pick things ourselves — Rajasthan for brass, Pune for ceramics, local artisans for handmade pieces. If we wouldn't put it in our own home, we didn't stock it.
            </p>
            <p style={{ marginBottom:16, fontSize:14.5, lineHeight:1.85, color:'#5E5B59' }}>
              We have 500+ pieces on the floor at any time, a team that genuinely loves what we sell, and customers who keep coming back. We ship pan-India now, but we still answer the WhatsApp ourselves.
            </p>
            <p style={{ marginBottom:28, fontSize:14.5, lineHeight:1.85, color:'#5E5B59' }}>
              If you're ever in Virudhachalam, come in. We're open every day from 10 to 10. No appointment needed.
            </p>
            <button className="btn btn-dark" onClick={onShop}>
              Browse the Collection
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <section style={{ background:'#F2E8D6', padding:'72px 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:28 }}>
            {[
              { num:'500+', label:'Pieces in stock', sub:'Every single one checked before it goes on the floor.' },
              { num:'5.0★', label:'On Google', sub:'240 families have left a review. We reply to every one.' },
              { num:'100%', label:'Hand-Checked Quality', sub:'Every piece inspected at our showroom before it reaches you.' },
              { num:'Free', label:'Delivery in Virudhachalam', sub:'Every order, no minimum.' },
            ].map(card => (
              <div key={card.num} style={{ background:'rgba(255,255,255,0.75)', borderRadius:18, padding:'32px 28px', border:'1px solid rgba(197,168,128,0.30)' }}>
                <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.4rem', color:'#1A1A1A', marginBottom:6 }}>
                  {card.num}
                </div>
                <div style={{ fontWeight:600, fontSize:13, color:'#1A1A1A', marginBottom:6 }}>{card.label}</div>
                <div style={{ fontSize:12.5, color:'#5E5B59', lineHeight:1.65 }}>{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== CONTACT PAGE =========================================================
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', message: '' });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSend = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.message) setSent(true);
  };

  return (
    <div data-screen-label="Contact">
      <section style={{ background:'#F2E8D6', padding:'72px 0', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:680, margin:'0 auto' }}>
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>
            Say Hello
          </div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.8rem', letterSpacing:'-0.015em', marginBottom:16 }}>
            Talk to us like a neighbour.
          </h1>
          <p style={{ fontSize:15, color:'#5E5B59', lineHeight:1.8 }}>
            No bots. No ticket numbers. We're in the shop every day — WhatsApp us, call us, or drop in.
          </p>
        </div>
      </section>

      <section style={{ background:'#FAF8F4', padding:'56px 0 96px' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:56 }}>
          <div>
            <h3 style={{ fontFamily:'"Crimson Pro",serif', fontSize:24, marginBottom:20 }}>
              Send us a message
            </h3>
            {sent ? (
              <div style={{ padding:'28px 24px', background:'rgba(37,211,102,0.08)', border:'1px solid rgba(37,211,102,0.25)', borderRadius:16, textAlign:'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize:44, color:'#25D366', fontVariationSettings:'"FILL" 1', display:'block', marginBottom:10 }}>check_circle</span>
                <h4 style={{ fontFamily:'"Crimson Pro",serif', fontSize:20, marginBottom:8 }}>Got it. We'll reply shortly.</h4>
                <p style={{ fontSize:13.5, color:'#5E5B59' }}>Usually within the hour during shop hours (10 AM – 10 PM).</p>
              </div>
            ) : (
              <form onSubmit={handleSend} style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <label style={{ display:'flex', flexDirection:'column', gap:7 }}>
                  <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'#5E5B59' }}>Your name</span>
                  <input
                    placeholder="Meena R."
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    required
                    style={{ padding:'12px 18px', border:'1px solid rgba(197,168,128,0.35)', borderRadius:10, fontFamily:'Jost,sans-serif', fontSize:14, background:'#fff', outline:'none' }}
                  />
                </label>
                <label style={{ display:'flex', flexDirection:'column', gap:7 }}>
                  <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'#5E5B59' }}>Phone or WhatsApp</span>
                  <input
                    placeholder="+91 98765 43210"
                    type="tel"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    required
                    style={{ padding:'12px 18px', border:'1px solid rgba(197,168,128,0.35)', borderRadius:10, fontFamily:'Jost,sans-serif', fontSize:14, background:'#fff', outline:'none' }}
                  />
                </label>
                <label style={{ display:'flex', flexDirection:'column', gap:7 }}>
                  <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'#5E5B59' }}>What do you need?</span>
                  <textarea
                    rows="5"
                    placeholder="I'm looking for a 3-seater sofa that fits a 10-foot wall..."
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    required
                    style={{ padding:'12px 18px', border:'1px solid rgba(197,168,128,0.35)', borderRadius:10, fontFamily:'Jost,sans-serif', fontSize:14, background:'#fff', outline:'none', resize:'vertical' }}
                  />
                </label>
                <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                  <button type="submit" className="btn btn-dark">Send Message</button>
                  <a
                    className="btn btn-gold"
                    style={{ background:'#25D366', borderColor:'#25D366', color:'#fff', textDecoration:'none' }}
                    href="https://wa.me/919789182921">
                    <span className="material-symbols-outlined">chat</span>
                    WhatsApp Instead
                  </a>
                </div>
              </form>
            )}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {[
              { icon:'location_on', title:'Find Us',  body:'185/G Junction Road, Virudhachalam, Tamil Nadu 606001' },
              { icon:'schedule',    title:'Hours',    body:'Every day · 10:00 AM – 10:00 PM. Free parking out front.' },
              { icon:'call',        title:'Call',     body:'+91 97891 82921' },
              { icon:'chat',        title:'WhatsApp', body:'Send a message and we\'ll reply — usually within the hour.' },
            ].map(card => (
              <div key={card.title} style={{ display:'flex', gap:16, padding:'18px 20px', background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:14 }}>
                <span className="material-symbols-outlined" style={{ color:'#C5A880', fontSize:22, flexShrink:0, marginTop:2 }}>
                  {card.icon}
                </span>
                <div>
                  <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'#1A1A1A', marginBottom:5 }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize:13.5, color:'#5E5B59', lineHeight:1.65 }}>{card.body}</div>
                </div>
              </div>
            ))}
            <div style={{ height:220, background:'url(assets/lifestyle/showroom_interior.webp) center/cover', borderRadius:14 }}/>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, {
  ShopPage, ProductDetail, CartPage, CheckoutPage,
  OrderConfirmationPage, WishlistPage, AboutPage, ContactPage, Sumline
});
