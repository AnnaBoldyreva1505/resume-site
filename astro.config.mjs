import { defineConfig } from "astro/config";

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    open: true,
  },
  integrations: [tailwind()],
});
