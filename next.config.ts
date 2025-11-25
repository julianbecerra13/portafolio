import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Configuración para exportación estática
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
};

export default nextConfig;
