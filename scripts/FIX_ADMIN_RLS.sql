-- ================================================================
-- KGS HOME DÉCORS — Fix Admin RLS (CRITICAL SECURITY FIX)
-- Run once in Supabase SQL Editor: Dashboard → SQL Editor → New Query
-- Safe to run multiple times.
-- ================================================================

-- ── STEP 1: Create is_admin() — SECURITY DEFINER bypasses RLS ───
-- This function can safely read admin_users even after RLS is enabled.
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE email = auth.jwt() ->> 'email'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ── STEP 2: Recreate all admin policies using is_admin() ─────────

-- Products
DROP POLICY IF EXISTS "Admins can insert products" ON products;
DROP POLICY IF EXISTS "Admins can update products" ON products;
DROP POLICY IF EXISTS "Admins can delete products" ON products;
DROP POLICY IF EXISTS "Admins can see all products" ON products;

CREATE POLICY "Admins can insert products"
  ON products FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update products"
  ON products FOR UPDATE
  USING (is_admin());

CREATE POLICY "Admins can delete products"
  ON products FOR DELETE
  USING (is_admin());

CREATE POLICY "Admins can see all products"
  ON products FOR SELECT
  USING (is_admin());

-- Orders
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can update orders" ON orders;

CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  USING (is_admin());

CREATE POLICY "Admins can update orders"
  ON orders FOR UPDATE
  USING (is_admin());

-- Order items
DROP POLICY IF EXISTS "Admins can view all order items" ON order_items;

CREATE POLICY "Admins can view all order items"
  ON order_items FOR SELECT
  USING (is_admin());

-- Customers
DROP POLICY IF EXISTS "Admins can view all customers" ON customers;

CREATE POLICY "Admins can view all customers"
  ON customers FOR SELECT
  USING (is_admin());

-- ── STEP 3: Enable RLS on admin_users (no permissive policies) ───
-- Default-deny for all app users. Service role (dashboard) bypasses RLS.
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- ── STEP 4: Enable RLS on newsletter_subscribers ─────────────────
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can subscribe" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can view subscribers" ON newsletter_subscribers;

CREATE POLICY "Anyone can subscribe"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view subscribers"
  ON newsletter_subscribers FOR SELECT
  USING (is_admin());

-- ── VERIFY ───────────────────────────────────────────────────────
SELECT
  tablename,
  rowsecurity AS rls_enabled
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'products','customers','orders','order_items',
    'addresses','wishlist_items','cart_items',
    'store_reviews','admin_users','newsletter_subscribers'
  )
ORDER BY tablename;
