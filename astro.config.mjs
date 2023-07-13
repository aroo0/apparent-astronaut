import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://arekdec.dev',
  experimental: {
    assets: true
  },
  integrations: [partytown(), image()]
});