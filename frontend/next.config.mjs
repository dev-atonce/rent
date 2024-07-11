/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "at-once.info",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "rent.at-once.info",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.rent.co.th",
        port: "",
      },
      {
        protocol: "http",
        hostname: "192.168.0.113",
        port: "3000",
      },
    ],
  },
};

export default nextConfig;
