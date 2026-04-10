import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio-security",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
