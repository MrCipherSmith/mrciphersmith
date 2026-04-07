import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mrciphersmith",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
