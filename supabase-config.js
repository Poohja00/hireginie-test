// ============================================================
//  SUPABASE CONFIG  —  FILL THESE IN
// ------------------------------------------------------------
//  1. Create a free project at https://supabase.com
//  2. Project Settings → API → copy the values below
//  3. Run the SQL in  supabase-setup.sql  (SQL Editor)
//  4. Create users in Authentication → Users (these are the
//     ONLY people who can log in — there is no public signup)
// ============================================================

const SUPABASE_URL  = "YOUR_SUPABASE_URL";       // e.g. https://abcd.supabase.co
const SUPABASE_ANON = "YOUR_SUPABASE_ANON_KEY";  // the public anon key

// Do not edit below ------------------------------------------
const SUPABASE_READY =
  SUPABASE_URL.startsWith("http") && SUPABASE_ANON.length > 20;

const sb = SUPABASE_READY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON)
  : null;
