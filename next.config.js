/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", 'img.youtube.com', "jazz.skule.ca"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
