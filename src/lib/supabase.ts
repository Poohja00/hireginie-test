import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const SUPABASE_READY = url.startsWith("http") && anon.length > 20;

// Singleton browser client (null until env vars are set).
// Uses cookie-based sessions (not localStorage) so the server middleware
// that guards /admin can read the same session.
export const supabase: SupabaseClient | null = SUPABASE_READY
  ? createBrowserClient(url, anon)
  : null;

export type Post = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: string;
  tag?: string;
  image_url?: string;
  published?: boolean;
  created_at?: string;
};

export function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);
}
