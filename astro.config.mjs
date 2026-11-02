// ATEAM 소개 사이트 (leada.team) — 랜딩 + 아티클. 앱은 app.leada.team (PUBLIC_APP_URL)
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leada.team',
  integrations: [tailwind(), sitemap()],
  build: { format: 'directory' },
});
