"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { supabase, type Post } from "@/lib/supabase";
import { SAMPLE_POSTS } from "@/data/posts";

const wrap = "mx-auto w-full max-w-[88rem] px-6 lg:px-10";

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
    <>
      <PageHero title="Insights & Blogs" crumb="Blogs" />
      <section className="py-24">
        <div className={wrap}>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((p, idx) => (
              <Reveal key={p.slug} delay={(idx % 3) * 0.08}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className="group block h-full bg-white border border-black/10 rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(74,50,204,0.18)]"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent-soft to-accent-2" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{p.tag ?? "Insights"}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-2">{p.title}</h3>
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
    </>
  );
}
