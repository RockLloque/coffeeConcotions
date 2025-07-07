import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: { remotePatterns: [new URL("https://upload.wikimedia.org/**")] }
};

export default nextConfig;
