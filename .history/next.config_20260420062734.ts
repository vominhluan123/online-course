import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  module.exports = {
  images: {
    remotePatterns: [new URL('https://assets.example.com/account123/**')],
  },
}
};

export default nextConfig;
