
    // ===== Extra Pages (Auth, Legal) ==================================
    // Extra Pages added to the KGS Home Decor React App

    function AccountLoginPage({ onRegister, onLogin }) {
      const [showPwd, setShowPwd] = React.useState(false);
      return (
        <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }}>
            <h1 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '32px', marginBottom: '8px', color: '#1A1A1A' }}>Welcome Back</h1>
            <p style={{ color: '#5E5B59', fontSize: '14px', marginBottom: '32px' }}>Sign in to access your orders, saved items, and personalized recommendations.</p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' }}>Email Address</label>
              <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#5E5B59' }}>Password</label>
                <a href="forgot-password.html" style={{ fontSize: '12px', color: '#B89657', fontWeight: 500 }}>Forgot?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input type={showPwd ? 'text' : 'password'} placeholder="Enter your password" style={{ width: '100%', padding: '14px', paddingRight: '46px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' }} />
                <button type="button" onClick={() => setShowPwd(!showPwd)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', padding: '4px', display: 'flex', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{showPwd ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button onClick={onLogin} className="btn btn-dark" style={{ width: '100%', padding: '16px', fontSize: '14px', marginBottom: '24px' }}>Sign In</button>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#5E5B59' }}>
              Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onRegister(); }} style={{ color: '#1A1A1A', fontWeight: 600 }}>Create one</a>
            </div>
          </div>
        </div>
      );
    }

    function AccountRegisterPage({ onLogin, onRegister }) {
      return (
        <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }}>
            <h1 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '32px', marginBottom: '8px', color: '#1A1A1A' }}>Create Account</h1>
            <p style={{ color: '#5E5B59', fontSize: '14px', marginBottom: '32px' }}>Join us for exclusive access to new collections and priority support.</p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' }}>Full Name</label>
              <input type="text" placeholder="Enter your full name" style={{ width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' }}>Email Address</label>
              <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' }}>Password</label>
              <input type="password" placeholder="Create a password" style={{ width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif' }} />
            </div>

            <button onClick={onRegister} className="btn btn-dark" style={{ width: '100%', padding: '16px', fontSize: '14px', marginBottom: '24px' }}>Create Account</button>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#5E5B59' }}>
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onLogin(); }} style={{ color: '#1A1A1A', fontWeight: 600 }}>Sign in</a>
            </div>
          </div>
        </div>
      );
    }

    function AccountDashboardPage({ onLogout, onShop }) {
      return (
        <div className="section container" style={{ minHeight: '60vh', padding: '64px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <div>
              <h1 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '40px', color: '#1A1A1A', marginBottom: '8px' }}>My Account</h1>
              <p style={{ color: '#5E5B59', fontSize: '15px' }}>Welcome back, Meena.</p>
            </div>
            <button onClick={onLogout} className="btn btn-ghost" style={{ padding: '10px 20px' }}>Log Out</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '16px 20px', background: '#fff', borderRadius: '12px', fontWeight: 500, color: '#B89657', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>Order History</div>
              <div style={{ padding: '16px 20px', borderRadius: '12px', color: '#5E5B59', cursor: 'pointer' }}>Saved Addresses</div>
              <div style={{ padding: '16px 20px', borderRadius: '12px', color: '#5E5B59', cursor: 'pointer' }}>Account Settings</div>
            </div>

            <div>
              <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', marginBottom: '24px' }}>Recent Orders</h2>
              <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px dashed rgba(26,26,26,0.15)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#C5A880', marginBottom: '16px' }}>inventory_2</span>
                <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>No orders yet</div>
                <p style={{ color: '#5E5B59', fontSize: '14px', marginBottom: '24px' }}>When you place an order, it will appear here.</p>
                <button onClick={onShop} className="btn btn-dark">Start Shopping</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    function LegalPage({ title, children }) {
      return (
        <div className="section container" style={{ maxWidth: '800px', padding: '64px 20px' }}>
          <h1 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '40px', color: '#1A1A1A', marginBottom: '40px', textAlign: 'center' }}>{title}</h1>
          <div style={{ color: '#5E5B59', fontSize: '16px', lineHeight: '1.8' }}>
            {children}
          </div>
        </div>
      );
    }

    function PrivacyPolicyPage() {
      return (
        <LegalPage title="Privacy Policy">
          <p style={{ marginBottom: '24px' }}>At KGS Home DÃ©cor, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' }}>Information We Collect</h2>
          <p style={{ marginBottom: '24px' }}>We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you make a purchase or create an account.</p>
          <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' }}>How We Use Your Information</h2>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>To process and fulfill your orders.</li>
            <li style={{ marginBottom: '8px' }}>To communicate with you about your order status.</li>
            <li style={{ marginBottom: '8px' }}>To send you promotional offers and updates (only if you opt-in).</li>
          </ul>
        </LegalPage>
      );
    }

    function TermsPage() {
      return (
        <LegalPage title="Terms & Conditions">
          <p style={{ marginBottom: '24px' }}>Welcome to KGS Home DÃ©cor. By accessing our website, you agree to be bound by these Terms and Conditions.</p>
          <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' }}>Product Accuracy</h2>
          <p style={{ marginBottom: '24px' }}>We strive to ensure that all details, descriptions, and prices of products appearing on the website are accurate. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice.</p>
        </LegalPage>
      );
    }

    function ReturnPolicyPage() {
      return (
        <LegalPage title="Return & Refund Policy">
          <p style={{ marginBottom: '24px' }}>We want you to be completely satisfied with your purchase. If you are not, you may return it within 7 days of delivery.</p>
          <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' }}>Conditions for Return</h2>
          <p style={{ marginBottom: '24px' }}>Items must be unused and in the same condition that you received them. They must also be in the original packaging.</p>
          <p style={{ marginBottom: '24px' }}>To initiate a return, please contact our support team via WhatsApp.</p>
        </LegalPage>
      );
    }

    function ShippingPolicyPage() {
      return (
        <LegalPage title="Shipping Policy">
          <p style={{ marginBottom: '24px' }}>We offer reliable and secure shipping for all our products.</p>
          <h2 style={{ fontFamily: '"Crimson Pro", serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' }}>Delivery Times</h2>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><b>Virudhachalam:</b> Same day or next day delivery.</li>
            <li style={{ marginBottom: '8px' }}><b>Tamil Nadu:</b> 2-4 business days.</li>
            <li style={{ marginBottom: '8px' }}><b>Rest of India:</b> 5-7 business days.</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>Shipping is free for all orders within Virudhachalam.</p>
        </LegalPage>
      );
    }

    // Attach to window so Babel standalone finds it
    window.AccountLoginPage = AccountLoginPage;
    window.AccountRegisterPage = AccountRegisterPage;
    window.AccountDashboardPage = AccountDashboardPage;
    window.PrivacyPolicyPage = PrivacyPolicyPage;
    window.TermsPage = TermsPage;
    window.ReturnPolicyPage = ReturnPolicyPage;
    window.ShippingPolicyPage = ShippingPolicyPage;

  

