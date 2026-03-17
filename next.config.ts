import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.buckinghamshireescorts.agency',
          },
        ],
        destination: 'https://buckinghamshireescorts.agency/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
