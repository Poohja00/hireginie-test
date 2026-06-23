import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The IHX client logo is an SVG; allow it through the image optimizer.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
