-- ================================================================
-- KGS HOME DÉCORS — Fix store_reviews permissions + column
-- Paste this into the Supabase SQL Editor and click Run.
-- Safe to run multiple times.
-- ================================================================

-- 1. Add reviewer_name column if the table was created with guest_name
--    (the app code uses reviewer_name everywhere)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'store_reviews' AND column_name = 'reviewer_name'
  ) THEN
    ALTER TABLE store_reviews ADD COLUMN reviewer_name TEXT;
    -- Copy existing data from guest_name if it exists
    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_name = 'store_reviews' AND column_name = 'guest_name'
    ) THEN
      UPDATE store_reviews SET reviewer_name = guest_name;
    END IF;
  END IF;
END $$;

-- 2. Grant anon role read + insert access (this is what fixes the 403)
GRANT SELECT ON store_reviews TO anon;
GRANT INSERT ON store_reviews TO anon;

-- 3. Make sure RLS is on and policies are correct
ALTER TABLE store_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Approved reviews are viewable by everyone" ON store_reviews;
DROP POLICY IF EXISTS "Anyone can submit a review" ON store_reviews;

CREATE POLICY "Approved reviews are viewable by everyone"
  ON store_reviews FOR SELECT
  USING (is_approved = TRUE);

CREATE POLICY "Anyone can submit a review"
  ON store_reviews FOR INSERT
  WITH CHECK (true);

-- 4. Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'store_reviews'
ORDER BY ordinal_position;
