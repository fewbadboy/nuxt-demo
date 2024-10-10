// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/web/',
    pageTransition: {
      name: 'page', mode: 'out-in',
    },
  },
  compatibilityDate: '2024-04-03',
  // injected globally and present in all pages
  css: [
    '~/assets/scss/main.scss',
  ],
  devtools: { enabled: true },
  imports: {
    dirs: [
      // Nuxt only scans files at the top level of the composables/
      // change scans
      'composables/**',
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    'radix-vue/nuxt',
    '@ant-design-vue/nuxt',
  ],
  nitro: {
    storage: {
      // set storage redis
      // redis: {
      //   driver: 'redis',
      //   port: '6370',
      //   host: '127.0.0.1',
      //   username: '',
      //   password: '',
      //   db: 0,
      //   tls: {}
      // }
    },
    devProxy: {
      // @see https://nitro.unjs.io/config#devproxy
    },
  },
  routeRules: {
    '/proxy/**': { proxy: '/api/**' }
  },
  runtimeConfig: {
     // The private keys which are only available server-side
    basePath: '/base', // can be overridden by NUXT_BASE_PATH environment variable
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            blue111: '#409eff',
          },
        },
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Global Styles Imports
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
