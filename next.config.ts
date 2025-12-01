import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  reactStrictMode: false,
  images: {

    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.0.217",
        port: "4000",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',           // leave empty for default
        pathname: '/vi/**', // allows all YouTube thumbnails
      },
    ]
  }
};

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig);
