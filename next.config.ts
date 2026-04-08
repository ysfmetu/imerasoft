import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for better error detection
  reactStrictMode: true,

  // Compress responses
  compress: true,

  // Trailing slash consistency (false = canonical without slash)
  trailingSlash: false,

  // Image optimization — allow external domains if needed in future
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
