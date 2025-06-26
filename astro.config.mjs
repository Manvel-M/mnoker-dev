// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: "wrangler.jsonc",
    },
    imageService: "cloudflare",
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // resolve: {
    //   alias:
    //     process.env.NODE_ENV === "production"
    //       ? {
    //           "react-dom/server": "react-dom/server.edge",
    //         }
    //       : undefined,
    // },
  },
});
