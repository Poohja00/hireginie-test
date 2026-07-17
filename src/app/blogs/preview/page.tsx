"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/supabase";
import PostBody from "@/components/PostBody";

export const PREVIEW_STORAGE_KEY = "hireginie_admin_preview_post";

export default function PreviewPost() {
  const [post, setPost] = useState<Post | null | undefined>(undefined);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(PREVIEW_STORAGE_KEY);
      setPost(raw ? (JSON.parse(raw) as Post) : null);
    } catch {
      setPost(null);
    }
  }, []);

  if (post === undefined) {
    return <div className="max-w-[760px] mx-auto px-6 py-24 text-muted">Loading preview…</div>;
  }

  if (!post) {
    return (
      <div className="max-w-[760px] mx-auto px-6 py-24 text-muted">
        No preview data found. Go back to the admin dashboard and click Preview again.
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-dark text-white text-center py-2.5 text-[13px] font-medium">
        Preview mode — this post is not published. Close this tab to return to the dashboard.
      </div>
      <PostBody post={post} backHref="/admin" />
    </>
  );
}
