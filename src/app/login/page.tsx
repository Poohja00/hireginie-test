"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, SUPABASE_READY } from "@/lib/supabase";

const field = "w-full px-4 py-3 border border-black/10 rounded-[10px] text-[15px] outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent-soft";

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    if (!supabase) return;
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setErr(error.message === "Invalid login credentials"
        ? "Invalid credentials, or this account is not approved."
        : error.message);
      return;
    }
    router.push("/admin");
  }

  return (
    <div className="min-h-[calc(100vh-76px)] grid place-items-center px-6 py-12 bg-[radial-gradient(circle_at_70%_20%,var(--color-accent-soft),transparent_55%)]">
      <div className="w-full max-w-[420px] bg-white border border-black/10 rounded-[22px] shadow-[0_24px_60px_rgba(74,50,204,0.18)] p-10">
        <h1 className="text-2xl font-bold mb-1.5">Welcome back</h1>
        <p className="text-muted text-sm mb-6">Sign in to the Hireginie workspace.</p>

        {!SUPABASE_READY && (
          <div className="bg-[#fff8e6] border border-[#f0d98a] text-[#8a6d1b] rounded-[10px] px-3.5 py-2.5 text-[13px] mb-4">
            Supabase isn&apos;t configured yet. Add keys to <b>.env.local</b> and run the SQL setup. Until then, login is disabled.
          </div>
        )}
        {err && <div className="bg-[#fdecec] text-[#c0392b] border border-[#f5c6c6] rounded-[10px] px-3.5 py-2.5 text-[13.5px] mb-4">{err}</div>}

        <form onSubmit={submit} className="space-y-4">
          <div><label className="block text-sm font-medium mb-1.5">Email</label><input name="email" type="email" required placeholder="you@company.com" className={field} /></div>
          <div><label className="block text-sm font-medium mb-1.5">Password</label><input name="password" type="password" required placeholder="••••••••" className={field} /></div>
          <button type="submit" disabled={!SUPABASE_READY || busy} className="w-full justify-center inline-flex items-center gap-2 bg-gradient-to-br from-accent to-accent-deep text-white font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(107,78,255,0.4)] disabled:opacity-50 disabled:translate-y-0">
            {busy ? "Signing in…" : "Sign In →"}
          </button>
        </form>
        <p className="text-muted text-[12.5px] text-center mt-4.5">Access is invite-only. Only approved accounts can sign in — there is no public sign-up.</p>
      </div>
    </div>
  );
}
