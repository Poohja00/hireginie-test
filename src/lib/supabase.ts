import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const SUPABASE_READY = url.startsWith("http") && anon.length > 20;

// Singleton browser client (null until env vars are set)
export const supabase: SupabaseClient | null = SUPABASE_READY
  ? createClient(url, anon)
  : null;

export type Post = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  author?: string;
  tag?: string;
  published?: boolean;
  created_at?: string;
};

export function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);
}
