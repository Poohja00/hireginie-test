"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase, type Post } from "@/lib/supabase";
import { SAMPLE_POSTS } from "@/data/posts";
import PostBody from "@/components/PostBody";

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

  return <PostBody post={post} />;
}
