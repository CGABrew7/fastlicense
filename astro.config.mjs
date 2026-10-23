import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fastlicence.com',
  trailingSlash: 'always',
  // Astro 7 defaults this to 'jsx', which drops newlines v5 kept as
  // spaces between inline elements. HTML-aware compression keeps them.
  compressHTML: true,
});
