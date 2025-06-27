import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
        pathname: "/avatar/*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
