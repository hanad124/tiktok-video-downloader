// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "p16-sign-sg.tiktokcdn.com",
//       "p16-sign-useast2a.tiktokcdn.com",
//       "p16-sign-va.tiktokcdn.com",
//       "p16-sign-useast2a.tiktokcdn.com",
//       "p16-sign.tiktokcdn-us.com",
//     ],
//   },
// };

// export default nextConfig;

const dynamicDomains = Array.from(
  { length: 10 },
  (_, i) => `p16-sign${i}.tiktokcdn.com || p16-sign${i}.tiktokcdn-us.com`
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "p16-sign-sg.tiktokcdn.com",
      "p16-sign-useast2a.tiktokcdn.com",
      "p16-sign-va.tiktokcdn.com",
      "p16-sign-useast2a.tiktokcdn.com",
      "p16-sign.tiktokcdn-us.com",
      ...dynamicDomains,
    ],
  },
};

export default nextConfig;