// ===== NEXT SCRIPT BLOCK =====



    let PRODUCTS = [
      { id: 'plant-banana', name: 'Large Artificial Banana Plant', category: 'Artificial Plants', price: 3200, was: null, off: null, rating: 4.9, reviews: 84, sold: 31, stock: 9, image: 'assets/products/plant.png', badge: 'Popular', badgeKind: 'gold' },
      { id: 'flower-rose', name: 'Premium Rose Bouquet', category: 'Artificial Flowers', price: 1500, was: null, off: null, rating: 4.7, reviews: 34, sold: 12, stock: 20, image: 'assets/products-real/flower-01.png', badge: 'New', badgeKind: 'ink' },
      { id: 'bag-tote', name: 'Handcrafted Leather Tote', category: 'Bags & Accessories', price: 4500, was: 5000, off: '10% OFF', rating: 4.8, reviews: 56, sold: 28, stock: 5, image: 'assets/products-real/bag-01.png', badge: null },
      { id: 'bottle-vintage', name: 'Vintage Glass Bottle', category: 'Bottles', price: 1200, was: null, off: null, rating: 4.6, reviews: 21, sold: 9, stock: 15, image: 'assets/products-real/bottle-01.png', badge: 'Staff Pick', badgeKind: 'gold' },
      { id: 'vase-ceramic', name: 'Designer Ceramic Vase', category: 'Vases & DÃ©cor', price: 1950, was: null, off: null, rating: 5.0, reviews: 42, sold: 18, stock: 14, image: 'assets/products/ceramic_vase.webp', badge: 'New', badgeKind: 'ink' },
      { id: 'fountain-tabletop', name: 'Indoor Tabletop Fountain', category: 'Fountains & Pooja', price: 2850, was: null, off: null, rating: 4.9, reviews: 56, sold: 22, stock: 6, image: 'assets/products/fountain.webp', badge: 'Best Seller', badgeKind: 'gold' },
      { id: 'gift-hamper', name: 'Luxury Festive Gift Hamper', category: 'Gifts & Hampers', price: 5500, was: null, off: null, rating: 4.9, reviews: 88, sold: 45, stock: 8, image: 'assets/products-real/gift-01.png', badge: null },
      { id: 'sofa-3seater', name: '3-Seater Sofa - Fabric & Wood', category: 'Chairs & Sofas', price: 18500, was: 22000, off: '16% OFF', rating: 4.8, reviews: 124, sold: 38, stock: 4, image: 'assets/products/sofa.webp', badge: 'Best Seller', badgeKind: 'gold' },
      { id: 'clock-brass', name: 'Antique Brass Wall Clock', category: 'Clocks', price: 1299, was: null, off: null, rating: 4.7, reviews: 98, sold: 64, stock: 12, image: 'assets/products/clock.webp', badge: 'New', badgeKind: 'ink' },
      { id: 'lamp-table', name: 'Artisan Table Lamp', category: 'Lighting', price: 3400, was: null, off: null, rating: 4.6, reviews: 72, sold: 27, stock: 11, image: 'assets/products/table_lamp.webp', badge: null },
      { id: 'fan-vintage', name: 'Vintage Blower Fan', category: 'Blower Fans', price: 4200, was: null, off: null, rating: 4.8, reviews: 33, sold: 14, stock: 7, image: 'assets/products-real/fan-01.png', badge: null },
      { id: 'horse-statue', name: 'Decorative Horse Statue', category: 'Statues & Idols', price: 4250, was: 5500, off: '23% OFF', rating: 4.9, reviews: 168, sold: 52, stock: 3, image: 'assets/products/horse.webp', badge: 'Best Seller', badgeKind: 'gold' },
      { id: 'wall-art-botanical', name: 'Botanical Wall Art Panel', category: 'Wall Frames', price: 1850, was: null, off: null, rating: 4.8, reviews: 113, sold: 41, stock: 18, image: 'assets/products/wall_decor.webp', badge: null },
      { id: 'wall-statue', name: 'Brass Wall Mount Statue', category: 'Wall Statues', price: 3800, was: null, off: null, rating: 4.7, reviews: 45, sold: 19, stock: 6, image: 'assets/products-real/wall-statue-01.png', badge: null },
      { id: 'cushion-velvet', name: 'Velvet Throw Cushion Set', category: 'Vases & DÃ©cor', price: 1800, was: 2200, off: '18% OFF', rating: 4.8, reviews: 67, sold: 43, stock: 15, image: 'assets/products/ceramic_vase.webp', badge: 'Hot Deal', badgeKind: 'warm' },
      { id: 'lamp-floor', name: 'Rattan Floor Lamp', category: 'Lighting', price: 5200, was: null, off: null, rating: 4.9, reviews: 38, sold: 21, stock: 5, image: 'assets/products/table_lamp.webp', badge: 'New', badgeKind: 'ink' },
      { id: 'mirror-arched', name: 'Arched Gold Wall Mirror', category: 'Wall Frames', price: 7500, was: 9000, off: '17% OFF', rating: 4.9, reviews: 92, sold: 34, stock: 3, image: 'assets/products/wall_decor.webp', badge: 'Best Seller', badgeKind: 'gold' },
      { id: 'pooja-thali', name: 'Handcrafted Brass Pooja Thali', category: 'Fountains & Pooja', price: 2200, was: null, off: null, rating: 5.0, reviews: 114, sold: 76, stock: 10, image: 'assets/products/fountain.webp', badge: 'Popular', badgeKind: 'gold' },
      { id: 'plant-monstera', name: 'Artificial Monstera Plant', category: 'Artificial Plants', price: 2800, was: null, off: null, rating: 4.7, reviews: 52, sold: 29, stock: 12, image: 'assets/products/plant.png', badge: 'Trending', badgeKind: 'ink' },
      { id: 'clock-wooden', name: 'Rustic Wooden Wall Clock', category: 'Clocks', price: 1850, was: 2100, off: '12% OFF', rating: 4.6, reviews: 44, sold: 31, stock: 8, image: 'assets/products/clock.webp', badge: null },
      { id: 'statue-ganesha', name: 'Brass Ganesha Idol', category: 'Statues & Idols', price: 3600, was: null, off: null, rating: 5.0, reviews: 201, sold: 88, stock: 7, image: 'assets/products/horse.webp', badge: 'Best Seller', badgeKind: 'gold' },
      { id: 'hamper-diwali', name: 'Premium Diwali Gift Set', category: 'Gifts & Hampers', price: 4200, was: null, off: null, rating: 4.8, reviews: 73, sold: 55, stock: 4, image: 'assets/products-real/gift-01.png', badge: 'Trending', badgeKind: 'ink' },
      { id: 'sofa-accent', name: 'Accent Armchair â€” Teal', category: 'Chairs & Sofas', price: 12500, was: 15000, off: '17% OFF', rating: 4.7, reviews: 58, sold: 22, stock: 2, image: 'assets/products/sofa.webp', badge: 'Hot Deal', badgeKind: 'warm' },
    ];

        let CATEGORIES = [
      { id: 'artificial-plants',  label: 'Artificial Plants',   img: 'assets/categories/cat_artificial_plants_thumb.webp' },
      { id: 'artificial-flowers', label: 'Artificial Flowers',  img: 'assets/categories/cat_artificial_flowers_thumb.webp' },
      { id: 'bags-accessories',   label: 'Bags & Accessories',  img: 'assets/categories/cat_bags_accessories_thumb.webp' },
      { id: 'bottles',            label: 'Bottles',             img: 'assets/categories/cat_bottles_thumb.webp' },
      { id: 'vases-decor',        label: 'Vases & DÃ©cor',       img: 'assets/categories/cat_vases_decor_new_thumb.webp' },
      { id: 'fountains-pooja',    label: 'Fountains & Pooja',   img: 'assets/categories/cat_fountains_new_thumb.webp' },
      { id: 'gifts-hampers',      label: 'Gifts & Hampers',     img: 'assets/categories/cat_gifts_new_thumb.webp' },
      { id: 'chairs-sofas',       label: 'Chairs & Sofas',      img: 'assets/categories/cat_chairs_sofas_thumb.webp' },
      { id: 'clocks',             label: 'Clocks',              img: 'assets/categories/cat_clocks_new_thumb.webp' },
      { id: 'lighting',           label: 'Lighting',            img: 'assets/categories/cat_lighting_only_thumb.webp' },
      { id: 'blower-fans',        label: 'Blower Fans',         img: 'assets/categories/cat_blower_fans_thumb.webp' },
      { id: 'statues-idols',      label: 'Statues & Idols',     img: 'assets/categories/cat_statues_new_thumb.webp' },
      { id: 'wall-frames',        label: 'Wall Frames',         img: 'assets/categories/cat_wall_frames_new_thumb.webp' },
      { id: 'wall-statues',       label: 'Wall Statues',        img: 'assets/categories/cat_wall_statues_thumb.webp' },
    ];

    const TESTIMONIALS = [
      { name: 'Priya Sharma', initial: 'P', stars: 5, quote: 'Ordered the tall marble vase and it arrived the next day, packed properly. Looks exactly like the photos. Will order again.', thumb: 'assets/lifestyle/room_bedroom.webp' },
      { name: 'Rohit Verma', initial: 'R', stars: 5, quote: 'WhatsApped them about a sofa and got a reply in five minutes. Good people. The piece itself is solid â€” no wobble, good finish.', thumb: 'assets/lifestyle/room_living.webp' },
      { name: 'Ananya Iyer', initial: 'A', stars: 5, quote: 'An incredibly premium selection right here in Virudhachalam. Went to the showroom on Junction Road and ended up buying three things I hadn\'t planned to.', thumb: 'assets/lifestyle/room_hallway.webp' },
    ];

    const IG_TILES = [
      'assets/lifestyle/room_living.webp',
      'assets/lifestyle/room_bedroom.webp',
      'assets/lifestyle/room_hallway.webp',
      'assets/lifestyle/room_zen.webp',
      'assets/lifestyle/showroom.webp',
      'assets/lifestyle/showroom_interior.webp',
      'assets/categories/cat_decor_thumb.webp',
      'assets/categories/cat_lighting_thumb.webp',
      'assets/categories/cat_plants_thumb.webp',
      'assets/categories/cat_lifestyle_thumb.webp',
    ];

    const fmtPrice = (n) => 'â‚¹' + n.toLocaleString('en-IN');

    // â”€â”€â”€ Supabase Integration â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const SB_URL     = 'https://rgpkomngygapwjhnbgaf.supabase.co';
    const SB_ANON    = 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';

    const _TAG_BADGE = {
      'bestseller':  { badge: 'Best Seller', badgeKind: 'gold' },
      'new-arrival': { badge: 'New',         badgeKind: 'ink'  },
      'featured':    { badge: 'Featured',    badgeKind: 'gold' },
      'trending':    { badge: 'Trending',    badgeKind: 'ink'  },
      'hot-deal':    { badge: 'Hot Deal',    badgeKind: 'warm' },
      'popular':     { badge: 'Popular',     badgeKind: 'gold' },
    };
    const _CAT_LABEL = {
      'wall-decor':            'Wall DÃ©cor',
      'decor':                 'DÃ©cor',
      'vases-plants':          'Vases & Plants',
      'lifestyle-accessories': 'Lifestyle',
      'furniture':             'Furniture',
      'gifts':                 'Gifts',
      'lighting':              'Lighting',
    };

    function normalizeProduct(p) {
      // Discount badge from compare_at_price
      const off = p.compare_at_price && parseFloat(p.compare_at_price) > parseFloat(p.price)
        ? Math.round((1 - parseFloat(p.price) / parseFloat(p.compare_at_price)) * 100) + '% OFF'
        : null;
      // Badge from tags
      let badge = null, badgeKind = null;
      if (off) { badge = off; badgeKind = 'warm'; }
      if (Array.isArray(p.tags)) {
        for (const tag of p.tags) {
          if (_TAG_BADGE[tag]) { badge = _TAG_BADGE[tag].badge; badgeKind = _TAG_BADGE[tag].badgeKind; break; }
        }
      }
      // Deterministic rating/reviews from UUID hash (consistent across renders)
      const h = parseInt((p.id || '').replace(/-/g, '').slice(0, 8), 16) || 0;
      const rating  = +(4.4 + (h % 6) / 10).toFixed(1);   // 4.4â€“4.9
      const reviews = 18 + (h % 200);                       // 18â€“217
      const sold    = 8  + (h % 95);                        // 8â€“102
      return {
        id:           p.id,
        name:         p.name,
                let catSlug = p.category;
        let catLabel = _CAT_LABEL[p.category] || p.category;
        const url = (p.image_url || '').toLowerCase();
        const n = (p.name || '').toLowerCase();
        if (url.includes('ar-plants')) { catSlug = 'artificial-plants'; catLabel = 'Artificial Plants'; }
        else if (url.includes('artificial-flowers')) { catSlug = 'artificial-flowers'; catLabel = 'Artificial Flowers'; }
        else if (url.includes('bags-accessories')) { catSlug = 'bags-accessories'; catLabel = 'Bags & Accessories'; }
        else if (url.includes('bottles')) { catSlug = 'bottles'; catLabel = 'Bottles'; }
        else if (url.includes('vases') || n.includes('vase')) { catSlug = 'vases-decor'; catLabel = 'Vases & Décor'; }
        else if (url.includes('fountains') || n.includes('pooja')) { catSlug = 'fountains-pooja'; catLabel = 'Fountains & Pooja'; }
        else if (url.includes('gifts-toys') || n.includes('hamper') || n.includes('gift')) { catSlug = 'gifts-hampers'; catLabel = 'Gifts & Hampers'; }
        else if (url.includes('chairs-sofas') || n.includes('sofa') || n.includes('chair')) { catSlug = 'chairs-sofas'; catLabel = 'Chairs & Sofas'; }
        else if (url.includes('clocks') || n.includes('clock')) { catSlug = 'clocks'; catLabel = 'Clocks'; }
        else if (url.includes('blower-fan') || n.includes('blower')) { catSlug = 'blower-fans'; catLabel = 'Blower Fans'; }
        else if (url.includes('wall-frames') || n.includes('frame')) { catSlug = 'wall-frames'; catLabel = 'Wall Frames'; }
        else if (url.includes('wall-statues') || n.includes('wall statue')) { catSlug = 'wall-statues'; catLabel = 'Wall Statues'; }
        else if (url.includes('statues') || n.includes('idol') || n.includes('statue')) { catSlug = 'statues-idols'; catLabel = 'Statues & Idols'; }
        else if (p.category === 'lighting' || url.includes('lighting') || n.includes('light')) { catSlug = 'lighting'; catLabel = 'Lighting'; }

          category:     catLabel,
          categorySlug: catSlug,          // original DB slug â€” used for filtering
        price:        parseFloat(p.price),
        was:          p.compare_at_price ? parseFloat(p.compare_at_price) : null,
        off:          off,
        rating:       rating,
        reviews:      reviews,
        sold:         sold,
        stock:        typeof p.stock_quantity === 'number' ? p.stock_quantity : (p.in_stock ? 10 : 0),
        image:        p.image_url,
        badge:        badge,
        badgeKind:    badgeKind,
      };
    }

    async function fetchAllProductsFromSupabase() {
      const sb = window.supabase.createClient(SB_URL, SB_ANON);
      let all = [], offset = 0, batchSize = 500;
      while (true) {
        const { data, error } = await sb
          .from('products')
          .select('id,name,category,price,compare_at_price,image_url,in_stock,stock_quantity,tags')
          .eq('is_active', true)
          .order('sort_order', { ascending: true })
          .order('created_at', { ascending: false })
          .range(offset, offset + batchSize - 1);
        if (error) throw error;
        all = all.concat(data || []);
        if (!data || data.length < batchSize) break;
        offset += batchSize;
      }
      return all.map(normalizeProduct);
    }

    // ===== Announcement bar =====================================================
    function Announcement() {
      const MSGS = [
        { icon: 'local_shipping',  text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Free delivery'), ' in Virudhachalam â€” every order, no minimum.') },
        { icon: 'star',            text: React.createElement(React.Fragment, null, React.createElement('b', null, '\u2605 5.0 on Google.'), ' 240 families trust us. Come see why.') },
        { icon: 'storefront',      text: React.createElement(React.Fragment, null, 'Showroom on ', React.createElement('b', null, 'Junction Road'), ' open daily \u00b7 10\u00a0AM\u2013\u200910\u00a0PM') },
        { icon: 'verified',        text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Every piece hand-checked'), ' at our showroom before it ships.') },
        { icon: 'replay',          text: React.createElement(React.Fragment, null, React.createElement('b', null, '7-day returns.'), ' Don\u2019t love it? Full refund, no questions.') },
        { icon: 'chat',            text: React.createElement(React.Fragment, null, 'WhatsApp us \u2014 a real person replies within ', React.createElement('b', null, '10\u00a0minutes.')) },
      ];

      const [idx, setIdx]     = React.useState(0);
      const [cls, setCls]     = React.useState('in');
      const [paused, setPaused] = React.useState(false);
      const [time, setTime]   = React.useState('');

      // Live IST clock
      React.useEffect(() => {
        const tick = () => {
          const ist = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
          const h = ist.getHours(), m = ist.getMinutes();
          const hh = h % 12 || 12;
          const mm = String(m).padStart(2, '0');
          const ampm = h >= 12 ? 'PM' : 'AM';
          const open = h >= 10 && h < 22;
          setTime((open ? 'Open now' : 'Opens 10\u00a0AM') + ' \u00b7 ' + hh + ':' + mm + '\u00a0' + ampm);
        };
        tick();
        const t = setInterval(tick, 30000);
        return () => clearInterval(t);
      }, []);

      // Auto-rotate with directional slide
      React.useEffect(() => {
        if (paused) return;
        const t = setInterval(() => {
          setCls('out-up');
          setTimeout(() => {
            setIdx(x => (x + 1) % MSGS.length);
            setCls('out-down');
            requestAnimationFrame(() => requestAnimationFrame(() => setCls('in')));
          }, 460);
        }, 4500);
        return () => clearInterval(t);
      }, [paused, idx]);

      const goTo = (n) => {
        if (n === idx) return;
        setCls('out-up');
        setTimeout(() => {
          setIdx(n);
          setCls('out-down');
          requestAnimationFrame(() => requestAnimationFrame(() => setCls('in')));
        }, 400);
      };

      return (
        React.createElement('div', { className: 'announce', onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) },
          React.createElement('div', { className: 'container announce-bar' },
            // Left â€” live store status
            React.createElement('span', { className: 'announce-side' },
              React.createElement('span', { className: 'material-symbols-outlined' }, 'storefront'),
              time || 'Junction Road \u00b7 Virudhachalam'
            ),
            // Centre â€” rotating messages
            React.createElement('span', { className: 'announce-center' },
              MSGS.map((m, n) =>
                React.createElement('span', { key: n, className: 'announce-msg ' + (n === idx ? cls : 'out-down') },
                  React.createElement('span', { className: 'material-symbols-outlined' }, m.icon),
                  m.text
                )
              )
            ),
            // Right â€” progress dots + links
            React.createElement('span', { className: 'announce-side announce-side--right' },
              React.createElement('span', { className: 'announce-dots' },
                MSGS.map((_, n) =>
                  React.createElement('span', {
                    key: n,
                    className: 'announce-dot' + (n === idx ? ' active' : ''),
                    onClick: () => goTo(n),
                    style: { cursor: 'pointer' }
                  })
                )
              ),
              React.createElement('span', { className: 'announce-divider' }),
              React.createElement('a', { href: '#', onClick: (e) => e.preventDefault() }, 'Track Order'),
              React.createElement('span', { className: 'announce-divider' }),
              React.createElement('a', { href: 'https://wa.me/919789182921', target: '_blank', rel: 'noreferrer' }, 'WhatsApp')
            )
          )
        )
      );
    }

    // ===== Nav ==================================================================
    function Nav({ route, setRoute, cart, wishlist, onSearch }) {
      const [menuOpen, setMenuOpen] = React.useState(false);
      const [scrolled, setScrolled]   = React.useState(false);
      const [progress, setProgress]   = React.useState(0);
      const lastY = React.useRef(0);

      React.useEffect(() => {
        let ticking = false;
        
        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const y = window.scrollY;
              const docH = document.documentElement.scrollHeight - window.innerHeight;

              // Scrolled pill state (tighten after 80px)
              setScrolled(y > 80);

              // Progress bar 0â€“100%
              setProgress(docH > 0 ? Math.min(100, (y / docH) * 100) : 0);
              ticking = false;
            });
            ticking = true;
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

      React.useEffect(() => { setProgress(0); }, [route]);

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

      const wrapCls = 'nav-wrap' + (scrolled ? ' nav--scrolled' : '');

      return (
        <React.Fragment>
          <div className={wrapCls}>
            <div className="container nav-bar">
              {/* Gold scroll progress bar */}
              <div className="nav-progress" style={{ width: progress + '%' }} />

              <a href="#" onClick={(e) => { e.preventDefault(); setRoute('home'); }} className="logo">
                <span className="mark">KGS</span>
                <span className="sub">Home DÃ©cors</span>
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
                <button className="icon-btn" onClick={() => setRoute('account')}>
                  <span className="material-symbols-outlined">person</span>
                </button>
                <button className="icon-btn" onClick={() => setRoute('wishlist')} style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined">favorite</span>
                  {wishlist > 0 && <span className="pip">{wishlist}</span>}
                </button>
                <button className="icon-btn" onClick={() => setRoute('cart')} style={{ position: 'relative' }}>
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
            <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)} />
            <div className="mobile-nav-panel">
              <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
              <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '1.3rem', color: '#1A1A1A', marginBottom: 8 }}>
                KGS Home DÃ©cors
              </div>
              {mobileLink('home', 'Home')}
              {mobileLink('shop', 'Shop')}
              {mobileLink('wishlist', 'Wishlist')}
              {mobileLink('cart', 'Cart')}
              {mobileLink('about', 'Our Story')}
              {mobileLink('contact', 'Contact')}
              <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                <a href="https://wa.me/919789182921" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', color: '#25D366', fontWeight: 600 }}>
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp Us
                </a>
                <div style={{ fontSize: 11, color: '#5E5B59', marginTop: 12, lineHeight: 1.6 }}>
                  185/G Junction Rd<br />Virudhachalam 606001<br />10 AM â€“ 10 PM, every day
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
              {item('local_shipping', 'Free Delivery', 'In Virudhachalam only.')}

              {item('verified', 'Hand-Checked', 'We look at every piece before it ships.')}
              {item('payments', 'Pay How You Like', 'UPI, card, net banking, or COD.')}
              {item('chat', 'Text Us Anytime', 'WhatsApp â€” we reply fast.')}
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
              <p>Drop your email. We send one newsletter a month â€” new arrivals, sale pieces, and whatever just came in from the showroom.</p>
            </div>
            <div className="newsletter-form">
              <input className="newsletter-input" placeholder="your@email.com" type="email" />
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
                  <span className="mark" style={{ color: '#fff' }}>KGS</span>
                  <span className="sub" style={{ color: '#C5A880' }}>Home DÃ©cors</span>
                </a>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.55)', maxWidth: 260, lineHeight: 1.75 }}>
                  Bringing premium, hand-curated home dÃ©cor directly to your doorstep.
                </p>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', marginTop: 10, lineHeight: 1.7 }}>
                  185/G Junction Road<br />Virudhachalam 606001<br />Tamil Nadu
                </div>
                <div className="footer-socials">
                  <a href="#" onClick={(e) => e.preventDefault()} title="Instagram">
                    <span className="material-symbols-outlined" style={{ fontSize: 17 }}>photo_camera</span>
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} title="Facebook">
                    <span className="material-symbols-outlined" style={{ fontSize: 17 }}>thumb_up</span>
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} title="YouTube">
                    <span className="material-symbols-outlined" style={{ fontSize: 17 }}>play_circle</span>
                  </a>
                </div>
                <div style={{ marginTop: 32 }}>
                  <p style={{ margin: '0 0 12px', color: '#fff', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Stay in the loop</p>
                  <div style={{ display: 'flex', gap: 0, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <input type="email" placeholder="Email address..." style={{ flex: 1, background: 'transparent', border: 'none', padding: '10px 14px', color: '#fff', fontSize: 13, outline: 'none' }} />
                    <button style={{ background: '#C5A880', color: '#1A1614', border: 'none', padding: '0 16px', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}>Join</button>
                  </div>
                </div>
              </div>
              {col('Shop', [
                ['Vases & DÃ©cor', 'shop'],
                ['Fountains & Pooja', 'shop'],
                ['Chairs & Sofas', 'shop'],
                ['Lighting', 'shop'],
                ['Gifts & Hampers', 'shop'],
                ['Statues & Idols', 'shop'],
              ])}
              {col('Help', [
                ['Shipping & Delivery', 'shipping'],
                ['Returns & Refunds', 'returns'],
                ['FAQ', null],
                ['Track Order', null],
                ['Payment Options', null],
              ])}
              {col('Company & Legal', [
                ['Our Story', 'about'],
                ['Contact', 'contact'],
                ['Terms', 'terms'],
                ['Privacy', 'privacy'],
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
                    Every day Â· 10 AM â€“ 10 PM
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
              <span>Â© 2026 KGS Home DÃ©cors, Virudhachalam. All rights reserved.</span>
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
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22, flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          Chat With Us
        </a>
      );
    }

    Object.assign(window, {
      PRODUCTS, CATEGORIES, TESTIMONIALS, IG_TILES, fmtPrice,
      Announcement, Nav, TrustStrip, Newsletter, Footer, WAFloat
    });

  

// ===== NEXT SCRIPT BLOCK =====


    /* KGS Home DÃ©cors â€” Home page sections */

    // ====== HERO ================================================================
    function Hero({ onShop, onSellers }) {
      const SLIDES = [
        {
          img: 'assets/lifestyle/showroom_interior.webp',
          eyebrow: 'Curated Spaces',
          headline: (<>Elevate your home.<br />Discover our <em>exclusive</em><br />collections.</>),
          sub: 'Premium interior designs. Free delivery in Virudhachalam only.',
        },
        {
          img: 'assets/lifestyle/premium_decor_bright.webp',
          eyebrow: 'Modern Elegance',
          headline: (<>Statement pieces<br />that transform <em>ordinary</em><br />into extraordinary.</>),
          sub: 'Handpicked artifacts, luxury lighting, and elegant decor.',
        },
        {
          img: 'assets/lifestyle/room_zen.webp',
          eyebrow: 'Heritage Pieces',
          headline: (<>Made the way<br />things were <em>made</em><br />to last.</>),
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
            {/* Slide indicators â€” horizontal row above headline */}
            <div className="hero-slides-indicator">
              {SLIDES.map((_, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className={idx === i ? 'active' : ''}
                    onClick={() => set(idx)}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {idx < SLIDES.length - 1 && <span className="rule" />}
                </React.Fragment>
              ))}
            </div>

            <div className="hero-eyebrow">
              <span className="hero-eyebrow__dot" />
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
              <div className="hero-stats__divider" />
              <div>
                <b>5.0<span className="hero-stats__star">â˜…</span></b>
                <span>240+ on Google</span>
              </div>
              <div className="hero-stats__divider" />
              <div>
                <b>Free</b>
                <span>Delivery in Virudhachalam</span>
              </div>
            </div>

            <div className="hero-arrows" style={{ marginTop: 20 }}>
              <button
                className="carousel-arrow"
                style={{ position: 'static', transform: 'none', boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)' }}
                onClick={() => set(i - 1)}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                className="carousel-arrow"
                style={{ position: 'static', transform: 'none', boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)' }}
                onClick={() => set(i + 1)}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="hero-photo">
            <img key={s.img} src={s.img} alt="" style={{ animation: 'heroFade 700ms ease' }} />
            <div className="hero-floating-chip">
              <span className="stars">â˜…â˜…â˜…â˜…â˜…</span>
              <b>5.0</b>
              <span style={{ color: '#5E5B59' }}>240+ on Google</span>
            </div>
            <div className="hero-delivery-chip">
              <span className="material-symbols-outlined">local_shipping</span>
              <div>
                <b>Free in Virudhachalam</b>
                <span>Same-day local delivery</span>
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
                    <img src={c.img} alt={c.label} loading="lazy" />
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
        if (p.stock && p.stock <= 4) return { tone: 'warm', icon: 'local_fire_department', text: `Only ${p.stock} left` };
        if (p.sold && p.sold >= 40) return { tone: 'ink', icon: 'trending_up', text: `${p.sold} sold this week` };
        if (p.sold && p.sold >= 20) return { tone: 'gold', icon: 'visibility', text: `${p.sold} people viewing` };
        return null;
      })();

      return (
        <div className="prod-card">
          <div className="prod-img" onClick={() => onView(p)} style={{ cursor: 'pointer' }}>
            <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6, zIndex: 3, alignItems: 'flex-start' }}>
              {p.badge && (
                <span className={
                  'prod-badge' +
                  (p.badgeKind === 'gold' ? ' prod-badge--gold' :
                    p.badgeKind === 'ink' ? ' prod-badge--ink' :
                      p.badgeKind === 'warm' ? ' prod-badge--warm' : '')
                }>{p.badge}</span>
              )}
              {p.off && <span className="prod-off">{p.off}</span>}
            </div>
            <button
              className={'heart-btn' + (wishlisted ? ' active' : '')}
              onClick={(e) => { e.stopPropagation(); onWishToggle(p.id); }}
              aria-label="Save to wishlist">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <img src={p.image} alt={p.name} loading="lazy" />
            <div className="prod-quick" onClick={(e) => { e.stopPropagation(); onView(p); }}>
              <span className="material-symbols-outlined">visibility</span> Quick View
            </div>
          </div>
          <div className="prod-body">
            <div className="prod-cat">{p.category}</div>
            <div className="prod-name">{p.name}</div>
            <div className="prod-rating">
              <span className="stars">â˜…â˜…â˜…â˜…â˜…</span>
              <span><b style={{ color: '#1A1A1A' }}>{p.rating.toFixed(1)}</b> Â· {p.reviews} reviews</span>
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
    function BestSellers({ onAdd, onView, wishlist, onWishToggle, onShop }) {
      const [start, setStart] = React.useState(0);
      const pool = React.useMemo(() => {
        // Prefer products tagged 'Best Seller'; fall back to all if < 8
        const tagged = PRODUCTS.filter(p => p.badge === 'Best Seller');
        const base   = tagged.length >= 8 ? tagged : [...PRODUCTS];
        // Fisher-Yates proper shuffle
        const arr = [...base];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }, [onShop]); // re-run after Supabase loads (onShop ref changes via key remount)
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
              <a href="#" onClick={(e) => { e.preventDefault(); if (onShop) onShop(); }} className="view-all">
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
              <div className="best-sellers-track">
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




    // ====== SHOWROOM VISIT BANNER ================================================
    function PromoBanner({ onShop }) {
      return (
        <section style={{ padding: '20px 0 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(26,26,26,0.94) 0%, rgba(42,37,34,0.88) 50%, rgba(61,46,31,0.92) 100%), url("assets/lifestyle/showroom.webp") center/cover no-repeat',
              borderRadius: 24,
              padding: '72px 80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 60,
              flexWrap: 'wrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 32px 64px -16px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              {/* Refined glowing accents */}
              <div style={{
                position: 'absolute', right: '-10%', top: '-20%',
                width: 500, height: 500, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(184,150,87,0.18) 0%, transparent 60%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', left: '-5%', bottom: '-15%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(184,150,87,0.12) 0%, transparent 60%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1, flex: '1 1 400px' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 9999,
                  padding: '8px 20px', marginBottom: 28,
                  fontSize: 11, fontWeight: 600, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#E8B58A',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>storefront</span>
                  Showroom Experience
                </div>
                <h2 style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1,
                  color: '#fff', marginBottom: 20,
                  letterSpacing: '-0.02em',
                }}>
                  Come experience it <br/><em style={{ color: '#C5A880', fontStyle: 'italic', fontWeight: 300 }}>in person.</em>
                </h2>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 17, color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.6, maxWidth: 460, marginBottom: 0,
                  fontWeight: 300,
                  letterSpacing: '0.01em'
                }}>
                  Open every day, 10 AM â€“ 10 PM on Junction Road, Virudhachalam.<br />
                  No appointment needed. Complimentary parking available.
                </p>
              </div>

              <div style={{
                position: 'relative', zIndex: 1,
                display: 'flex', flexDirection: 'column', gap: 16, flex: '0 0 auto',
                width: 320,
                background: 'rgba(255,255,255,0.03)',
                padding: '32px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="btn btn-gold" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center', padding: '16px 0', fontSize: 14, letterSpacing: 0.5 }}>
                  Get Directions
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>directions</span>
                </a>
                <a href="https://wa.me/919789182921?text=Hello%20KGS%20Home%20D%C3%A9cors,%20I%20would%20like%20to%20know%20more%20about%20your%20products." target="_blank" rel="noopener noreferrer"
                  className="btn"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    textDecoration: 'none',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px 0',
                    fontSize: 14,
                    letterSpacing: 0.5,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)'; e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#25D366'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.color = '#fff'; }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <div style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, 
                  color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4,
                  fontWeight: 400, fontFamily: "'Jost', sans-serif", letterSpacing: 0.5
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>call</span>
                  +91 97891 82921
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // ====== TESTIMONIALS ========================================================
    function Testimonials() {
      const [showReviewModal, setShowReviewModal] = React.useState(false);

      const handleSubmitReview = (e) => {
        e.preventDefault();
        setShowReviewModal(false);
        alert("Thank you! Your review has been successfully submitted to the admin portal for approval.");
      };

      return (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="label-tag">Customer Stories</div>
                <h2>What people say once they've moved in.</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowReviewModal(true); }} className="btn btn-gold" style={{ padding: '12px 24px', fontSize: 13 }}>
                  Write a Review <span className="material-symbols-outlined" style={{ fontSize: 16 }}>edit</span>
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="view-all">
                  All Reviews <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="testimonial">
                  <div className="head-row">
                    <div className="avatar">{t.initial}</div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="stars">{'â˜…'.repeat(t.stars)}</div>
                    </div>
                  </div>
                  <div className="quote">"{t.quote}"</div>
                </div>
              ))}
            </div>
          </div>

          {showReviewModal && (
            <div style={{
              position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.6)', backdropFilter: 'blur(4px)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
            }}>
              <div style={{
                background: '#fff', padding: 40, borderRadius: 24, width: '100%', maxWidth: 480,
                position: 'relative', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.2)'
              }}>
                <button onClick={() => setShowReviewModal(false)} style={{
                  position: 'absolute', right: 20, top: 20, background: 'none', border: 'none',
                  cursor: 'pointer', fontSize: 24, color: '#5E5B59'
                }}>Ã—</button>
                <h3 style={{ fontFamily: '"Crimson Pro", serif', fontSize: 28, marginBottom: 8, color: '#1A1A1A' }}>Write a Review</h3>
                <p style={{ fontSize: 14, color: '#5E5B59', marginBottom: 24 }}>Your feedback helps us improve and guides other customers.</p>
                
                <form onSubmit={handleSubmitReview} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#1A1A1A' }}>Your Name</label>
                    <input type="text" required style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: 8, fontFamily: '"Jost", sans-serif', fontSize: 14 }} placeholder="John Doe" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#1A1A1A' }}>Rating</label>
                    <select required style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: 8, fontFamily: '"Jost", sans-serif', fontSize: 14 }}>
                      <option value="5">â˜…â˜…â˜…â˜…â˜… (5 Stars)</option>
                      <option value="4">â˜…â˜…â˜…â˜…â˜† (4 Stars)</option>
                      <option value="3">â˜…â˜…â˜…â˜†â˜† (3 Stars)</option>
                      <option value="2">â˜…â˜…â˜†â˜†â˜† (2 Stars)</option>
                      <option value="1">â˜…â˜†â˜†â˜†â˜† (1 Star)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#1A1A1A' }}>Review</label>
                    <textarea required rows="4" style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: 8, fontFamily: '"Jost", sans-serif', fontSize: 14, resize: 'vertical' }} placeholder="Tell us about your experience..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark" style={{ marginTop: 12, width: '100%' }}>Submit Review</button>
                  <p style={{ fontSize: 11, color: '#5E5B59', textAlign: 'center', marginTop: 12 }}>Reviews are submitted to the admin portal for approval before appearing publicly.</p>
                </form>
              </div>
            </div>
          )}
        </section>
      );
    }

    // ====== INSTAGRAM ============================================================
    function Instagram() {
      return (
        <section className="section" style={{ padding: '24px 0 24px' }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: 0, alignItems: 'center' }}>
              <div>
                <div className="label-tag">Follow Along</div>
                <h2>Follow us @kgs_home_decor</h2>
                <div style={{ fontSize: 13, color: '#5E5B59', marginTop: 6 }}>
                  Real pieces, real rooms, real showroom.
                </div>
              </div>
              <a href="https://instagram.com/kgs_home_decor" target="_blank" rel="noopener noreferrer" className="btn btn-cream" style={{ textDecoration: 'none' }}>
                Open Instagram <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
      );
    }

    // ====== SHOWROOM ============================================================
    function Showroom() {
      return (
        <section style={{ padding: '40px 0 60px' }}>
          <div className="container">
            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="assets/lifestyle/showroom.webp" alt="KGS Showroom" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65)' }} />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.24em', textTransform: 'uppercase', marginBottom: 12, color: 'rgba(255,255,255,0.8)' }}>
                  Virudhachalam
                </div>
                <h2 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, marginBottom: 16 }}>
                  Experience it in person.
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 400, margin: '0 auto', lineHeight: 1.6 }}>
                  Visit our showroom on Junction Road to feel the quality, texture, and scale of our pieces firsthand.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    Object.assign(window, {
      Hero, CategoryGrid, BestSellers, PromoBanner,
      Testimonials, Instagram, Showroom, ProductCard
    });

  

