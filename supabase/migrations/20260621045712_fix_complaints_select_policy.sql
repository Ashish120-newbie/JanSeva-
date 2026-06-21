-- Drop the restrictive select policy
DROP POLICY IF EXISTS "select_complaints_by_email" ON complaints;

-- Create a new policy that allows public to select (for complaint tracking)
CREATE POLICY "select_complaints_public" ON complaints FOR SELECT
  USING (true);