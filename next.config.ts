import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Zdrojové obrázky sú už optimalizované (WebP/JPG vo web veľkosti),
    // preto ich servírujeme priamo bez ďalšej on-demand optimalizácie.
    unoptimized: true,
  },
};

export default nextConfig;
