// ===== Hireginie — auth + data helpers (Supabase) =====

async function getSession() {
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

// Fetch the logged-in user's profile row (role lives here)
async function getProfile() {
  if (!sb) return null;
  const session = await getSession();
  if (!session) return null;
  const { data } = await sb
    .from("profiles")
    .select("id, email, full_name, role")
    .eq("id", session.user.id)
    .single();
  return data;
}

async function isAdmin() {
  const p = await getProfile();
  return p?.role === "admin";
}

// Only existing Supabase users can sign in. No public signup exists,
// so "nobody else can log in" is enforced server-side.
async function signIn(email, password) {
  if (!sb) throw new Error("Supabase not configured yet.");
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signOut() {
  if (sb) await sb.auth.signOut();
  location.href = "login.html";
}

// Redirect helper for protected pages
async function requireAuth({ adminOnly = false } = {}) {
  const session = await getSession();
  if (!session) { location.href = "login.html"; return null; }
  const profile = await getProfile();
  if (adminOnly && profile?.role !== "admin") {
    alert("Admin access only.");
    location.href = "index.html";
    return null;
  }
  return profile;
}

// ---- Blog data ----
async function fetchPosts({ publishedOnly = true } = {}) {
  if (!sb) return null; // signal caller to use static fallback
  let q = sb.from("posts").select("*").order("created_at", { ascending: false });
  if (publishedOnly) q = q.eq("published", true);
  const { data, error } = await q;
  if (error) { console.error(error); return null; }
  return data;
}

async function fetchPostBySlug(slug) {
  if (!sb) return null;
  const { data } = await sb.from("posts").select("*").eq("slug", slug).single();
  return data;
}

async function savePost(post) {
  if (!sb) throw new Error("Supabase not configured.");
  if (post.id) {
    const { error } = await sb.from("posts").update(post).eq("id", post.id);
    if (error) throw error;
  } else {
    const { error } = await sb.from("posts").insert(post);
    if (error) throw error;
  }
}

async function deletePost(id) {
  if (!sb) throw new Error("Supabase not configured.");
  const { error } = await sb.from("posts").delete().eq("id", id);
  if (error) throw error;
}

function slugify(s) {
  return s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);
}
