import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/katex')) {
            return 'vendor-katex';
          }
          if (/src\/data\/levels\/(alpha_|beta|gamma|delta|epsilon)\.ts$/.test(id)) {
            return 'levels-01-05';
          }
          if (/src\/data\/levels\/(zeta|eta|theta|iota|kappa)\.ts$/.test(id)) {
            return 'levels-06-10';
          }
          if (/src\/data\/levels\/(lambda|mu|nu|xi|omicron)\.ts$/.test(id)) {
            return 'levels-11-15';
          }
          const i18nMatch = id.match(/src\/i18n\/locales\/([^/]+)\//);
          if (i18nMatch && i18nMatch[1] !== 'en') {
            const localeCode = i18nMatch[1];
            if (/\/levels\/(alpha|beta|gamma|delta|epsilon)\.ts$/.test(id)) {
              return `i18n-${localeCode}-01-05`;
            }
            if (/\/levels\/(zeta|eta|theta|iota|kappa)\.ts$/.test(id)) {
              return `i18n-${localeCode}-06-10`;
            }
            if (/\/levels\/(lambda|mu|nu|xi|omicron)\.ts$/.test(id)) {
              return `i18n-${localeCode}-11-15`;
            }
            return `i18n-${localeCode}-core`;
          }
          return undefined;
        },
      },
    },
  },
});
