// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
});
