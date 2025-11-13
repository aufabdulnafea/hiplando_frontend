import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.0.217",
        port: "4000",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
