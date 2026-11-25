"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase, SUPABASE_READY, slugify, type Post } from "@/lib/supabase";
import { PREVIEW_STORAGE_KEY } from "@/app/blogs/preview/page";

const field = "w-full px-4 py-3 border border-black/10 rounded-[10px] text-[15px] outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent-soft";
const IMAGE_BUCKET = "post-images";
const INACTIVITY_LIMIT_MS = 5 * 60 * 1000;

export default function Admin() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [ready, setReady] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState("");

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

  useEffect(() => {
    setImageUrl(editing?.image_url ?? "");
    setUploadErr("");
  }, [editing]);

  const signOut = useCallback(() => {
    supabase?.auth.signOut().then(() => router.push("/login"));
  }, [router]);

  // Auto sign-out after 5 minutes with no mouse/keyboard/scroll/touch activity.
  useEffect(() => {
    if (!ready) return;
    let timer: ReturnType<typeof setTimeout>;
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(signOut, INACTIVITY_LIMIT_MS);
    };
    const events = ["mousemove", "mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((ev) => window.addEventListener(ev, reset));
    reset();
    return () => {
      clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, reset));
    };
  }, [ready, signOut]);

  async function uploadImage(file: File) {
    if (!supabase) return;
    setUploadErr("");
    if (!file.type.startsWith("image/")) {
      setUploadErr("Please choose an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadErr("Image is too large (5MB max).");
      return;
    }
    setUploading(true);
    const path = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ""))}${file.name.match(/\.[^.]+$/)?.[0] ?? ""}`;
    const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file, { upsert: false });
    setUploading(false);
    if (error) {
      setUploadErr(error.message);
      return;
    }
    const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
    setImageUrl(data.publicUrl);
  }

  function readFormPost(): Post {
    const f = formRef.current!;
    const title = (f.elements.namedItem("title") as HTMLInputElement).value.trim();
    return {
      title,
      slug: editing?.id ? editing.slug : `${slugify(title)}-${Date.now().toString(36).slice(-4)}`,
      tag: (f.elements.namedItem("tag") as HTMLInputElement).value.trim(),
      excerpt: (f.elements.namedItem("excerpt") as HTMLTextAreaElement).value.trim(),
      content: (f.elements.namedItem("content") as HTMLTextAreaElement).value.trim(),
      image_url: imageUrl || undefined,
      author: "Hireginie Team",
      published: (f.elements.namedItem("published") as HTMLInputElement).checked,
      created_at: editing?.created_at ?? new Date().toISOString(),
    };
  }

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!supabase) return;
    const row = readFormPost();
    if (editing?.id) await supabase.from("posts").update(row).eq("id", editing.id);
    else await supabase.from("posts").insert(row);
    setEditing(null);
    setImageUrl("");
    formRef.current?.reset();
    load();
  }

  function preview() {
    if (!formRef.current) return;
    const row = readFormPost();
    if (!row.title) {
      alert("Add a title before previewing.");
      return;
    }
    sessionStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(row));
    window.open("/blogs/preview", "_blank");
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
        <button onClick={signOut} className="bg-black text-white border border-black rounded-full px-5 py-2 text-sm font-semibold transition-colors hover:bg-white hover:text-black">Sign out</button>
      </div>
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-7 items-start">
        <div className="bg-white border border-black/10 rounded-[18px] p-6">
          <h2 className="font-semibold mb-4">All Posts</h2>
          {posts.length === 0 ? <p className="text-muted text-sm">No posts yet.</p> : posts.map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-3 py-3.5 border-b border-black/10 last:border-0">
              <div className="flex items-center gap-3 min-w-0">
                {p.image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image_url} alt="" className="w-11 h-11 rounded-lg object-cover shrink-0" />
                )}
                <div className="min-w-0">
                  <b className="text-[15px] block truncate">{p.title}</b>
                  <small className="block text-muted text-[12.5px]">{p.tag || "-"} · {p.created_at ? new Date(p.created_at).toLocaleDateString() : ""}</small>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${p.published ? "bg-[#e1f5ee] text-[#1d9e75]" : "bg-soft text-muted"}`}>{p.published ? "Live" : "Draft"}</span>
                <button onClick={() => setEditing(p)} className="border border-black/10 rounded-lg px-2.5 py-1.5 text-[13px] hover:bg-soft">Edit</button>
                <button onClick={() => remove(p.id)} className="border border-black/10 rounded-lg px-2.5 py-1.5 text-[13px] hover:bg-[#fdecec] hover:text-[#c0392b]">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-black/10 rounded-[18px] p-6">
          <h2 className="font-semibold mb-4">{editing?.id ? "Edit Post" : "New Post"}</h2>
          <form ref={formRef} onSubmit={save} className="space-y-4" key={editing?.id ?? "new"}>
            <div><label className="block text-sm font-medium mb-1.5">Title</label><input name="title" required defaultValue={editing?.title} className={field} /></div>
            <div><label className="block text-sm font-medium mb-1.5">Tag</label><input name="tag" defaultValue={editing?.tag} className={field} /></div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Cover Image</label>
              {imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt="" className="w-full aspect-video object-cover rounded-lg mb-2 border border-black/10" />
              )}
              <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadImage(file);
                }}
                className="w-full text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent-soft file:text-accent file:font-semibold file:cursor-pointer file:text-[13px] cursor-pointer"
              />
              {uploading && <p className="text-muted text-[12.5px] mt-1">Uploading…</p>}
              {uploadErr && <p className="text-[#c0392b] text-[12.5px] mt-1">{uploadErr}</p>}
              {imageUrl && !uploading && (
                <button type="button" onClick={() => setImageUrl("")} className="text-[12.5px] text-muted hover:text-[#c0392b] mt-1">Remove image</button>
              )}
            </div>

            <div><label className="block text-sm font-medium mb-1.5">Excerpt</label><textarea name="excerpt" rows={2} defaultValue={editing?.excerpt} className={field} /></div>
            <div><label className="block text-sm font-medium mb-1.5">Content</label><textarea name="content" rows={8} defaultValue={editing?.content} className={field} /></div>
            <label className="flex items-center gap-2 text-sm"><input name="published" type="checkbox" defaultChecked={editing?.published} /> Published</label>
            <div className="flex gap-2.5 flex-wrap">
              <button type="submit" className="bg-gradient-to-r from-accent via-accent-mid to-accent-gold text-white font-semibold text-[14px] px-6 py-3 rounded-xl shadow-[0_10px_25px_rgba(254,98,42,0.3)] hover:-translate-y-0.5 hover:shadow-lg transition-all">Save Post</button>
              <button type="button" onClick={preview} className="border border-black/10 rounded-full px-6 py-3 font-semibold hover:bg-soft">Preview →</button>
              {editing && <button type="button" onClick={() => setEditing(null)} className="border border-black/10 rounded-full px-6 py-3">Cancel</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
