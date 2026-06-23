"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase, SUPABASE_READY, slugify, type Post } from "@/lib/supabase";

const field = "w-full px-4 py-3 border border-black/10 rounded-[10px] text-[15px] outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent-soft";

export default function Admin() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);

  const load = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    setPosts((data as Post[]) ?? []);
  }, []);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) { router.push("/login"); return; }
      setReady(true);
      load();
    });
  }, [router, load]);

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!supabase) return;
    const f = e.currentTarget;
    const title = (f.elements.namedItem("title") as HTMLInputElement).value.trim();
    const row: Post = {
      title,
      slug: editing?.id ? editing.slug : `${slugify(title)}-${Date.now().toString(36).slice(-4)}`,
      tag: (f.elements.namedItem("tag") as HTMLInputElement).value.trim(),
      excerpt: (f.elements.namedItem("excerpt") as HTMLTextAreaElement).value.trim(),
      content: (f.elements.namedItem("content") as HTMLTextAreaElement).value.trim(),
      published: (f.elements.namedItem("published") as HTMLInputElement).checked,
    };
    if (editing?.id) await supabase.from("posts").update(row).eq("id", editing.id);
    else await supabase.from("posts").insert(row);
    setEditing(null);
    f.reset();
    load();
  }

  async function remove(id?: string) {
    if (!supabase || !id || !confirm("Delete this post?")) return;
    await supabase.from("posts").delete().eq("id", id);
    load();
  }

  if (!SUPABASE_READY) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-24">
        <div className="bg-[#fff8e6] border border-[#f0d98a] text-[#8a6d1b] rounded-[10px] px-4 py-3 text-sm">
          Supabase isn&apos;t configured. Add keys to <b>.env.local</b> and run the SQL setup, then create an admin user.
        </div>
      </div>
    );
  }
  if (!ready) return <div className="px-6 py-24 text-muted max-w-[680px] mx-auto">Checking access…</div>;

  return (
    <div className="max-w-[88rem] mx-auto px-6 lg:px-10 py-10">
      <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Blog Dashboard</h1>
        <button onClick={() => supabase?.auth.signOut().then(() => router.push("/login"))} className="border border-black/10 rounded-full px-5 py-2 text-sm hover:bg-soft">Sign out</button>
      </div>
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7 items-start">
        <div className="bg-white border border-black/10 rounded-[18px] p-6">
          <h2 className="font-semibold mb-4">All Posts</h2>
          {posts.length === 0 ? <p className="text-muted text-sm">No posts yet.</p> : posts.map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-3 py-3.5 border-b border-black/10 last:border-0">
              <div><b className="text-[15px]">{p.title}</b><small className="block text-muted text-[12.5px]">{p.tag || "—"} · {p.created_at ? new Date(p.created_at).toLocaleDateString() : ""}</small></div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${p.published ? "bg-[#e1f5ee] text-[#1d9e75]" : "bg-soft text-muted"}`}>{p.published ? "Live" : "Draft"}</span>
                <button onClick={() => setEditing(p)} className="border border-black/10 rounded-lg px-2.5 py-1.5 text-[13px] hover:bg-soft">Edit</button>
                <button onClick={() => remove(p.id)} className="border border-black/10 rounded-lg px-2.5 py-1.5 text-[13px] hover:bg-[#fdecec] hover:text-[#c0392b]">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-black/10 rounded-[18px] p-6">
          <h2 className="font-semibold mb-4">{editing?.id ? "Edit Post" : "New Post"}</h2>
          <form onSubmit={save} className="space-y-4" key={editing?.id ?? "new"}>
            <div><label className="block text-sm font-medium mb-1.5">Title</label><input name="title" required defaultValue={editing?.title} className={field} /></div>
            <div><label className="block text-sm font-medium mb-1.5">Tag</label><input name="tag" defaultValue={editing?.tag} className={field} /></div>
            <div><label className="block text-sm font-medium mb-1.5">Excerpt</label><textarea name="excerpt" rows={2} defaultValue={editing?.excerpt} className={field} /></div>
            <div><label className="block text-sm font-medium mb-1.5">Content</label><textarea name="content" rows={8} defaultValue={editing?.content} className={field} /></div>
            <label className="flex items-center gap-2 text-sm"><input name="published" type="checkbox" defaultChecked={editing?.published} /> Published</label>
            <div className="flex gap-2.5">
              <button type="submit" className="bg-gradient-to-br from-accent to-accent-deep text-white font-semibold px-6 py-3 rounded-full">Save Post</button>
              {editing && <button type="button" onClick={() => setEditing(null)} className="border border-black/10 rounded-full px-6 py-3">Cancel</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
