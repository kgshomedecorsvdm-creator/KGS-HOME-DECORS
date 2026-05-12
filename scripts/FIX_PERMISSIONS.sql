-- ============================================================
-- KGS Home Décors — STEP 1: Run this first in Supabase SQL Editor
-- This fixes service_role permissions + inserts all 422 products
-- ============================================================

-- 1. Grant service_role full access to products table
GRANT ALL ON public.products TO service_role;
GRANT ALL ON public.products TO postgres;
GRANT USAGE ON SCHEMA public TO service_role;

-- 2. Also grant sequence access (for auto-increment)
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- 3. Verify it worked
SELECT has_table_privilege('service_role', 'public.products', 'INSERT') as can_insert;
