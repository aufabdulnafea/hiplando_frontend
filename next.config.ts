import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

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

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig);
