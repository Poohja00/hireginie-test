"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase, type Post } from "@/lib/supabase";
import { SAMPLE_POSTS } from "@/data/posts";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null | undefined>(undefined);

  useEffect(() => {
    const fallback = SAMPLE_POSTS.find((p) => p.slug === slug) ?? null;
    if (!supabase) {
      setPost(fallback);
      return;
    }
    supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single()
      .then(({ data }) => setPost((data as Post) ?? fallback));
  }, [slug]);

  if (post === undefined) {
    return <div className="max-w-[760px] mx-auto px-6 py-24 text-muted">Loading…</div>;
  }

  if (!post) {
    return (
      <div className="max-w-[760px] mx-auto px-6 py-24">
        <Link href="/blogs" className="text-accent font-semibold">← Back to Blogs</Link>
        <h1 className="text-3xl font-bold mt-6">Article not found</h1>
        <p className="text-muted mt-2">This post may have been removed.</p>
      </div>
    );
  }

  return (
    <article className="max-w-[760px] mx-auto px-6 pt-14">
      <Link href="/blogs" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm">← Back to Blogs</Link>
      <span className="block mt-5 text-xs font-semibold text-accent uppercase tracking-wide">{post.tag ?? "Insights"}</span>
      <h1 className="text-[clamp(30px,4.5vw,46px)] font-bold leading-tight mt-3 mb-4">{post.title}</h1>
      <p className="text-muted text-sm mb-7">
        By {post.author ?? "Hireginie Team"}
        {post.created_at ? ` · ${new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}` : ""}
      </p>
      <div className="aspect-[16/8] rounded-[18px] bg-gradient-to-br from-accent-soft to-accent-2 mb-9" />
      <div className="text-[17px] leading-[1.75] text-[#2a2933] whitespace-pre-wrap">{post.content}</div>
      <div className="h-16" />
    </article>
  );
}
