// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // ssr: false,      // Disable SSR
  // target: 'static', // Optional: set to static if needed
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // Configurer TypeScript
  typescript: {
    shim: false,  // Désactive le shim TypeScript pour une meilleure compatibilité avec Vue 3
  },
})
