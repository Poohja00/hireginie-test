"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SitePage, { CARD, wrap } from "@/components/SitePage";
import Reveal from "@/components/Reveal";
import { supabase, type Post } from "@/lib/supabase";
import { SAMPLE_POSTS } from "@/data/posts";

export default function Blogs() {
  const [posts, setPosts] = useState<Post[]>(SAMPLE_POSTS);

  useEffect(() => {
    if (!supabase) return; // keep static fallback
    supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data && data.length) setPosts(data as Post[]);
      });
  }, []);

  return (
    <SitePage crumb="Insights" title="Insights on hiring and growing teams." intro="Practical reading on recruitment, leadership and inclusive hiring.">
      <section className="pb-24 pt-14 lg:pt-[72px]">
        <div className={wrap}>
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((p, idx) => (
              <Reveal key={p.slug} delay={(idx % 3) * 0.08}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className={`${CARD} group block h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(185,55,67,0.18)]`}
                >
                  {p.image_url ? (
                    <div className="relative aspect-video">
                      <Image src={p.image_url} alt={p.title} fill className="object-cover" unoptimized />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-accent-soft to-accent-2" />
                  )}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{p.tag ?? "Insights"}</span>
                    <h3 className="text-[20px] font-medium leading-[30px] mt-2 mb-2">{p.title}</h3>
                    <p className="text-muted text-sm">{p.excerpt}</p>
                    <p className="text-muted text-[12.5px] mt-3.5">
                      {p.author ?? "Hireginie Team"}
                      {p.created_at ? ` · ${new Date(p.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}` : ""}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
