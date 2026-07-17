import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/supabase";

export default function PostBody({ post, backHref = "/blogs" }: { post: Post; backHref?: string }) {
  return (
    <article className="max-w-[760px] mx-auto px-6 pt-14">
      <Link href={backHref} className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm">← Back to Blogs</Link>
      <span className="block mt-5 text-xs font-semibold text-accent uppercase tracking-wide">{post.tag ?? "Insights"}</span>
      <h1 className="text-[clamp(30px,4.5vw,46px)] font-bold leading-tight mt-3 mb-4">{post.title || "Untitled Post"}</h1>
      <p className="text-muted text-sm mb-7">
        By {post.author ?? "Hireginie Team"}
        {post.created_at ? ` · ${new Date(post.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}` : ""}
      </p>
      {post.image_url ? (
        <div className="relative aspect-[16/8] rounded-[18px] overflow-hidden mb-9">
          <Image src={post.image_url} alt={post.title} fill className="object-cover" unoptimized />
        </div>
      ) : (
        <div className="aspect-[16/8] rounded-[18px] bg-gradient-to-br from-accent-soft to-accent-2 mb-9" />
      )}
      <div className="text-[17px] leading-[1.75] text-[#2a2933] whitespace-pre-wrap">{post.content}</div>
      <div className="h-16" />
    </article>
  );
}
