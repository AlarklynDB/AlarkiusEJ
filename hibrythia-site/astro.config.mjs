import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thehibrythiansaga.com',

  // Static Site Generation — every one of the 149 pages outputs real
  // HTML at build time. This is the whole point of the migration:
  // crawlable, individually-indexable inner lore pages.
  output: 'static',

  integrations: [
    react(),
    // applyBaseStyles:false — Tailwind is loaded via src/index.css,
    // so let Astro skip injecting its own base sheet.
    tailwind({ applyBaseStyles: false }),
    // Auto-generates sitemap-index.xml + sitemap-0.xml from `site` + routes.
    sitemap(),
  ],

  vite: {
    resolve: {
      alias: {
        // ── '@' path alias ──────────────────────────────────────
        // The original Vite config + App.tsx used '@/...' for src.
        // Preserved so any component using it still resolves.
        '@': fileURLToPath(new URL('./src', import.meta.url)),

        // ── 'react-router-dom' safety-net alias ─────────────────
        // Every page imports { Link } from 'react-router-dom'; the
        // old Layout used NavLink/Outlet/useLocation. All of them
        // transparently resolve to our shim, so ZERO import edits
        // are needed across the 149 page files.
        'react-router-dom': fileURLToPath(
          new URL('./src/lib/router.tsx', import.meta.url)
        ),
      },
    },
    plugins: [
      // PWA setup carried over from the old vite.config.ts.
      // Network-first / passthrough behaviour preserved.
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png'],
        manifest: {
          name: 'The Hibrythian Saga',
          short_name: 'Hibrythia',
          description: 'The official lore site of The Hibrythian Saga',
          theme_color: '#0e0d0b',
          background_color: '#0e0d0b',
          display: 'standalone',
          icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
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
