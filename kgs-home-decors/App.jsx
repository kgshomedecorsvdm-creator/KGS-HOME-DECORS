/* KGS Home Décors — App root: routing + global state */

function Toast({ msg, show }) {
  return (
    <div className={'toast ' + (show ? 'toast--in' : 'toast--out')}>
      <span
        className="material-symbols-outlined"
        style={{ color:'#25D366', fontVariationSettings:'"FILL" 1' }}>
        check_circle
      </span>
      <span>{msg}</span>
    </div>
  );
}

function App() {
  const [route, setRoute]     = React.useState('home');
  const [filter, setFilter]   = React.useState('all');
  const [cart, setCart]       = React.useState([]);
  const [wishlist, setWish]   = React.useState([]);
  const [viewing, setView]    = React.useState(null);
  const [toast, setToast]     = React.useState({ msg:'', show:false });
  // Preserve cart through checkout so confirmation can show it
  const [lastCart, setLastCart] = React.useState([]);

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);

  const showToast = (msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2200);
  };

  const handleAdd = (p, qty = 1) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === p.id);
      if (ex) return prev.map(c => c.id === p.id ? { ...c, qty: c.qty + qty } : c);
      return [...prev, { id: p.id, qty }];
    });
    showToast('Added to cart');
  };

  const handleView = (p) => {
    setView(p);
    setRoute('product');
    window.scrollTo(0, 0);
  };

  const handleWishToggle = (id) => {
    setWish(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    setRoute('checkout');
  };

  const handlePlaceOrder = (formData, paymentMethod) => {
    setLastCart([...cart]);
    setCart([]);
    setRoute('order-confirmation');
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  // Render current page body
  let body = null;

  if (route === 'home') {
    body = (
      <div data-screen-label="Home">
        <Hero
          onShop={() => setRoute('shop')}
          onSellers={() => { setFilter('all'); setRoute('shop'); }}
        />
        <TrustStrip />
        <CategoryGrid onClick={(c) => { if (c) setFilter(c); setRoute('shop'); }} />
        <BestSellers
          onAdd={handleAdd}
          onView={handleView}
          wishlist={wishlist}
          onWishToggle={handleWishToggle}
        />
        <WhyKGS />
        <CompleteTheLook onAdd={handleAdd} onView={handleView} />
        <PromoBanner onShop={() => setRoute('shop')} />
        <Testimonials />
        <Instagram />
      </div>
    );
  } else if (route === 'shop') {
    body = (
      <ShopPage
        filter={filter}
        setFilter={setFilter}
        onAdd={handleAdd}
        onView={handleView}
        wishlist={wishlist}
        onWishToggle={handleWishToggle}
      />
    );
  } else if (route === 'product') {
    body = (
      <ProductDetail
        p={viewing}
        onAdd={handleAdd}
        onBack={() => setRoute('shop')}
      />
    );
  } else if (route === 'cart') {
    body = (
      <CartPage
        cart={cart}
        onChangeQty={(id, qty) => setCart(prev => prev.map(c => c.id === id ? { ...c, qty } : c))}
        onRemove={(id) => setCart(prev => prev.filter(c => c.id !== id))}
        onCheckout={handleCheckout}
        onBack={() => setRoute('shop')}
      />
    );
  } else if (route === 'checkout') {
    body = (
      <CheckoutPage
        cart={cart}
        onPlaceOrder={handlePlaceOrder}
        onBack={() => setRoute('cart')}
      />
    );
  } else if (route === 'order-confirmation') {
    body = (
      <OrderConfirmationPage
        cart={lastCart}
        onKeepShopping={() => setRoute('shop')}
      />
    );
  } else if (route === 'wishlist') {
    body = (
      <WishlistPage
        wishlist={wishlist}
        onAdd={handleAdd}
        onView={handleView}
        onWishToggle={handleWishToggle}
        onShop={() => setRoute('shop')}
      />
    );
  } else if (route === 'about') {
    body = <AboutPage onShop={() => setRoute('shop')} />;
  } else if (route === 'contact') {
    body = <ContactPage />;
  } else {
    body = <div style={{ minHeight:'60vh' }}/>;
  }

  // Pages that should NOT show Newsletter (keep homepage clean but add on inner pages)
  const showNewsletter = !['checkout', 'order-confirmation'].includes(route);

  return (
    <div>
      <Announcement />
      <Nav
        route={route}
        setRoute={setRoute}
        cart={cartCount}
        wishlist={wishlist.length}
        onSearch={() => showToast('Search coming soon')}
      />
      <main>{body}</main>
      {showNewsletter && <Newsletter />}
      <Footer setRoute={setRoute} />
      <WAFloat />
      <Toast msg={toast.msg} show={toast.show} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
