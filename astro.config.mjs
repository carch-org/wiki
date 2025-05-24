// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://carch.chalisehari.com.np',
  base: '/',
  integrations: [
    starlight({
      title: 'Carch',
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "flamingo" },
          light: { flavor: "latte", accent: "sky" },
        }),
      ],
      social: {
        discord: 'https://discord.com/invite/8NJWstnUHd',
        telegram: 'https://t.me/carchx',
        email: 'mailto:harilvfs@chalisehari.com.np'
      },
      editLink: {
        baseUrl: 'https://github.com/carch-org/wiki/tree/main',
      },
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2 },
      favicon: './carch.png',
      lastUpdated: true,
      sidebar: [
        { label: 'Getting Started', autogenerate: { directory: 'getting-started' } },
        { label: 'Project', autogenerate: { directory: 'project' } },
        { label: 'Reference', autogenerate: { directory: 'reference' } },
      ],
      customCss: [
        "./src/styles/custom.css",
      ],
    }),
  ],
});

