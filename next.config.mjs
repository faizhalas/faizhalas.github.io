/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // hasil build = folder statis "out/" (cocok untuk GitHub Pages)
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
