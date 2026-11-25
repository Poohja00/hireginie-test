import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="min-h-screen grid place-items-center px-6 bg-white">
      <div className="text-center max-w-[420px]">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-soft grid place-items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="10" width="16" height="10" rx="2" stroke="#363636" strokeWidth="1.8" />
            <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#363636" strokeWidth="1.8" />
          </svg>
        </div>
        <h1 className="font-serif text-[28px] font-bold text-dark mb-2">401 Not Authorized</h1>
        <p className="text-muted text-[15px] leading-relaxed mb-7">
          You don&apos;t have permission to access this page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-colors hover:bg-white hover:text-black border border-black"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
