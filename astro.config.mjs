// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      SENT_FROM_EMAIL: envField.string({ context: "server", access: "secret" }),
      SEND_TO_EMAIL: envField.string({ context: "server", access: "secret" }),
    },
  },
});
