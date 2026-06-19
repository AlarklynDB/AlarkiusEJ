import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { fileURLToPath } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
  site: 'https://alarkiusej.com',

  // Static Site Generation — every page outputs real HTML at build time.
  // This is the whole point of the migration: crawlable inner pages.
  output: 'static',

  integrations: [
    react(),
    // applyBaseStyles:false — we already load Tailwind via src/index.css,
    // so let Astro skip injecting its own base sheet.
    tailwind({ applyBaseStyles: false }),
  ],

  vite: {
    resolve: {
      alias: {
        // ── Safety net ──────────────────────────────────────────
        // Any component still importing 'react-router-dom' (now or
        // future) transparently resolves to our shim and never breaks
        // the build. Pages use the explicit '../lib/router' path; this
        // catches everything else.
        'react-router-dom': fileURLToPath(
          new URL('./src/lib/router.tsx', import.meta.url)
        ),
      },
    },
    plugins: [
      // Same PWA setup carried over from vite.config.ts.
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'ELVYA-pwa.png'],
        manifest: {
          name: 'AlarkiusEJ | Author Library & Portfolio',
          short_name: 'AlarkiusEJ',
          description:
            'Alarkius Elvya Jay — Author, Worldbuilder & Composer. Creator of The Hibrythian Saga and The Naiseikai Universe.',
          theme_color: '#191919',
          background_color: '#191919',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            { src: '/ELVYA-pwa.png', sizes: 'any', type: 'image/png', purpose: 'any' },
            { src: '/ELVYA-pwa.png', sizes: 'any', type: 'image/png', purpose: 'maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
          ],
        },
      }),
    ],
  },
})
