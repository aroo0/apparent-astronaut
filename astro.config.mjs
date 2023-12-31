import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: 'https://arekdec.dev',
  experimental: {
    assets: true
  },
  integrations: [partytown()]
});