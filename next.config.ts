import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // standalone brand concept page, served from public/demo
    return [{ source: "/demo", destination: "/demo/index.html" }];
  },
  experimental: {
    turbopackMemoryLimit: 1073741824, // 1 GB cap
  },
  images: {
    // The IHX client logo is an SVG; allow it through the image optimizer.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
