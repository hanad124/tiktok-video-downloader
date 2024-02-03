/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "p16-sign-sg.tiktokcdn.com",
      "p16-sign-useast2a.tiktokcdn.com",
      "p16-sign-va.tiktokcdn.com",
      "p16-sign-useast2a.tiktokcdn.com",
    ],
  },
};

export default nextConfig;
