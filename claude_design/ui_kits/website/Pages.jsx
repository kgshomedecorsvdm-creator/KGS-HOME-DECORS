/* Inner pages: Shop · Product · Cart · About · Contact */

function ShopPage({ filter, setFilter, onAdd, onView, wishlist, onWishToggle }) {
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase().replace(/[^a-z]/g,'').includes(filter.toLowerCase().replace(/[^a-z]/g,'')));
  const cats = ['all', ...new Set(PRODUCTS.map(p => p.category))];
  return (
    <div data-screen-label="Shop">
      <section style={{ background:'#F2E8D6', padding:'56px 0 36px' }}>
        <div className="container">
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>The Collection</div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'3rem', lineHeight:1.05, letterSpacing:'-0.018em', marginBottom:10 }}>Shop All Pieces</h1>
          <p style={{ maxWidth:560, fontSize:14, color:'#5E5B59' }}>Personally curated pieces. Free delivery in Virudhachalam, secure payments across India.</p>
        </div>
      </section>
      <section style={{ background:'#fff', padding:'18px 0', borderBottom:'1px solid rgba(197,168,128,0.20)' }}>
        <div className="container" style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontSize:10, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#5E5B59', marginRight:10 }}>Filter</span>
          {cats.map(c => (
            <button key={c} onClick={()=>setFilter(c)} style={{
              padding:'8px 16px',
              background: filter === c ? '#1A1A1A' : 'transparent',
              color:    filter === c ? '#fff' : '#1A1A1A',
              border: '1px solid ' + (filter === c ? '#1A1A1A' : 'rgba(26,26,26,0.20)'),
              fontFamily:'Jost,sans-serif', fontSize:10.5, fontWeight:600,
              letterSpacing:'.18em', textTransform:'uppercase',
              cursor:'pointer',
            }}>{c === 'all' ? 'All ' + PRODUCTS.length : c}</button>
          ))}
        </div>
      </section>
      <section style={{ background:'#FAF8F4', padding:'40px 0 96px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {filtered.map(p => (
              <ProductCard key={p.id} p={p} onAdd={onAdd} onView={onView}
                           wishlisted={wishlist.includes(p.id)} onWishToggle={onWishToggle}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

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
          <a href="#" onClick={(e)=>{e.preventDefault(); onBack();}} style={{
            fontSize:11, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase',
            color:'#5E5B59', display:'inline-flex', alignItems:'center', gap:6,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_back</span> Back to Shop
          </a>
          <div style={{ fontSize:11.5, color:'#5E5B59', display:'flex', alignItems:'center', gap:8 }}>
            <span className="material-symbols-outlined" style={{ color:'#B89657', fontSize:14 }}>local_fire_department</span>
            <b style={{ color:'#1A1A1A', fontWeight: 600 }}>{p.sold || 24}</b> people bought this in the last 7 days
          </div>
        </div>
      </section>

      <section style={{ background:'#fff', padding:'56px 0 80px' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:64 }}>
          <div>
            <div style={{ background:'#F3EBDC', border:'1px solid rgba(197,168,128,0.30)', borderRadius:18, padding:48, aspectRatio:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
              {p.off && <span style={{ position:'absolute', top:18, left:18, background:'#C97840', color:'#fff', fontSize:10, fontWeight:700, letterSpacing:'.16em', padding:'6px 12px', borderRadius:9999, textTransform:'uppercase' }}>{p.off}</span>}
              <img src={p.image} alt={p.name} style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:14 }}>
              {[p.image, p.image, p.image, p.image].map((src, i) => (
                <div key={i} style={{ aspectRatio:1, background:'#F3EBDC', borderRadius:10, overflow:'hidden', border: i === 0 ? '2px solid #1A1A1A' : '1px solid rgba(197,168,128,0.30)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', padding: 10 }}>
                  <img src={src} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#B89657', marginBottom:12 }}>{p.category}</div>
            <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.4rem', lineHeight:1.05, letterSpacing:'-0.018em', marginBottom:16 }}>{p.name}</h1>

            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:24, flexWrap:'wrap' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 12px', background:'rgba(184,150,87,0.10)', borderRadius:9999 }}>
                <span style={{ color:'#B89657', letterSpacing:'.14em', fontSize:13 }}>★★★★★</span>
                <span style={{ fontSize:12.5, fontWeight: 600, color:'#1A1A1A' }}>{p.rating.toFixed(1)}</span>
                <span style={{ fontSize:12, color:'#5E5B59' }}>({p.reviews} reviews)</span>
              </div>
              {p.badge && (
                <span style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.18em', textTransform:'uppercase', color:'#1A1A1A', padding:'6px 14px', border:'1px solid rgba(26,26,26,0.16)', borderRadius:9999 }}>{p.badge}</span>
              )}
            </div>

            <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:8 }}>
              <span style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.6rem', letterSpacing:'-0.01em' }}>{fmtPrice(p.price)}</span>
              {p.was && <span style={{ fontSize:15, color:'#5E5B59', textDecoration:'line-through' }}>{fmtPrice(p.was)}</span>}
              {p.was && <span style={{ fontSize:11.5, color:'#C97840', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase' }}>Save {fmtPrice(p.was - p.price)}</span>}
            </div>
            <div style={{ fontSize:12, color:'#5E5B59', marginBottom:22 }}>Inclusive of all taxes · Free delivery over ₹5,000</div>

            {p.stock && p.stock <= 6 && (
              <div className="pdp-stock">
                <div className="pdp-stock__bar"><span style={{ width: Math.max(8, (p.stock / 20) * 100) + '%' }}/></div>
                <div className="pdp-stock__text">
                  <span className="material-symbols-outlined">local_fire_department</span>
                  <b>Only {p.stock} left</b> &middot; reorder takes ~3 weeks
                </div>
              </div>
            )}

            <p style={{ marginBottom:28, fontSize:14.5, lineHeight:1.8 }}>
              Handcrafted with premium materials and finished to export quality. Personally selected for the KGS showroom — every piece passes a hand-check before it ships.
            </p>

            <div className="pdp-trust">
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">local_shipping</span>
                <div>
                  <b>Free delivery</b>
                  <span>{toFree === 0 ? 'Qualifies for free shipping' : 'Add ' + fmtPrice(toFree) + ' more'}</span>
                </div>
              </div>
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">replay</span>
                <div>
                  <b>7-day returns</b>
                  <span>No questions asked</span>
                </div>
              </div>
              <div className="pdp-trust__item">
                <span className="material-symbols-outlined">verified_user</span>
                <div>
                  <b>Hand-checked</b>
                  <span>QC at the showroom</span>
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

            <div style={{ display:'flex', gap:12, marginBottom:14, marginTop: 26 }}>
              <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                <button onClick={()=>setQty(Math.max(1, qty-1))} style={{ width:44, height:50, background:'none', border:'none', fontSize:17, cursor:'pointer' }}>−</button>
                <span style={{ width:36, textAlign:'center', fontWeight:500 }}>{qty}</span>
                <button onClick={()=>setQty(qty+1)} style={{ width:44, height:50, background:'none', border:'none', fontSize:17, cursor:'pointer' }}>+</button>
              </div>
              <button className="btn btn-dark" style={{ flex:1 }} onClick={()=>onAdd(p, qty)}>
                <span className="material-symbols-outlined">shopping_bag</span> Add to Cart · {fmtPrice(lineTotal)}
              </button>
            </div>
            <button className="btn btn-gold" style={{ width:'100%', background:'#25D366', borderColor:'#25D366' }}>
              <span className="material-symbols-outlined">chat</span> Ask on WhatsApp · Replies in ~10 min
            </button>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section style={{ background:'#FAF8F4', padding:'64px 0 80px', borderTop:'1px solid rgba(197,168,128,0.20)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="label-tag">You May Also Love</div>
              <h2>Pairs beautifully with</h2>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
            {moreFromUs.map(rp => (
              <ProductCard key={rp.id} p={rp} onAdd={(prod) => onAdd(prod, 1)} onView={() => { /* stay simple */ }} wishlisted={false} onWishToggle={() => {}}/>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky purchase bar */}
      <div className="pdp-sticky">
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 20 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 14, minWidth: 0 }}>
            <img src={p.image} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', background: '#F3EBDC' }}/>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight: 500, fontSize: 15, color:'#1A1A1A', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{p.name}</div>
              <div style={{ fontSize: 11.5, color: '#5E5B59', display:'flex', alignItems:'center', gap: 6 }}>
                <span style={{ color:'#B89657' }}>★</span> {p.rating.toFixed(1)} · {p.reviews} reviews
              </div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <div style={{ textAlign:'right' }}>
              <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight: 500, fontSize: 22, color:'#1A1A1A', lineHeight: 1 }}>{fmtPrice(lineTotal)}</div>
              {p.was && qty === 1 && <div style={{ fontSize: 11, color:'#5E5B59', textDecoration:'line-through' }}>{fmtPrice(p.was)}</div>}
            </div>
            <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
              <button onClick={()=>setQty(Math.max(1, qty-1))} style={{ width:34, height:40, background:'none', border:'none', cursor:'pointer' }}>−</button>
              <span style={{ width:28, textAlign:'center', fontSize: 13, fontWeight: 500 }}>{qty}</span>
              <button onClick={()=>setQty(qty+1)} style={{ width:34, height:40, background:'none', border:'none', cursor:'pointer' }}>+</button>
            </div>
            <button className="btn btn-dark" onClick={()=>onAdd(p, qty)}>
              <span className="material-symbols-outlined">shopping_bag</span> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartPage({ cart, onChangeQty, onRemove, onCheckout, onBack }) {
  const items = cart.map(ci => ({ ...ci, product: PRODUCTS.find(p => p.id === ci.id) })).filter(ci => ci.product);
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
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.6rem', letterSpacing:'-0.015em' }}>Your Cart</h1>
          <p style={{ marginTop: 8 }}>{items.length === 0 ? 'No items yet.' : items.length + ' item' + (items.length > 1 ? 's' : '') + ' · ' + fmtPrice(subtotal) + ' subtotal'}</p>
        </div>
      </section>
      <section style={{ background:'#FAF8F4', padding:'48px 0 96px' }}>
        <div className="container">
          {items.length === 0 ? (
            <div style={{ textAlign:'center', padding:'80px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize:48, color:'#C5A880' }}>shopping_bag</span>
              <h3 style={{ marginTop:12, fontSize:'1.4rem' }}>Your cart is empty</h3>
              <p style={{ marginBottom:24 }}>Browse the collection and add a few favourites.</p>
              <button className="btn btn-dark" onClick={onBack}>Continue Shopping</button>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:36, alignItems:'flex-start' }}>
              <div>
                {/* Free shipping progress */}
                <div className="cart-progress">
                  <div className="cart-progress__head">
                    {toFree === 0
                      ? (<><span className="material-symbols-outlined" style={{ color: '#25D366' }}>check_circle</span> <b>You unlocked free delivery</b> · we ship complimentary</>)
                      : (<><span className="material-symbols-outlined" style={{ color: '#B89657' }}>local_shipping</span> Add <b>{fmtPrice(toFree)}</b> more for free delivery</>)
                    }
                  </div>
                  <div className="cart-progress__bar"><span style={{ width: progress + '%' }}/></div>
                </div>

                <div style={{ background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:14, overflow: 'hidden' }}>
                  {items.map((ci, i) => (
                    <div key={ci.id} style={{ display:'grid', gridTemplateColumns:'104px 1fr auto', gap:20, padding:20, alignItems:'center', borderBottom: i < items.length-1 ? '1px solid rgba(197,168,128,0.20)' : 'none' }}>
                      <div style={{ width:104, height:104, background:'#F3EBDC', borderRadius:10, overflow:'hidden', padding: 8, boxSizing:'border-box', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <img src={ci.product.image} alt="" style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }}/>
                      </div>
                      <div>
                        <div style={{ fontSize:9.5, fontWeight:600, color:'#B89657', letterSpacing:'.18em', textTransform:'uppercase', marginBottom:4 }}>{ci.product.category}</div>
                        <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:17, color:'#1A1A1A', marginBottom:8 }}>{ci.product.name}</div>
                        <div style={{ fontSize: 11.5, color:'#5E5B59', marginBottom: 10, display:'flex', alignItems:'center', gap: 6 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14, color:'#25D366' }}>check_circle</span>
                          In stock · ships in 24 hours
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                          <div style={{ display:'flex', alignItems:'center', border:'1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                            <button onClick={()=>onChangeQty(ci.id, Math.max(1, ci.qty-1))} style={{ width:32, height:34, background:'none', border:'none', cursor:'pointer' }}>−</button>
                            <span style={{ width:28, textAlign:'center', fontSize:12.5, fontWeight: 500 }}>{ci.qty}</span>
                            <button onClick={()=>onChangeQty(ci.id, ci.qty+1)} style={{ width:32, height:34, background:'none', border:'none', cursor:'pointer' }}>+</button>
                          </div>
                          <button onClick={()=>onRemove(ci.id)} style={{ background:'none', border:'none', color:'#5E5B59', fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', fontWeight:600, cursor:'pointer' }}>Remove</button>
                        </div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:20 }}>{fmtPrice(ci.product.price * ci.qty)}</div>
                        {ci.product.was && <div style={{ fontSize: 12, color:'#5E5B59', textDecoration:'line-through' }}>{fmtPrice(ci.product.was * ci.qty)}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart trust badges */}
                <div className="cart-badges">
                  <div><span className="material-symbols-outlined">lock</span>Secure checkout</div>
                  <div><span className="material-symbols-outlined">replay</span>7-day returns</div>
                  <div><span className="material-symbols-outlined">verified_user</span>Hand-checked QC</div>
                  <div><span className="material-symbols-outlined">payments</span>UPI · Cards · COD</div>
                </div>
              </div>

              <div style={{ background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:14, padding:26, position:'sticky', top:96 }}>
                <h3 style={{ fontSize:20, marginBottom:18 }}>Order Summary</h3>
                <Sumline label="Subtotal" value={fmtPrice(subtotal)} />
                <Sumline label="Delivery" value={delivery === 0 ? 'FREE' : fmtPrice(delivery)} note={delivery === 0 ? 'Complimentary' : 'Free over ₹5,000'} />
                <div style={{ background:'#F3EBDC', borderRadius: 10, padding: 12, marginTop: 12, fontSize: 12, color:'#5E5B59', display:'flex', alignItems:'flex-start', gap: 10 }}>
                  <span className="material-symbols-outlined" style={{ color:'#B89657', fontSize: 18 }}>schedule</span>
                  <span><b style={{ color:'#1A1A1A' }}>Delivery in 3–7 days</b> across India. Same-day in Virudhachalam.</span>
                </div>
                <div style={{ borderTop:'1px solid rgba(197,168,128,0.30)', marginTop:14, paddingTop:14 }}>
                  <Sumline label="Total" value={fmtPrice(total)} bold />
                </div>
                <button className="btn btn-dark" style={{ width:'100%', marginTop:20 }} onClick={onCheckout}>
                  <span className="material-symbols-outlined">lock</span>
                  Proceed to Checkout
                </button>
                <div style={{ fontSize: 11, color:'#5E5B59', textAlign:'center', marginTop: 12 }}>
                  By placing the order you agree to our <a href="#" style={{ color:'#1A1A1A', textDecoration:'underline' }}>Terms</a> and <a href="#" style={{ color:'#1A1A1A', textDecoration:'underline' }}>Returns Policy</a>.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Sumline({ label, value, note, bold }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'6px 0' }}>
      <div>
        <div style={{ fontSize: bold ? 14 : 13, fontWeight: bold ? 600 : 400, color: bold ? '#1A1A1A' : '#5E5B59' }}>{label}</div>
        {note && <div style={{ fontSize:10, color:'#5E5B59' }}>{note}</div>}
      </div>
      <div style={{ fontFamily: bold ? '"Crimson Pro",serif' : 'Jost,sans-serif', fontWeight:500, fontSize: bold ? '1.4rem' : 14, color:'#1A1A1A' }}>{value}</div>
    </div>
  );
}

function AboutPage({ onShop }) {
  return (
    <div data-screen-label="About">
      <section style={{ background:'#F2E8D6', padding:'80px 0', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:720, margin:'0 auto' }}>
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:16 }}>Est. Virudhachalam · Since 2019</div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'3.2rem', lineHeight:1.06, letterSpacing:'-0.018em', marginBottom:18 }}>Premium home décor<br/>for every Indian home.</h1>
          <p style={{ fontSize:14.5 }}>KGS Home Décor was built on a simple belief — every home deserves beauty, without having to travel. We curate, ship, and stand behind every piece.</p>
        </div>
      </section>
      <section style={{ background:'#FAF8F4', padding:'72px 0' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
          <div style={{ aspectRatio:'4/5', overflow:'hidden', borderRadius:4 }}>
            <img src="../../assets/lifestyle/showroom_interior.webp" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          </div>
          <div>
            <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.22em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>Our Story</div>
            <h2 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.3rem', lineHeight:1.1, marginBottom:22 }}>Built for the homes of Virudhachalam.</h2>
            <p style={{ marginBottom:16, fontSize:14 }}>From our showroom on Junction Road, we stock over 500 carefully curated pieces — fountains, sofas, clocks, statues, and gifts.</p>
            <p style={{ marginBottom:28, fontSize:14 }}>Every product is personally selected. Every piece meets our standard for quality, finish, and beauty.</p>
            <button className="btn btn-dark" onClick={onShop}>Shop the Collection</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div data-screen-label="Contact">
      <section style={{ background:'#F2E8D6', padding:'72px 0', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:720, margin:'0 auto' }}>
          <div style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.26em', textTransform:'uppercase', color:'#7A5C1E', marginBottom:14 }}>Get in Touch</div>
          <h1 style={{ fontFamily:'"Crimson Pro",serif', fontWeight:500, fontSize:'2.8rem', letterSpacing:'-0.015em' }}>Visit · Call · WhatsApp</h1>
        </div>
      </section>
      <section style={{ background:'#FAF8F4', padding:'56px 0 96px' }}>
        <div className="container" style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:56 }}>
          <div>
            <h3 style={{ fontSize:22, marginBottom:18 }}>Send Us a Message</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[['Your name','Meena R.'], ['Phone (WhatsApp)','+91 ...'], ['Message','I’m looking for a 3-seater sofa...']].map(([l, p], i) => (
                <label key={i} style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  <span style={{ fontSize:10, fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase' }}>{l}</span>
                  {i === 2
                    ? <textarea rows="4" placeholder={p} style={{ padding:'12px 16px', border:'1px solid rgba(197,168,128,0.40)', borderRadius:3, fontFamily:'Jost,sans-serif', fontSize:13, background:'#fff' }}/>
                    : <input placeholder={p} style={{ padding:'12px 16px', border:'1px solid rgba(197,168,128,0.40)', borderRadius:3, fontFamily:'Jost,sans-serif', fontSize:13, background:'#fff' }}/>}
                </label>
              ))}
              <button className="btn btn-dark" style={{ alignSelf:'flex-start' }}>Send Message</button>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {[['location_on','Showroom','185/G Junction Rd, Virudhachalam 606001'],
              ['schedule','Hours','Mon – Sun · 10:00 AM – 10:00 PM'],
              ['call','Phone','+91 97891 82921'],
              ['chat','WhatsApp','Replies in ~10 minutes']].map(([ic, t, b]) => (
              <div key={t} style={{ display:'flex', gap:14, padding:16, background:'#fff', border:'1px solid rgba(197,168,128,0.25)', borderRadius:3 }}>
                <span className="material-symbols-outlined" style={{ color:'#C5A880', fontSize:20 }}>{ic}</span>
                <div>
                  <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase' }}>{t}</div>
                  <div style={{ fontSize:13, color:'#5E5B59', marginTop:4 }}>{b}</div>
                </div>
              </div>
            ))}
            <div style={{ height:200, background:'url(../../assets/lifestyle/showroom_interior.webp) center/cover', borderRadius:3 }}/>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ShopPage, ProductDetail, CartPage, AboutPage, ContactPage });
