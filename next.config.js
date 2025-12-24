/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Static export for production builds (custom domain compatible)
  // basePath removed for custom domain - site serves from root /
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true,
  }),
};

module.exports = nextConfig;
