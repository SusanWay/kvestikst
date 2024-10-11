// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo-loader', '@nuxtjs/google-fonts', 'nuxt-swiper'],
  svgoLoader: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertColors: {
                currentColor: true,
              },
              removeViewBox: false,
            },
          },
        },
      ],
    }
  },
  googleFonts: {
    families: {
      'Open Sans': [300, 400, 600, 700, 800]
    }
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  }


})