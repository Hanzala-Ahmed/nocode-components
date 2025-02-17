/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.unsplash.com", "nepcha.com"],
  },
  async redirects() {
    return [
      {
        source: "/documentation/quick-start",
        destination: "/docs/react/installation",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/docs/react/button",
        permanent: true,
      },
      {
        source: "/back-to-school",
        destination: "/blocks",
        permanent: true,
      },
      {
        source: "/docs/react/theme/:slug*",
        destination: "/docs/react/:slug*",
        permanent: true,
      },
      {
        source: "/docs/react/props/:slug*",
        destination: "/docs/react/:slug*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/figma",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/figma",
      },
      {
        source: "/blocks",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks",
      },
      {
        source: "/back-to-school",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks",
      },
      {
        source: "/blocks/:slug*",
        destination:
          "https://material-taillwind-pro-ct-tailwind-team.vercel.app/blocks/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
