-- ═══════════════════════════════════════════════════════════════════════════
-- KGS Home Décors — track_order RPC
-- ═══════════════════════════════════════════════════════════════════════════
-- Run this in: Supabase Dashboard → SQL Editor → New Query → Run
--
-- Purpose:
--   Allows guest customers to look up their order by order_number + phone
--   WITHOUT being logged in. Bypasses RLS using SECURITY DEFINER.
--
-- Called by:
--   order-tracking.html → sb.rpc('track_order', { p_order_number, p_phone })
--
-- Parameters:
--   p_order_number TEXT  — the numeric part of the order number (without "KGS-")
--                          e.g. "1001" for order "KGS-1001"
--   p_phone        TEXT  — customer's 10-digit phone (digits only)
--
-- Returns:
--   SETOF orders — matching order row(s). Frontend fetches order_items separately.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION track_order(
  p_order_number TEXT,
  p_phone        TEXT
)
RETURNS SETOF orders
LANGUAGE plpgsql
SECURITY DEFINER          -- runs as DB owner, bypasses RLS for guest lookups
STABLE                    -- no writes, allows query optimisation
SET search_path = public  -- prevent search_path injection
AS $$
DECLARE
  v_clean_phone TEXT;
  v_clean_order TEXT;
BEGIN
  -- Normalise inputs: strip spaces, dashes, +91 prefix from phone
  v_clean_phone := regexp_replace(p_phone, '[^0-9]', '', 'g');
  v_clean_phone := right(v_clean_phone, 10);   -- keep last 10 digits

  -- Strip leading "KGS-" if caller accidentally includes it
  v_clean_order := regexp_replace(upper(p_order_number), '^KGS-?', '');

  RETURN QUERY
  SELECT o.*
  FROM   orders o
  WHERE
    -- Match order number: stored value may be "1001" or "KGS-1001"
    (
      o.order_number::TEXT = v_clean_order
      OR o.order_number::TEXT = 'KGS-' || v_clean_order
    )
    AND
    -- Match phone against all phone columns (guest + logged-in)
    (
      right(regexp_replace(COALESCE(o.shipping_phone, ''), '[^0-9]', '', 'g'), 10) = v_clean_phone
      OR right(regexp_replace(COALESCE(o.guest_phone,    ''), '[^0-9]', '', 'g'), 10) = v_clean_phone
    )
  LIMIT 1;
END;
$$;

-- Grant execute to anon and authenticated roles
GRANT EXECUTE ON FUNCTION track_order(TEXT, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION track_order(TEXT, TEXT) TO authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- VERIFICATION QUERY
-- Run this after creating the function to confirm it exists:
-- ───────────────────────────────────────────────────────────────────────────
-- SELECT routine_name, routine_type, security_type
-- FROM   information_schema.routines
-- WHERE  routine_schema = 'public'
--   AND  routine_name   = 'track_order';
--
-- Expected output:
--   routine_name | routine_type | security_type
--   track_order  | FUNCTION     | DEFINER
-- ═══════════════════════════════════════════════════════════════════════════
