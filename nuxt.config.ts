import { CSRF_CONFIG, SECURITY_CONFIG } from './constants/security'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/google-fonts',
  ],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  googleFonts: {
    preload: true,
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  csurf: CSRF_CONFIG,
  security: SECURITY_CONFIG,
  colorMode: {
    preference: 'light', // disable dark mode
  },
  imports: {
    dirs: ['stores', 'composables/api'],
  },
  ui: {
    icons: 'mdi',
  },
})
