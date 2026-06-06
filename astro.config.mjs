// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist Sans",
      cssVariable: "--font-geist-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
  ],

  integrations: [react()],
});
