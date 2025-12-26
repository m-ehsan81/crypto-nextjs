import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        port: "",
        pathname: "/coins/images/**",
      },
    ],
  },
};

// https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400

export default nextConfig;