// ===== NEXT SCRIPT BLOCK =====


    /* KGS Home DÃ©cors â€” Inner pages: Shop, ProductDetail, Cart, Checkout, OrderConfirmation, Wishlist, About, Contact */

    // ===== SHARED SUMLINE =======================================================
    function Sumline({ label, value, note, bold }) {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '6px 0' }}>
          <div>
            <div style={{ fontSize: bold ? 14 : 13, fontWeight: bold ? 600 : 400, color: bold ? '#1A1A1A' : '#5E5B59' }}>
              {label}
            </div>
            {note && <div style={{ fontSize: 10, color: '#5E5B59' }}>{note}</div>}
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
      const [page, setPage] = React.useState(1);
      const [sort, setSort] = React.useState('default');

      React.useEffect(() => {
        setPage(1);
      }, [filter, sort]);

      const filtered = React.useMemo(() => {
        let list = filter === 'all'
          ? [...PRODUCTS]
          : PRODUCTS.filter(p =>
            // Match by categorySlug (DB slug) first, then fallback to fuzzy label match
            (p.categorySlug && p.categorySlug === filter) ||
            p.category.toLowerCase().replace(/[^a-z]/g, '').includes(
              filter.toLowerCase().replace(/[^a-z]/g, '')
            )
          );
        if (sort === 'price-asc') list = list.sort((a, b) => a.price - b.price);
        else if (sort === 'price-desc') list = list.sort((a, b) => b.price - a.price);
        else if (sort === 'rating') list = list.sort((a, b) => b.rating - a.rating);
        else if (sort === 'newest') list = list.filter(p => p.badge === 'New').concat(list.filter(p => p.badge !== 'New'));
        else if (sort === 'popular') list = list.sort((a, b) => (b.sold || 0) - (a.sold || 0));
        return list;
      }, [filter, sort]);

      // Use DB category slugs from CATEGORIES array (ordered + labeled)
      // Only show categories that actually have products
      const activeSlugs = new Set(PRODUCTS.map(p => p.categorySlug || p.category));
      const cats = ['all', ...CATEGORIES.filter(cat => activeSlugs.has(cat.id)).map(cat => cat.id)];

      const ITEMS_PER_PAGE = 12;
      const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
      const paginatedProducts = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

      return (
        <div data-screen-label="Shop">
          <section style={{ background: '#F2E8D6', padding: '56px 0 36px', paddingTop: 'calc(56px)' }}>
            <div className="container">
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: '#7A5C1E', marginBottom: 14 }}>
                The Collection
              </div>
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '3rem', lineHeight: 1.05, letterSpacing: '-0.018em', marginBottom: 10 }}>
                Our complete collection.<br /><em style={{ fontStyle: 'italic', color: '#B89657', fontWeight: 400 }}>Find the one that's yours.</em>
              </h1>
              <p style={{ maxWidth: 560, fontSize: 14, color: '#5E5B59', lineHeight: 1.8 }}>
                Everything you see here is in our showroom on Junction Road. Free delivery in Virudhachalam only.
              </p>
            </div>
          </section>

          <section style={{ background: '#fff', padding: '18px 0', borderBottom: '1px solid rgba(197,168,128,0.20)' }}>
            <div className="container">
              <div className="shop-filters-track">
                <span style={{ flexShrink: 0, fontSize: 10.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: '#B89657', marginRight: 8 }}>
                  Explore
                </span>
                {cats.map(c => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    style={{
                      flexShrink: 0,
                      padding: '10px 22px',
                      background: filter === c ? '#1A1A1A' : '#FAF8F4',
                      color: filter === c ? '#fff' : '#1A1A1A',
                      border: '1px solid ' + (filter === c ? '#1A1A1A' : 'rgba(197,168,128,0.25)'),
                      borderRadius: 9999,
                      fontFamily: 'Jost,sans-serif', fontSize: 11, fontWeight: 500,
                      letterSpacing: '.15em', textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 300ms ease',
                    }}>
                    {(() => {
                      if (c === 'all') return 'All (' + PRODUCTS.length + ')';
                      const count = PRODUCTS.filter(p =>
                        (p.categorySlug && p.categorySlug === c) ||
                        p.category.toLowerCase().replace(/[^a-z]/g,'').includes(c.toLowerCase().replace(/[^a-z]/g,''))
                      ).length;
                      const catLabel = CATEGORIES.find(cat => cat.id === c);
                      return (catLabel ? catLabel.label : c) + (count ? ' (' + count + ')' : '');
                    })()}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '40px 0 96px' }}>
            <div className="container">
              {/* Results count + sort */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
                <span style={{ fontSize: 13, color: '#5E5B59' }}>
                  <b style={{ color: '#1A1A1A' }}>{filtered.length}</b> products
                  {filter !== 'all' && <span> in <b style={{ color: '#B89657' }}>{filter}</b></span>}
                </span>
                <select
                  className="sort-select"
                  value={sort}
                  onChange={e => setSort(e.target.value)}>
                  <option value="default">Sort: Featured</option>
                  <option value="popular">Most Popular</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 44, color: '#C5A880' }}>search_off</span>
                  <h3 style={{ marginTop: 12, fontSize: '1.3rem' }}>Nothing here for that filter.</h3>
                  <p style={{ marginBottom: 20 }}>Try a different category or browse everything.</p>
                  <button className="btn btn-dark" onClick={() => setFilter('all')}>Show All</button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 20 }}>
                    {paginatedProducts.map(p => (
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

                  {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 48 }}>
                      <button
                        onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        disabled={page === 1}
                        style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(197,168,128,0.4)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_left</span>
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => {
                        if (num === 1 || num === totalPages || (num >= page - 1 && num <= page + 1)) {
                          return (
                            <button
                              key={num}
                              onClick={() => { setPage(num); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                              style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: page === num ? '#1A1A1A' : 'transparent', color: page === num ? '#fff' : '#1A1A1A', fontFamily: 'Jost,sans-serif', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'all 200ms' }}>
                              {num}
                            </button>
                          );
                        }
                        if (num === page - 2 || num === page + 2) {
                          return <span key={num} style={{ color: '#5E5B59', padding: '0 4px' }}>...</span>;
                        }
                        return null;
                      })}

                      <button
                        onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        disabled={page === totalPages}
                        style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(197,168,128,0.4)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.4 : 1 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      );
    }

    // ===== PRODUCT DETAIL =======================================================
    function ProductDetail({ p, onAdd, onBack, wishlist, onWishToggle }) {
      const [qty, setQty] = React.useState(1);
      const [activeImg, setActiveImg] = React.useState(0);
      if (!p) return null;
      // Build a gallery: use same image multiple times (real data would have multiple angles)
      const gallery = [p.image, p.image, p.image, p.image];

      const FREE_OVER = 5000;
      const lineTotal = p.price * qty;
      const toFree = Math.max(0, FREE_OVER - lineTotal);
      // Match related by categorySlug (exact) then fallback to display label
      const related = PRODUCTS.filter(x =>
        x.id !== p.id && (
          (x.categorySlug && p.categorySlug && x.categorySlug === p.categorySlug) ||
          x.category === p.category
        )
      ).slice(0, 4);
      const moreFromUs = related.length < 4
        ? [...related, ...PRODUCTS.filter(x => x.id !== p.id && !related.includes(x))].slice(0, 4)
        : related;

      return (
        <div data-screen-label={'Product / ' + p.name}>
          <section style={{ background: '#FAF8F4', padding: '18px 0', borderBottom: '1px solid rgba(197,168,128,0.20)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onBack(); }}
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#5E5B59', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                Back to Shop
              </a>
              <div style={{ fontSize: 11.5, color: '#5E5B59', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: '#B89657', fontSize: 14 }}>local_fire_department</span>
                <b style={{ color: '#1A1A1A', fontWeight: 600 }}>{p.sold || 24}</b>
                &nbsp;people picked this up in the last 7 days
              </div>
            </div>
          </section>

          <section style={{ background: '#fff', padding: '56px 0 80px' }}>
            <div className="container pdp-grid">
              <div>
                <div style={{ background: '#F3EBDC', border: '1px solid rgba(197,168,128,0.30)', borderRadius: 18, padding: 48, aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {p.off && (
                    <span style={{ position: 'absolute', top: 18, left: 18, background: '#C97840', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '.16em', padding: '6px 12px', borderRadius: 9999, textTransform: 'uppercase' }}>
                      {p.off}
                    </span>
                  )}
                  <img src={gallery[activeImg]} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'opacity 220ms ease' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 14 }}>
                  {gallery.map((src, idx) => (
                    <div key={idx} onClick={() => setActiveImg(idx)} style={{ aspectRatio: 1, background: '#F3EBDC', borderRadius: 10, overflow: 'hidden', border: idx === activeImg ? '2px solid #1A1A1A' : '1px solid rgba(197,168,128,0.30)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, transition: 'border-color 160ms ease' }}>
                      <img src={src} alt="" loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: '#B89657', marginBottom: 12 }}>
                  {p.category}
                </div>
                <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.4rem', lineHeight: 1.05, letterSpacing: '-0.018em', marginBottom: 16 }}>
                  {p.name}
                </h1>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'rgba(184,150,87,0.10)', borderRadius: 9999 }}>
                    <span style={{ color: '#B89657', letterSpacing: '.14em', fontSize: 13 }}>â˜…â˜…â˜…â˜…â˜…</span>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: '#1A1A1A' }}>{p.rating.toFixed(1)}</span>
                    <span style={{ fontSize: 12, color: '#5E5B59' }}>({p.reviews} reviews)</span>
                  </div>
                  {p.badge && (
                    <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1A1A1A', padding: '6px 14px', border: '1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                      {p.badge}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8 }}>
                  <span style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.6rem', letterSpacing: '-0.01em' }}>
                    {fmtPrice(p.price)}
                  </span>
                  {p.was && (
                    <span style={{ fontSize: 15, color: '#5E5B59', textDecoration: 'line-through' }}>{fmtPrice(p.was)}</span>
                  )}
                  {p.was && (
                    <span style={{ fontSize: 11.5, color: '#C97840', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                      Save {fmtPrice(p.was - p.price)}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 12, color: '#5E5B59', marginBottom: 22 }}>
                  All taxes included Â· Free delivery in Virudhachalam only
                </div>

                {p.stock && p.stock <= 6 && (
                  <div className="pdp-stock">
                    <div className="pdp-stock__bar">
                      <span style={{ width: Math.max(8, (p.stock / 20) * 100) + '%' }} />
                    </div>
                    <div className="pdp-stock__text">
                      <span className="material-symbols-outlined">local_fire_department</span>
                      <b>Only {p.stock} left</b> Â· restocking takes around 3 weeks
                    </div>
                  </div>
                )}

                <p style={{ marginBottom: 28, fontSize: 14.5, lineHeight: 1.8, color: '#5E5B59' }}>
                  Made to last â€” not just to look good in photos. We checked this one ourselves before listing it. If there's a defect when it arrives, we'll replace it, no argument.
                </p>

                <div className="pdp-trust">
                  <div className="pdp-trust__item">
                    <span className="material-symbols-outlined">local_shipping</span>
                    <div>
                      <b>Free delivery</b>
                      <span>In Virudhachalam only</span>
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
                      <span>UPI Â· Cards Â· COD</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, marginBottom: 14, marginTop: 26 }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                    <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 44, height: 50, background: 'none', border: 'none', fontSize: 17, cursor: 'pointer' }}>âˆ’</button>
                    <span style={{ width: 36, textAlign: 'center', fontWeight: 500 }}>{qty}</span>
                    <button onClick={() => setQty(qty + 1)} style={{ width: 44, height: 50, background: 'none', border: 'none', fontSize: 17, cursor: 'pointer' }}>+</button>
                  </div>
                  <button className="btn btn-dark" style={{ flex: 1 }} onClick={() => onAdd(p, qty)}>
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Add to Cart Â· {fmtPrice(lineTotal)}
                  </button>
                </div>
                <button
                  className="btn btn-gold"
                  style={{ width: '100%', background: '#25D366', borderColor: '#25D366' }}
                  onClick={() => window.open('https://wa.me/919789182921?text=Hi, I want to ask about: ' + p.name, '_blank')}>
                  <span className="material-symbols-outlined">chat</span>
                  Ask on WhatsApp Â· We reply fast
                </button>
              </div>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '64px 0 80px', borderTop: '1px solid rgba(197,168,128,0.20)' }}>
            <div className="container">
              <div className="section-head">
                <div>
                  <div className="label-tag">Goes Well With</div>
                  <h2>You might also like</h2>
                </div>
              </div>
              <div className="best-sellers-track">
                {moreFromUs.map(rp => (
                  <ProductCard
                    key={rp.id}
                    p={rp}
                    onAdd={(prod) => onAdd(prod, 1)}
                    onView={() => { }}
                    wishlisted={wishlist && wishlist.includes(rp.id)}
                    onWishToggle={onWishToggle}
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="pdp-sticky">
            <div className="container pdp-sticky-inner">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                <img src={p.image} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', background: '#F3EBDC' }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 15, color: '#1A1A1A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: '#5E5B59', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#B89657' }}>â˜…</span>
                    {p.rating.toFixed(1)} Â· {p.reviews} reviews
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 22, color: '#1A1A1A', lineHeight: 1 }}>
                    {fmtPrice(lineTotal)}
                  </div>
                  {p.was && qty === 1 && (
                    <div style={{ fontSize: 11, color: '#5E5B59', textDecoration: 'line-through' }}>{fmtPrice(p.was)}</div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 34, height: 40, background: 'none', border: 'none', cursor: 'pointer' }}>âˆ’</button>
                  <span style={{ width: 28, textAlign: 'center', fontSize: 13, fontWeight: 500 }}>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} style={{ width: 34, height: 40, background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
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
          <section style={{ background: '#F2E8D6', padding: '48px 0' }}>
            <div className="container">
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.6rem', letterSpacing: '-0.015em' }}>
                Your Cart
              </h1>
              <p style={{ marginTop: 8 }}>
                {items.length === 0
                  ? 'Nothing in here yet.'
                  : items.length + ' item' + (items.length > 1 ? 's' : '') + ' Â· ' + fmtPrice(subtotal) + ' subtotal'}
              </p>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '48px 0 96px' }} className={items.length > 0 ? 'cart-section-bottom' : ''}>
            <div className="container">
              {items.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#C5A880' }}>shopping_bag</span>
                  <h3 style={{ marginTop: 12, fontSize: '1.4rem' }}>Your cart is empty.</h3>
                  <p style={{ marginBottom: 24 }}>Browse the collection and pick a few things you like.</p>
                  <button className="btn btn-dark" onClick={onBack}>Go to Shop</button>
                </div>
              ) : (
                <div className="cart-wrap">
                  <div>
                    <div className="cart-progress">
                      <div className="cart-progress__head">
                        <>
                          <span className="material-symbols-outlined" style={{ color: '#B89657' }}>local_shipping</span>
                          <b>Free delivery</b> Â· in Virudhachalam only
                        </>
                      </div>
                    </div>

                    <div style={{ background: '#fff', border: '1px solid rgba(197,168,128,0.25)', borderRadius: 14, overflow: 'hidden' }}>
                      {items.map((ci, idx) => (
                        <div key={ci.id} className="cart-item-row" style={{ borderBottom: idx < items.length - 1 ? '1px solid rgba(197,168,128,0.20)' : 'none' }}>
                          <div style={{ width: 104, height: 104, background: '#F3EBDC', borderRadius: 10, overflow: 'hidden', padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ci.product.image} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                          </div>
                          <div>
                            <div style={{ fontSize: 9.5, fontWeight: 600, color: '#B89657', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 4 }}>
                              {ci.product.category}
                            </div>
                            <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 17, color: '#1A1A1A', marginBottom: 8 }}>
                              {ci.product.name}
                            </div>
                            <div style={{ fontSize: 11.5, color: '#5E5B59', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                              <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#25D366' }}>check_circle</span>
                              In stock Â· ships within 24 hours
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(26,26,26,0.16)', borderRadius: 9999 }}>
                                <button onClick={() => onChangeQty(ci.id, Math.max(1, ci.qty - 1))} style={{ width: 32, height: 34, background: 'none', border: 'none', cursor: 'pointer' }}>âˆ’</button>
                                <span style={{ width: 28, textAlign: 'center', fontSize: 12.5, fontWeight: 500 }}>{ci.qty}</span>
                                <button onClick={() => onChangeQty(ci.id, ci.qty + 1)} style={{ width: 32, height: 34, background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                              </div>
                              <button onClick={() => onRemove(ci.id)} style={{ background: 'none', border: 'none', color: '#5E5B59', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>
                                Remove
                              </button>
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 20 }}>
                              {fmtPrice(ci.product.price * ci.qty)}
                            </div>
                            {ci.product.was && (
                              <div style={{ fontSize: 12, color: '#5E5B59', textDecoration: 'line-through' }}>
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
                      <div><span className="material-symbols-outlined">payments</span>UPI Â· Cards Â· COD</div>
                    </div>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid rgba(197,168,128,0.25)', borderRadius: 14, padding: 26, position: 'sticky', top: 96 }}>
                    <h3 style={{ fontSize: 20, marginBottom: 18 }}>Order Summary</h3>
                    <Sumline label="Subtotal" value={fmtPrice(subtotal)} />
                    <Sumline
                      label="Delivery"
                      value={delivery === 0 ? 'FREE' : fmtPrice(delivery)}
                      note={delivery === 0 ? 'Ships complimentary' : 'Free over â‚¹5,000'}
                    />
                    <div style={{ background: '#F3EBDC', borderRadius: 10, padding: 12, marginTop: 12, fontSize: 12, color: '#5E5B59', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span className="material-symbols-outlined" style={{ color: '#B89657', fontSize: 18 }}>schedule</span>
                      <span><b style={{ color: '#1A1A1A' }}>3â€“7 days</b> across India. Same-day or next-day in Virudhachalam.</span>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(197,168,128,0.30)', marginTop: 14, paddingTop: 14 }}>
                      <Sumline label="Total" value={fmtPrice(total)} bold />
                    </div>
                    <button className="btn btn-dark" style={{ width: '100%', marginTop: 20 }} onClick={onCheckout}>
                      <span className="material-symbols-outlined">lock</span>
                      Proceed to Checkout
                    </button>
                    <div style={{ fontSize: 11, color: '#5E5B59', textAlign: 'center', marginTop: 12 }}>
                      By placing the order you agree to our{' '}
                      <a href="#" style={{ color: '#1A1A1A', textDecoration: 'underline' }}>Terms</a>
                      {' '}and{' '}
                      <a href="#" style={{ color: '#1A1A1A', textDecoration: 'underline' }}>Return Policy</a>.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Mobile sticky bottom checkout CTA */}
          {items.length > 0 && (
            <div className="cart-mobile-cta">
              <div className="cart-mobile-cta__info">
                <div className="cart-mobile-cta__label">Total</div>
                <div className="cart-mobile-cta__total">{fmtPrice(total)}</div>
              </div>
              <button className="cart-mobile-cta__btn" onClick={onCheckout}>
                Checkout
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </button>
            </div>
          )}
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
        if (!form.name.trim()) e.name = 'Full name is required';
        if (!form.phone.trim()) {
          e.phone = 'Mobile number is required';
        } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
          e.phone = 'Enter a valid 10-digit Indian mobile number';
        }
        if (!form.address.trim()) e.address = 'Delivery address is required';
        if (!form.city.trim()) e.city = 'City is required';
        if (!form.pincode.trim()) {
          e.pincode = 'PIN code is required';
        } else if (!/^\d{6}$/.test(form.pincode.trim())) {
          e.pincode = 'Enter a valid 6-digit PIN code';
        }
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
      const errMsg = (k) => errors[k] ? React.createElement('span', { style: { fontSize: 11, color: '#C0392B', marginTop: 4, display: 'block', letterSpacing: '.02em' } }, errors[k]) : null;

      return (
        <div data-screen-label="Checkout">
          <section style={{ background: '#F2E8D6', padding: '36px 0 28px' }}>
            <div className="container">
              <button
                onClick={onBack}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#5E5B59', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                Back to Cart
              </button>
              {/* Checkout Progress Bar â€” Phase 6 */}
              <div className="checkout-steps" style={{ maxWidth: 400 }}>
                <div className="checkout-step">
                  <div className="checkout-step__dot done">
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check</span>
                  </div>
                  <span className="checkout-step__label">Cart</span>
                </div>
                <div className="checkout-step__line done" />
                <div className="checkout-step">
                  <div className="checkout-step__dot active">2</div>
                  <span className="checkout-step__label active">Delivery</span>
                </div>
                <div className="checkout-step__line" />
                <div className="checkout-step">
                  <div className="checkout-step__dot pending">3</div>
                  <span className="checkout-step__label">Payment</span>
                </div>
              </div>
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 'clamp(1.8rem,4vw,2.6rem)', letterSpacing: '-0.015em', marginTop: 16 }}>
                Almost there.
              </h1>
              <p style={{ marginTop: 6, fontSize: 14 }}>Fill in your address and pick how you'd like to pay.</p>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '48px 0 96px' }}>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="checkout-wrap">
                  {/* Left â€” form */}
                  <div>
                    {/* Delivery section */}
                    <div className="checkout-form-section" style={{ marginBottom: 20 }}>
                      <h3>Delivery details</h3>
                      <div className="form-field">
                        <label>Full name</label>
                        <input
                          className="form-input"
                          aria-invalid={!!errors.name}
                          style={inputStyle('name')}
                          placeholder="Meena Krishnamurthy"
                          value={form.name}
                          onChange={e => update('name', e.target.value)}
                        />
                        {errors.name && <span style={{ fontSize: 11, color: '#C0392B' }}>{errors.name}</span>}
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
                        {errors.phone && <span style={{ fontSize: 11, color: '#C0392B' }}>{errors.phone}</span>}
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
                        {errors.address && <span style={{ fontSize: 11, color: '#C0392B' }}>{errors.address}</span>}
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
                          {errors.city && <span style={{ fontSize: 11, color: '#C0392B' }}>{errors.city}</span>}
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
                        {errors.pincode && <span style={{ fontSize: 11, color: '#C0392B' }}>{errors.pincode}</span>}
                      </div>
                    </div>

                    {/* Payment section */}
                    <div className="checkout-form-section">
                      <h3>How do you want to pay?</h3>
                      {[
                        { id: 'upi', icon: 'payment', label: 'UPI', sub: 'Google Pay, PhonePe, Paytm, or any UPI app' },
                        { id: 'card', icon: 'credit_card', label: 'Card', sub: 'Debit or credit card â€” Visa, Mastercard, Amex' },
                        { id: 'cod', icon: 'local_shipping', label: 'Cash on Delivery', sub: 'Pay when it arrives at your door' },
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
                          <span className="material-symbols-outlined" style={{ color: payment === opt.id ? '#1A1A1A' : '#C5A880', fontSize: 22 }}>{opt.icon}</span>
                          <div>
                            <div className="payment-option-label">{opt.label}</div>
                            <div className="payment-option-sub">{opt.sub}</div>
                          </div>
                        </div>
                      ))}

                      {payment === 'upi' && (
                        <div style={{ marginTop: 18, padding: '20px', background: '#FAF8F4', border: '1px solid rgba(197,168,128,0.25)', borderRadius: 12, textAlign: 'center' }}>
                          <div style={{ width: 140, height: 140, background: '#E4DDD4', borderRadius: 8, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 56, color: '#C5A880' }}>qr_code_2</span>
                          </div>
                          <div style={{ fontSize: 12.5, color: '#5E5B59' }}>Scan with any UPI app</div>
                          <div style={{ fontSize: 11, color: '#8E7449', marginTop: 4, fontWeight: 600 }}>kgs@upi</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right â€” order summary */}
                  <div className="checkout-summary">
                    <h3>Your order</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
                      {items.map(ci => (
                        <div key={ci.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 52, height: 52, background: '#F3EBDC', borderRadius: 8, overflow: 'hidden', flexShrink: 0, padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={ci.product.image} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 14, color: '#1A1A1A', lineHeight: 1.25, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {ci.product.name}
                            </div>
                            <div style={{ fontSize: 11.5, color: '#5E5B59', marginTop: 2 }}>Qty: {ci.qty}</div>
                          </div>
                          <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 15, color: '#1A1A1A', flexShrink: 0 }}>
                            {fmtPrice(ci.product.price * ci.qty)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid rgba(197,168,128,0.25)', paddingTop: 14 }}>
                      <Sumline label="Subtotal" value={fmtPrice(subtotal)} />
                      <Sumline
                        label="Delivery"
                        value={delivery === 0 ? 'FREE' : fmtPrice(delivery)}
                        note={delivery === 0 ? 'Ships free' : 'Free over â‚¹5,000'}
                      />
                      <div style={{ borderTop: '1px solid rgba(197,168,128,0.25)', marginTop: 10, paddingTop: 10 }}>
                        <Sumline label="Total" value={fmtPrice(total)} bold />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-dark" style={{ width: '100%', marginTop: 20, padding: '16px 26px' }}>
                      <span className="material-symbols-outlined">lock</span>
                      Place Order
                    </button>

                    <div className="checkout-trust">
                      <span className="material-symbols-outlined">lock</span>
                      Secure payment
                      <span style={{ color: 'rgba(26,26,26,0.20)' }}>Â·</span>
                      <span className="material-symbols-outlined">local_shipping</span>
                      Free delivery
                      <span style={{ color: 'rgba(26,26,26,0.20)' }}>Â·</span>
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
          <section style={{ background: '#FAF8F4', padding: '64px 0 80px' }}>
            <div className="container">
              <div className="order-confirm-wrap">
                <span className="material-symbols-outlined order-confirm-icon"
                  style={{ fontVariationSettings: '"FILL" 1, "wght" 300' }}>
                  check_circle
                </span>
                <h1>Your order is placed.</h1>
                <div className="order-num">Order #{orderNum}</div>
                <p style={{ fontSize: 15, color: '#5E5B59', lineHeight: 1.85, maxWidth: 500, margin: '0 auto 28px' }}>
                  We'll WhatsApp you the tracking link. It usually ships within 24 hours â€” if there's any delay, we'll let you know first.
                </p>

                {items.length > 0 && (
                  <div style={{ background: '#fff', border: '1px solid rgba(197,168,128,0.25)', borderRadius: 16, padding: 24, maxWidth: 500, margin: '0 auto 32px', textAlign: 'left' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8E7449', marginBottom: 16 }}>
                      What you ordered
                    </div>
                    {items.map(ci => (
                      <div key={ci.id} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 12, borderBottom: '1px solid rgba(197,168,128,0.15)', marginBottom: 12 }}>
                        <div style={{ width: 46, height: 46, background: '#F3EBDC', borderRadius: 8, overflow: 'hidden', flexShrink: 0, padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={ci.product.image} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 14, color: '#1A1A1A' }}>
                            {ci.product.name}
                          </div>
                          <div style={{ fontSize: 11.5, color: '#5E5B59' }}>Qty: {ci.qty}</div>
                        </div>
                        <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 14, color: '#1A1A1A' }}>
                          {fmtPrice(ci.product.price * ci.qty)}
                        </div>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 4 }}>
                      <span style={{ fontWeight: 600, fontSize: 13 }}>Total paid</span>
                      <span style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '1.2rem' }}>{fmtPrice(total)}</span>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-dark" onClick={onKeepShopping}>
                    <span className="material-symbols-outlined">storefront</span>
                    Keep Shopping
                  </button>
                  <a
                    className="btn btn-gold"
                    style={{ background: '#25D366', borderColor: '#25D366', color: '#fff', textDecoration: 'none' }}
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
          <section style={{ background: '#F2E8D6', padding: '56px 0 36px' }}>
            <div className="container">
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.28em', textTransform: 'uppercase', color: '#7A5C1E', marginBottom: 14 }}>
                Saved Items
              </div>
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.8rem', lineHeight: 1.05, letterSpacing: '-0.018em' }}>
                Things you saved.
              </h1>
              {items.length > 0 && (
                <p style={{ marginTop: 8 }}>{items.length} item{items.length !== 1 ? 's' : ''} saved</p>
              )}
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '48px 0 96px' }}>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
                    {items.map(p => (
                      <div key={p.id} style={{ display: 'flex', flexDirection: 'column' }}>
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
          <section style={{ background: '#F2E8D6', padding: '80px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.26em', textTransform: 'uppercase', color: '#7A5C1E', marginBottom: 16 }}>
                Virudhachalam Â· Junction Road
              </div>
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '3rem', lineHeight: 1.08, letterSpacing: '-0.018em', marginBottom: 20 }}>
                Curating the finest pieces,<br />
                <em style={{ fontStyle: 'italic', color: '#B89657', fontWeight: 400 }}>right here at home.</em>
              </h1>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: '#5E5B59' }}>
                KGS Home DÃ©cors started on Junction Road, Virudhachalam. We had a simple vision: to bring premium, high-end furniture and dÃ©cor directly to our community, offering uncompromising quality and timeless design.
              </p>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '72px 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: 4 }}>
                <img src="assets/lifestyle/showroom_interior.webp" alt="KGS showroom interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: '#7A5C1E', marginBottom: 14 }}>
                  Our Story
                </div>
                <h2 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.3rem', lineHeight: 1.1, marginBottom: 22 }}>
                  Built on Junction Road.<br />
                  <em style={{ fontStyle: 'italic', color: '#B89657', fontWeight: 400 }}>Here every day.</em>
                </h2>
                <p style={{ marginBottom: 16, fontSize: 14.5, lineHeight: 1.85, color: '#5E5B59' }}>
                  When we started, we had a small space and a few hundred pieces. We'd travel to pick things ourselves â€” Rajasthan for brass, Pune for ceramics, local artisans for handmade pieces. If we wouldn't put it in our own home, we didn't stock it.
                </p>
                <p style={{ marginBottom: 16, fontSize: 14.5, lineHeight: 1.85, color: '#5E5B59' }}>
                  We have 500+ pieces on the floor at any time, a team that genuinely loves what we sell, and customers who keep coming back. We ship pan-India now, but we still answer the WhatsApp ourselves.
                </p>
                <p style={{ marginBottom: 28, fontSize: 14.5, lineHeight: 1.85, color: '#5E5B59' }}>
                  If you're ever in Virudhachalam, come in. We're open every day from 10 to 10. No appointment needed.
                </p>
                <button className="btn btn-dark" onClick={onShop}>
                  Browse the Collection
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          <section style={{ background: '#F2E8D6', padding: '72px 0' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
                {[
                  { num: '500+', label: 'Pieces in stock', sub: 'Every single one checked before it goes on the floor.' },
                  { num: '5.0â˜…', label: 'On Google', sub: '240 families have left a review. We reply to every one.' },
                  { num: '100%', label: 'Hand-Checked Quality', sub: 'Every piece inspected at our showroom before it reaches you.' },
                  { num: 'Free', label: 'Delivery in Virudhachalam', sub: 'Every order, no minimum.' },
                ].map(card => (
                  <div key={card.num} style={{ background: 'rgba(255,255,255,0.75)', borderRadius: 18, padding: '32px 28px', border: '1px solid rgba(197,168,128,0.30)' }}>
                    <div style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.4rem', color: '#1A1A1A', marginBottom: 6 }}>
                      {card.num}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#1A1A1A', marginBottom: 6 }}>{card.label}</div>
                    <div style={{ fontSize: 12.5, color: '#5E5B59', lineHeight: 1.65 }}>{card.sub}</div>
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
          <section style={{ background: '#F2E8D6', padding: '72px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '.26em', textTransform: 'uppercase', color: '#7A5C1E', marginBottom: 14 }}>
                Say Hello
              </div>
              <h1 style={{ fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: '2.8rem', letterSpacing: '-0.015em', marginBottom: 16 }}>
                Talk to us like a neighbour.
              </h1>
              <p style={{ fontSize: 15, color: '#5E5B59', lineHeight: 1.8 }}>
                No bots. No ticket numbers. We're in the shop every day â€” WhatsApp us, call us, or drop in.
              </p>
            </div>
          </section>

          <section style={{ background: '#FAF8F4', padding: '56px 0 96px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }}>
              <div>
                <h3 style={{ fontFamily: '"Crimson Pro",serif', fontSize: 24, marginBottom: 20 }}>
                  Send us a message
                </h3>
                {sent ? (
                  <div style={{ padding: '28px 24px', background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 16, textAlign: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 44, color: '#25D366', fontVariationSettings: '"FILL" 1', display: 'block', marginBottom: 10 }}>check_circle</span>
                    <h4 style={{ fontFamily: '"Crimson Pro",serif', fontSize: 20, marginBottom: 8 }}>Got it. We'll reply shortly.</h4>
                    <p style={{ fontSize: 13.5, color: '#5E5B59' }}>Usually within the hour during shop hours (10 AM â€“ 10 PM).</p>
                  </div>
                ) : (
                  <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#5E5B59' }}>Your name</span>
                      <input
                        placeholder="Meena R."
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        required
                        style={{ padding: '12px 18px', border: '1px solid rgba(197,168,128,0.35)', borderRadius: 10, fontFamily: 'Jost,sans-serif', fontSize: 14, background: '#fff', outline: 'none' }}
                      />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#5E5B59' }}>Phone or WhatsApp</span>
                      <input
                        placeholder="+91 98765 43210"
                        type="tel"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        required
                        style={{ padding: '12px 18px', border: '1px solid rgba(197,168,128,0.35)', borderRadius: 10, fontFamily: 'Jost,sans-serif', fontSize: 14, background: '#fff', outline: 'none' }}
                      />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#5E5B59' }}>What do you need?</span>
                      <textarea
                        rows="5"
                        placeholder="I'm looking for a 3-seater sofa that fits a 10-foot wall..."
                        value={form.message}
                        onChange={e => update('message', e.target.value)}
                        required
                        style={{ padding: '12px 18px', border: '1px solid rgba(197,168,128,0.35)', borderRadius: 10, fontFamily: 'Jost,sans-serif', fontSize: 14, background: '#fff', outline: 'none', resize: 'vertical' }}
                      />
                    </label>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <button type="submit" className="btn btn-dark">Send Message</button>
                      <a
                        className="btn btn-gold"
                        style={{ background: '#25D366', borderColor: '#25D366', color: '#fff', textDecoration: 'none' }}
                        href="https://wa.me/919789182921">
                        <span className="material-symbols-outlined">chat</span>
                        WhatsApp Instead
                      </a>
                    </div>
                  </form>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: 'location_on', title: 'Find Us', body: '185/G Junction Road, Virudhachalam, Tamil Nadu 606001' },
                  { icon: 'schedule', title: 'Hours', body: 'Every day Â· 10:00 AM â€“ 10:00 PM. Free parking out front.' },
                  { icon: 'call', title: 'Call', body: '+91 97891 82921' },
                  { icon: 'chat', title: 'WhatsApp', body: 'Send a message and we\'ll reply â€” usually within the hour.' },
                ].map(card => (
                  <div key={card.title} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: '#fff', border: '1px solid rgba(197,168,128,0.25)', borderRadius: 14 }}>
                    <span className="material-symbols-outlined" style={{ color: '#C5A880', fontSize: 22, flexShrink: 0, marginTop: 2 }}>
                      {card.icon}
                    </span>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#1A1A1A', marginBottom: 5 }}>
                        {card.title}
                      </div>
                      <div style={{ fontSize: 13.5, color: '#5E5B59', lineHeight: 1.65 }}>{card.body}</div>
                    </div>
                  </div>
                ))}
                <div style={{ height: 220, background: 'url(assets/lifestyle/showroom_interior.webp) center/cover', borderRadius: 14 }} />
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

    // ===== SEARCH DRAWER ========================================================
    function SearchDrawer({ open, onClose, onView }) {
      const [query, setQuery] = React.useState('');
      const inputRef = React.useRef(null);

      React.useEffect(() => {
        if (open) {
          setQuery('');
          setTimeout(() => inputRef.current && inputRef.current.focus(), 360);
        }
      }, [open]);

      const results = React.useMemo(() => {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        return PRODUCTS.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.categorySlug && p.categorySlug.includes(q))
        ).slice(0, 12);
      }, [query]);

      // Popular tags = actual category labels from DB
      const popular = CATEGORIES.length > 0
        ? CATEGORIES.map(cat => cat.label)
        : ['Wall DÃ©cor', 'DÃ©cor', 'Vases', 'Furniture', 'Gifts', 'Lighting'];

      return (
        <div className={'search-overlay' + (open ? ' open' : '')}>
          <div className="search-overlay__bg" onClick={onClose} />
          <div className="search-panel" data-lenis-prevent="true">
            <div className="container">
              <div className="search-input-wrap">
                <span className="material-symbols-outlined">search</span>
                <input
                  ref={inputRef}
                  className="search-input"
                  placeholder="Search products, categoriesâ€¦"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Escape' && onClose()}
                />
                {query && (
                  <button className="search-clear" onClick={() => setQuery('')}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                  </button>
                )}
                <button className="search-clear" onClick={onClose} style={{ marginLeft: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#5E5B59' }}>Cancel</span>
                </button>
              </div>

              {query.trim() === '' ? (
                <div className="search-popular">
                  <div className="search-popular__label">Popular Searches</div>
                  <div className="search-popular__tags">
                    {popular.map(tag => (
                      <button key={tag} className="search-tag" onClick={() => setQuery(tag)}>{tag}</button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="search-empty">
                  <span className="material-symbols-outlined" style={{ fontSize: 36, color: '#C5A880', display: 'block', marginBottom: 10 }}>search_off</span>
                  No results for "<b>{query}</b>"
                  <div style={{ marginTop: 8, fontSize: 12.5, color: '#8E7449' }}>Try a different keyword or browse categories</div>
                </div>
              ) : (
                <div className="search-results" data-lenis-prevent="true" onWheel={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()}>
                  {results.map(p => (
                    <div key={p.id} className="search-result-item" onClick={() => { onView(p); onClose(); }}>
                      <div className="search-result-img">
                        <img src={p.image} alt={p.name} loading="lazy" />
                      </div>
                      <div>
                        <div className="search-result-cat">{p.category}</div>
                        <div className="search-result-name">{p.name}</div>
                      </div>
                      <div className="search-result-price">{fmtPrice(p.price)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // ===== MOBILE BOTTOM NAVIGATION =============================================
    function MobileBottomNav({ route, setRoute, cartCount, onSearch }) {
      const items = [
        { id: 'home',     icon: 'home',         label: 'Home'   },
        { id: 'search',   icon: 'search',       label: 'Search' },
        { id: 'wishlist', icon: 'favorite',     label: 'Saved'  },
        { id: 'cart',     icon: 'shopping_bag', label: 'Cart'   },
      ];
      return (
        <nav className="mobile-bottom-nav" aria-label="Main navigation">
          {items.map(it => (
            <button
              key={it.id}
              className={'mobile-bottom-nav__item' + (route === it.id ? ' active' : '')}
              onClick={() => it.id === 'search' ? onSearch() : setRoute(it.id)}
              aria-label={it.label}>
              <span className="material-symbols-outlined">{it.icon}</span>
              {it.id === 'cart' && cartCount > 0 && (
                <span className="mobile-bottom-nav__pip">{cartCount > 9 ? '9+' : cartCount}</span>
              )}
              <span>{it.label}</span>
            </button>
          ))}
        </nav>
      );
    }

    Object.assign(window, { SearchDrawer, MobileBottomNav });

  

// ===== NEXT SCRIPT BLOCK =====


    /* KGS Home DÃ©cors â€” App root: routing + global state */

    function Toast({ msg, show }) {
      return (
        <div className={'toast ' + (show ? 'toast--in' : 'toast--out')}>
          <span
            className="material-symbols-outlined"
            style={{ color: '#25D366', fontVariationSettings: '"FILL" 1' }}>
            check_circle
          </span>
          <span>{msg}</span>
        </div>
      );
    }

    function App() {
      const [route, setRoute] = React.useState('home');
      const [filter, setFilter] = React.useState('all');
      const [cart, setCart] = React.useState(() => {
        try { return JSON.parse(localStorage.getItem('kgs_cart') || '[]'); } catch { return []; }
      });
      const [wishlist, setWish] = React.useState(() => {
        try { return JSON.parse(localStorage.getItem('kgs_wish') || '[]'); } catch { return []; }
      });
      const [viewing, setView] = React.useState(null);
      const [toast, setToast] = React.useState({ msg: '', show: false });
      // Preserve cart through checkout so confirmation can show it
      const [lastCart, setLastCart] = React.useState([]);
      // Search state
      const [searchOpen, setSearchOpen] = React.useState(false);
      // Supabase live products (replaces hardcoded PRODUCTS after fetch)
      const [productsReady, setProductsReady] = React.useState(false);
      const [productsError, setProductsError] = React.useState(false);
      const [, _forceUpdate] = React.useReducer(x => x + 1, 0);

      React.useEffect(() => {
        if (typeof window.supabase === 'undefined') {
          setProductsReady(true); // use fallback silently
          return;
        }
        fetchAllProductsFromSupabase()
          .then(live => {
            if (live && live.length > 0) {
              PRODUCTS = live;
              // Update CATEGORIES to only include cats with actual products
              // Keep categories that have live products (match on slug)
              const liveSlugs = new Set(live.map(p => p.categorySlug));
              CATEGORIES = CATEGORIES.filter(cat => liveSlugs.has(cat.id));
            }
            // Clean up cart items whose IDs no longer exist
            setCart(prev => prev.filter(ci => PRODUCTS.some(p => p.id === ci.id)));
            setProductsReady(true);
            _forceUpdate();
          })
          .catch(err => {
            console.warn('[KGS] Supabase fetch failed, using local data:', err.message);
            setProductsReady(true);
            setProductsError(true);
          });
      }, []);

      // â”€â”€â”€ GSAP Animation System â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // Skills: gsap-core Â· gsap-timeline Â· gsap-scrolltrigger Â· gsap-react
      //         gsap-performance Â· gsap-plugins Â· gsap-utils Â· gsap-frameworks
      React.useEffect(() => {
        if (typeof gsap === 'undefined') return;

        // Kill all existing ScrollTriggers when route changes (gsap-react cleanup)
        ScrollTrigger.getAll().forEach(t => t.kill()); setTimeout(() => ScrollTrigger.refresh(), 500); setTimeout(() => ScrollTrigger.refresh(), 2000);

        if (route !== 'home') return;

        let ctx;
        const timer = setTimeout(() => {
          ctx = gsap.context(() => {

            // â”€â”€ 1. Hero Entrance Timeline (gsap-core + gsap-timeline) â”€â”€â”€â”€â”€â”€
            // Performance: only transform + opacity (gsap-performance rule)
            const heroEl = document.querySelector('.hero');
            if (heroEl) {
              const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
              tl.fromTo('.hero-eyebrow',
                  { y: 22 },
                  { y: 0, opacity: 1, duration: 0.55 })
                .fromTo('.hero h1',
                  { y: 38 },
                  { y: 0, opacity: 1, duration: 0.85, ease: 'power4.out' }, '-=0.25')
                .fromTo('.hero-sub',
                  { y: 22 },
                  { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
                .fromTo('.hero-ctas .btn',
                  { y: 20 },
                  { y: 0, opacity: 1, stagger: 0.13, duration: 0.5 }, '-=0.4')
                .fromTo('.hero-stats',
                  { y: 16 },
                  { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
                .fromTo('.hero-slides-indicator',
                  { x: -12 },
                  { x: 0, opacity: 1, duration: 0.5 }, '-=0.6')
                // Hero photo scales in â€” gsap-timeline position param
                .fromTo('.hero-photo',
                  { scale: 1.06 },
                  { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' }, 0.1)
                // Floating chip pops in last
                .fromTo('.hero-floating-chip, .hero-delivery-chip',
                  { scale: 0.88, opacity: 1, y: 10 },
                  { scale: 1, opacity: 1, y: 0, stagger: 0.1, duration: 0.55, ease: 'back.out(1.6)' }, '-=0.5');
            }

            // â”€â”€ 2. Trust Strip (gsap-scrolltrigger stagger) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const trustStrip = document.querySelector('.trust-strip');
            if (trustStrip) {
              gsap.fromTo('.trust-item',
                { y: 28 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.6,
                  scrollTrigger: { trigger: trustStrip, start: 'top 88%', once: true }
                }
              );
            }

            // â”€â”€ 3. Section headings â€” staggered reveal (gsap-scrolltrigger) â”€
            document.querySelectorAll('.section-head').forEach(el => {
              gsap.fromTo(el,
                { y: 32 },
                { y: 0, opacity: 1, duration: 0.7,
                  scrollTrigger: { trigger: el, start: 'top 86%', once: true }
                }
              );
            });

            // â”€â”€ 4. Best Sellers cards â€” stagger (gsap-scrolltrigger) â”€â”€â”€â”€â”€â”€
            const bsTrack = document.querySelector('.best-sellers-track');
            if (bsTrack) {
              gsap.fromTo('.best-sellers-track .prod-card',
                { y: 44 },
                { y: 0, opacity: 1, stagger: 0.09, duration: 0.65,
                  scrollTrigger: { trigger: bsTrack, start: 'top 82%', once: true }
                }
              );
            }

            // â”€â”€ 5. Category grid â€” scale+fade stagger (gsap-utils.toArray) â”€
            const catGrid = document.querySelector('.cat-grid');
            if (catGrid) {
              // gsap-utils: toArray for safe NodeList handling
              const cats = gsap.utils.toArray('.cat-card');
              gsap.fromTo(cats,
                { y: 30, opacity: 1, scale: 0.94 },
                { y: 0, opacity: 1, scale: 1, stagger: 0.055, duration: 0.55, ease: 'power2.out',
                  scrollTrigger: { trigger: catGrid, start: 'top 83%', once: true }
                }
              );
            }

            // â”€â”€ 6. Why-KGS cards â€” cascade (gsap-timeline + scrolltrigger) â”€
            const whyGrid = document.querySelector('.why-grid');
            if (whyGrid) {
              gsap.fromTo('.why-card',
                { y: 40 },
                { y: 0, opacity: 1, stagger: 0.11, duration: 0.65,
                  scrollTrigger: { trigger: whyGrid, start: 'top 82%', once: true }
                }
              );
            }

            // â”€â”€ 7. Promo/offer banner parallax scrub (gsap-scrolltrigger) â”€â”€
            const promoPhoto = document.querySelector('.promo-photo img');
            if (promoPhoto) {
              gsap.to(promoPhoto, {
                yPercent: -14,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.promo',
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.8  // gsap-scrolltrigger: scrub for buttery parallax
                }
              });
            }

            // â”€â”€ 8. Promo copy entrance (gsap-timeline) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const promoSection = document.querySelector('.promo-copy');
            if (promoSection) {
              const promoTl = gsap.timeline({
                scrollTrigger: { trigger: '.promo', start: 'top 78%', once: true }
              });
              promoTl
                .fromTo('.promo-eyebrow', { x: -20 }, { x: 0, opacity: 1, duration: 0.5 })
                .fromTo('.promo-headline', { y: 30 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out' }, '-=0.2')
                .fromTo('.promo-cta-row .btn, .promo-cta-row a', { y: 18 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.3');
            }

            // â”€â”€ 9. Testimonials stagger (gsap-scrolltrigger) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const testimonialSection = document.querySelector('.testimonials-wrap, [class*="testimonial"]');
            if (testimonialSection) {
              gsap.fromTo('.testimonial',
                { y: 36 },
                { y: 0, opacity: 1, stagger: 0.14, duration: 0.65,
                  scrollTrigger: { trigger: testimonialSection, start: 'top 82%', once: true }
                }
              );
            }

            // â”€â”€ 10. Instagram grid â€” fast stagger (gsap-utils) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const igGrid = document.querySelector('.ig-grid');
            if (igGrid) {
              const tiles = gsap.utils.toArray('.ig-tile');
              gsap.fromTo(tiles,
                { opacity: 1, scale: 0.92 },
                { opacity: 1, scale: 1, stagger: 0.04, duration: 0.45, ease: 'power2.out',
                  scrollTrigger: { trigger: igGrid, start: 'top 85%', once: true }
                }
              );
            }

            // â”€â”€ 11. Newsletter section (gsap-scrolltrigger) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const newsletter = document.querySelector('.newsletter');
            if (newsletter) {
              gsap.fromTo(newsletter,
                { y: 30, opacity: 1, scale: 0.98 },
                { y: 0, opacity: 1, scale: 1, duration: 0.75,
                  scrollTrigger: { trigger: newsletter, start: 'top 85%', once: true }
                }
              );
            }

            // â”€â”€ 12. Footer entrance (gsap-scrolltrigger) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            const footer = document.querySelector('.footer');
            if (footer) {
              gsap.fromTo(footer,
                { y: 24 },
                { y: 0, opacity: 1, duration: 0.8,
                  scrollTrigger: { trigger: footer, start: 'top 92%', once: true }
                }
              );
            }


          }); // end gsap.context
        }, 250); // wait for React render

        return () => {
          clearTimeout(timer);
          if (ctx) ctx.revert(); // gsap-react: full cleanup including ScrollTriggers
        };
      }, [route]);

      const cartCount = cart.reduce((s, c) => s + c.qty, 0);
      React.useEffect(() => {
        try { localStorage.setItem('kgs_cart', JSON.stringify(cart)); } catch {}
      }, [cart]);
      React.useEffect(() => {
        try { localStorage.setItem('kgs_wish', JSON.stringify(wishlist)); } catch {}
      }, [wishlist]);

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
            <div className="reveal"><TrustStrip /></div>
            <div className="reveal"><CategoryGrid onClick={(slug) => { if (slug) setFilter(slug); setRoute('shop'); window.scrollTo(0,0); }} /></div>
            <div className="reveal"><BestSellers
              key={'bs-' + productsReady}
              onAdd={handleAdd}
              onView={handleView}
              wishlist={wishlist}
              onWishToggle={handleWishToggle}
              onShop={() => setRoute('shop')}
            /></div>
            <div className="reveal"><PromoBanner onShop={() => setRoute('shop')} /></div>
            <div className="reveal"><Testimonials /></div>
            <div className="reveal"><Instagram /></div>
            <div className="reveal"><Showroom /></div>
          </div>
        );
      } else if (route === 'shop') {
        body = (
          <ShopPage
            key={'shop-' + productsReady}
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
            wishlist={wishlist}
            onWishToggle={handleWishToggle}
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
      } else if (route === 'account') {
        window.location.replace('account.html');
        body = <div style={{ minHeight: '60vh' }} />;
      } else if (route === 'login') {
        body = <AccountLoginPage onRegister={() => setRoute('register')} onLogin={() => setRoute('account')} />;
      } else if (route === 'register') {
        body = <AccountRegisterPage onLogin={() => setRoute('login')} onRegister={() => setRoute('account')} />;
      } else if (route === 'privacy') {
        body = <PrivacyPolicyPage />;
      } else if (route === 'terms') {
        body = <TermsPage />;
      } else if (route === 'returns') {
        body = <ReturnPolicyPage />;
      } else if (route === 'shipping') {
        body = <ShippingPolicyPage />;
      } else {
        body = <div style={{ minHeight: '60vh' }} />;
      }

      return (
        <div>
          <Announcement />
          <Nav
            route={route}
            setRoute={setRoute}
            cart={cartCount}
            wishlist={wishlist.length}
            onSearch={() => setSearchOpen(true)}
          />
          <main className="page-body">{body}</main>
          <Footer setRoute={setRoute} />
          <WAFloat />
          <Toast msg={toast.msg} show={toast.show} />
          {/* Search drawer â€” Phase 5 */}
          <SearchDrawer
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
            onView={(p) => { handleView(p); }}
          />
          {/* Mobile bottom navigation â€” Phase 2 */}
          <MobileBottomNav
            route={route}
            setRoute={setRoute}
            cartCount={cartCount}
            onSearch={() => setSearchOpen(true)}
          />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);

  