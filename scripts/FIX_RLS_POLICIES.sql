-- ================================================================
-- KGS HOME DÉCORS — Complete RLS Fix (v3 — verified schema)
-- Run in Supabase SQL Editor. Safe to run multiple times.
-- Schema facts:
--   customers.id = auth.uid() (direct FK to auth.users)
--   admin_users has only: id, email, created_at
--   admin check = auth.jwt() ->> 'email' IN (SELECT email FROM admin_users)
-- ================================================================

-- ── 1. PRODUCTS ──────────────────────────────────────────────────
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Products are viewable by everyone" ON products;
DROP POLICY IF EXISTS "Public can view active products" ON products;
DROP POLICY IF EXISTS "Admins can manage products" ON products;
DROP POLICY IF EXISTS "Admins can insert products" ON products;
DROP POLICY IF EXISTS "Admins can update products" ON products;
DROP POLICY IF EXISTS "Admins can delete products" ON products;
DROP POLICY IF EXISTS "Admins can see all products" ON products;

CREATE POLICY "Public can view active products"
  ON products FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Admins can insert products"
  ON products FOR INSERT
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY "Admins can update products"
  ON products FOR UPDATE
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY "Admins can delete products"
  ON products FOR DELETE
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY "Admins can see all products"
  ON products FOR SELECT
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

-- ── 2. CUSTOMERS ─────────────────────────────────────────────────
-- customers.id IS the auth.uid() — no separate user_id column
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON customers;
DROP POLICY IF EXISTS "Users can view their own profile" ON customers;
DROP POLICY IF EXISTS "Users can update own profile" ON customers;
DROP POLICY IF EXISTS "Users can update their own profile" ON customers;
DROP POLICY IF EXISTS "Users can insert own profile" ON customers;
DROP POLICY IF EXISTS "Users can insert their own profile" ON customers;
DROP POLICY IF EXISTS "Admins can view all customers" ON customers;

CREATE POLICY "Users can read own profile"
  ON customers FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON customers FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON customers FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all customers"
  ON customers FOR SELECT
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

-- ── 3. ORDERS ────────────────────────────────────────────────────
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own orders" ON orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON orders;
DROP POLICY IF EXISTS "Users can insert orders" ON orders;
DROP POLICY IF EXISTS "Users can create orders" ON orders;
DROP POLICY IF EXISTS "Guest can insert orders" ON orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can update orders" ON orders;
DROP POLICY IF EXISTS "Admins can manage orders" ON orders;
DROP POLICY IF EXISTS "Public can read orders by order_number" ON orders;

-- Logged-in users see their own orders
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  USING (auth.uid() = customer_id);

-- Logged-in + guest can insert orders
CREATE POLICY "Users can create orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() = customer_id OR customer_id IS NULL);

-- Order tracking: anyone can look up orders (needed for tracking page)
CREATE POLICY "Public can read orders by order_number"
  ON orders FOR SELECT
  USING (true);

-- Admins
CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

CREATE POLICY "Admins can update orders"
  ON orders FOR UPDATE
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

-- ── 4. ORDER_ITEMS ───────────────────────────────────────────────
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own order items" ON order_items;
DROP POLICY IF EXISTS "Users can view their order items" ON order_items;
DROP POLICY IF EXISTS "Users can insert order items" ON order_items;
DROP POLICY IF EXISTS "Users can create order items" ON order_items;
DROP POLICY IF EXISTS "Admins can view all order items" ON order_items;
DROP POLICY IF EXISTS "Admins can manage order items" ON order_items;

CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  USING (
    order_id IN (
      SELECT id FROM orders
      WHERE customer_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items"
  ON order_items FOR INSERT
  WITH CHECK (
    order_id IN (
      SELECT id FROM orders
      WHERE customer_id = auth.uid() OR customer_id IS NULL
    )
  );

CREATE POLICY "Admins can view all order items"
  ON order_items FOR SELECT
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM admin_users));

-- ── 5. ADDRESSES ─────────────────────────────────────────────────
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own addresses" ON addresses;
DROP POLICY IF EXISTS "Users can view own addresses" ON addresses;
DROP POLICY IF EXISTS "Users can insert own addresses" ON addresses;
DROP POLICY IF EXISTS "Users can update own addresses" ON addresses;
DROP POLICY IF EXISTS "Users can delete own addresses" ON addresses;

CREATE POLICY "Users can manage own addresses"
  ON addresses FOR ALL
  USING (auth.uid() = customer_id);

-- ── 6. WISHLIST ──────────────────────────────────────────────────
ALTER TABLE wishlist_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own wishlist" ON wishlist_items;

CREATE POLICY "Users can manage own wishlist"
  ON wishlist_items FOR ALL
  USING (auth.uid() = customer_id);

-- ── 7. CART ──────────────────────────────────────────────────────
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage own cart" ON cart_items;

CREATE POLICY "Users can manage own cart"
  ON cart_items FOR ALL
  USING (auth.uid() = customer_id);

-- ── 8. STORE_REVIEWS ─────────────────────────────────────────────
ALTER TABLE store_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Approved reviews are viewable by everyone" ON store_reviews;
DROP POLICY IF EXISTS "Anyone can submit a review" ON store_reviews;

CREATE POLICY "Approved reviews are viewable by everyone"
  ON store_reviews FOR SELECT
  USING (is_approved = TRUE);

CREATE POLICY "Anyone can submit a review"
  ON store_reviews FOR INSERT
  WITH CHECK (true);

-- ── 9. ADMIN_USERS — RLS intentionally OFF ───────────────────────
ALTER TABLE admin_users DISABLE ROW LEVEL SECURITY;

-- ── VERIFY ───────────────────────────────────────────────────────
SELECT
  tablename,
  rowsecurity AS rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'products','customers','orders','order_items',
    'addresses','wishlist_items','cart_items',
    'store_reviews','admin_users'
  )
ORDER BY tablename;
