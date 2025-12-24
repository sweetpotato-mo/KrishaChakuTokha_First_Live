/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only use static export and basePath for production builds (GitHub Pages)
  // In development, use normal Next.js mode without basePath
  // Note: We manage basePath manually instead of using configure-pages auto-injection
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    basePath: "/KrishaChakuTokha_First_Live",
    trailingSlash: true,
  }),
};

module.exports = nextConfig;
