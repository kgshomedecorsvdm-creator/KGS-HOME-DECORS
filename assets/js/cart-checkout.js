document.addEventListener('DOMContentLoaded', () => {
  const cartHeader = document.getElementById('cart-header');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const emptyCartMsg = document.getElementById('empty-cart-msg');
  const checkoutFormContainer = document.getElementById('checkout-form-container');
  
  const btnCheckout = document.getElementById('btn-checkout');
  const btnBackToCart = document.getElementById('btn-back-to-cart');
  const checkoutForm = document.getElementById('checkout-form');
  
  // Payment toggles
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  const upiDetails = document.getElementById('upi-details');
  
  // Summary elements
  const elSubtotal = document.getElementById('summary-subtotal');
  const elDiscount = document.getElementById('summary-discount');
  const elShipping = document.getElementById('summary-shipping');
  const elTotal = document.getElementById('summary-total');
  const progressText = document.querySelector('.delivery-progress__text');
  const progressBar = document.querySelector('.delivery-progress__bar span');
  const progressCard = document.getElementById('delivery-progress-card');

  let currentView = 'cart'; // 'cart' or 'checkout'
  const FREE_SHIPPING_THRESHOLD = 5000;

  function renderCart() {
    const items = store.getCart();
    
    if (items.length === 0) {
      cartHeader.style.display = 'none';
      cartItemsContainer.style.display = 'none';
      checkoutFormContainer.style.display = 'none';
      emptyCartMsg.style.display = 'block';
      btnCheckout.disabled = true;
      btnCheckout.style.opacity = '0.5';
      if (progressCard) progressCard.style.display = 'none';

      const subtotalLabel = document.getElementById('subtotal-label');
      if (subtotalLabel) subtotalLabel.textContent = 'Subtotal';
      if (elSubtotal) elSubtotal.textContent = '₹0';
      if (elDiscount) elDiscount.textContent = '—';
      if (elShipping) elShipping.textContent = '₹0';
      if (elTotal) elTotal.textContent = '₹0';
      return;
    }
    
    emptyCartMsg.style.display = 'none';
    if (currentView === 'cart') {
      cartHeader.style.display = 'flex';
      cartItemsContainer.style.display = 'block';
    }
    btnCheckout.disabled = false;
    btnCheckout.style.opacity = '1';

    // Build items HTML
    let html = '';
    let subtotal = 0;
    let totalOriginalPrice = 0;

    items.forEach(item => {
      const p = store.getProductById(item.id);
      if (!p) return;
      
      const linePrice = p.price * item.quantity;
      const lineOriginalPrice = (p.original_price || p.price) * item.quantity;
      subtotal += linePrice;
      totalOriginalPrice += lineOriginalPrice;

      html += `
        <div class="cart-item">
          <div class="cart-item__img">
            <img src="${p.image_url}" alt="${p.name}">
          </div>
          <div class="cart-item__info">
            <div class="cart-item__cat">${p.category}</div>
            <a href="product-detail.html?id=${p.id}" class="cart-item__name">${p.name}</a>
            <div class="cart-item__actions">
              <div class="cart-qty">
                <button onclick="updateQty('${p.id}', ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateQty('${p.id}', ${item.quantity + 1})">+</button>
              </div>
              <button class="cart-item__remove" onclick="removeItem('${p.id}')">Remove</button>
            </div>
          </div>
          <div class="cart-item__price">
            <div class="now">₹${linePrice.toLocaleString('en-IN')}</div>
            ${p.original_price > p.price ? `<div class="was">₹${lineOriginalPrice.toLocaleString('en-IN')}</div>` : ''}
          </div>
        </div>
      `;
    });
    cartItemsContainer.innerHTML = html;

    // Calculate Summary
    const discount = totalOriginalPrice - subtotal;
    let shipping = 0;
    
    progressCard.style.display = 'block';
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressText.innerHTML = `<span><b style="color:#25D366">Free Delivery</b> unlocked!</span>`;
      progressBar.style.width = '100%';
      shipping = 0;
    } else {
      const away = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      progressText.innerHTML = `<span>You are <b>₹${away.toLocaleString('en-IN')}</b> away from <b>Free Delivery</b>!</span>`;
      progressBar.style.width = percent + '%';
      shipping = 500;
    }

    const total = subtotal + shipping;

    // Update DOM
    const subtotalLabel = document.getElementById('subtotal-label');
    if (subtotalLabel) subtotalLabel.textContent = `Subtotal (${items.length} item${items.length !== 1 ? 's' : ''})`;
    elSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    elDiscount.textContent = discount > 0 ? `-₹${discount.toLocaleString('en-IN')}` : '₹0';
    elShipping.textContent = shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`;
    elTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  // Expose global methods for inline handlers
  window.updateQty = (id, newQty) => {
    if (newQty < 1) {
      store.removeFromCart(id);
    } else {
      store.updateCartQuantity(id, newQty);
    }
    renderCart();
  };
  
  window.removeItem = (id) => {
    store.removeFromCart(id);
    renderCart();
  };

  // View toggling
  function showCheckout() {
    currentView = 'checkout';
    cartHeader.style.display = 'none';
    cartItemsContainer.style.display = 'none';
    checkoutFormContainer.style.display = 'block';
    
    btnCheckout.innerHTML = 'Place Order <span class="material-symbols-outlined">lock</span>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showCart() {
    currentView = 'cart';
    cartHeader.style.display = 'flex';
    cartItemsContainer.style.display = 'block';
    checkoutFormContainer.style.display = 'none';
    
    btnCheckout.innerHTML = 'Proceed to Checkout <span class="material-symbols-outlined">arrow_forward</span>';
  }

  // Events
  btnCheckout.addEventListener('click', (e) => {
    if (currentView === 'cart') {
      // Move to checkout
      if (store.getCart().length > 0) {
        showCheckout();
      }
    } else {
      // Validate and Place Order
      if (checkoutForm.checkValidity()) {
        const formData = new FormData(checkoutForm);
        // Simulate Order Place
        btnCheckout.innerHTML = 'Processing...';
        btnCheckout.disabled = true;
        
        setTimeout(() => {
          store.clearCart();
          window.location.href = 'order-confirmation.html';
        }, 1200);
      } else {
        checkoutForm.reportValidity();
      }
    }
  });

  btnBackToCart.addEventListener('click', (e) => {
    e.preventDefault();
    showCart();
  });

  // Payment Option toggling
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'upi') {
        upiDetails.style.height = upiDetails.scrollHeight + 'px';
        upiDetails.style.opacity = '1';
        upiDetails.style.marginTop = '0px';
        upiDetails.style.marginBottom = '8px';
        upiDetails.style.padding = '20px';
      } else {
        upiDetails.style.height = '0px';
        upiDetails.style.opacity = '0';
        upiDetails.style.marginTop = '0px';
        upiDetails.style.marginBottom = '0px';
        upiDetails.style.padding = '0px';
        upiDetails.style.overflow = 'hidden';
      }
    });
  });

  // Initial render
  // Simulate fetching data from store (which is sync with localStorage)
  renderCart();
});
