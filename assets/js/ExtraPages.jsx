// Extra Pages added to the KGS Home Decor React App

function AccountLoginPage({ onRegister, onLogin }) {
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
            <a href="#" style={{ fontSize: '12px', color: '#B89657', fontWeight: 500 }}>Forgot?</a>
          </div>
          <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif' }} />
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
      <p style={{ marginBottom: '24px' }}>At KGS Home Décor, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
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
      <p style={{ marginBottom: '24px' }}>Welcome to KGS Home Décor. By accessing our website, you agree to be bound by these Terms and Conditions.</p>
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
      </ul>
      <p style={{ marginBottom: '24px' }}>Shipping is free for all orders across Tamil Nadu.</p>
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
