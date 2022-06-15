import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), solid()]
});