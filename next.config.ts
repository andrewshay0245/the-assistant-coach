import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/gamestat',
        destination: 'https://gamestat.theassistantcoach.co',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
