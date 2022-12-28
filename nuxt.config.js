export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Americas',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aplicação feita por Stênio Amorim. Github: /stamorim28.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'typescript, vue, scss, tailwind, axios, nuxt, restcountries, api' },
      { itemprop:'name', content:'Americas' },
      { itemprop:'description', content:'Aplicação feita por Stênio Amorim. Github: /stamorim28.' },
      { itemprop:'image', content:'https://avatars.githubusercontent.com/u/61470896?v=4' },
      { property: 'og:type', content: 'website'},
      { property: 'og:image', content:'https://avatars.githubusercontent.com/u/61470896?v=4'},
      { property: 'og:url', content: 'https://americas-nuxt.vercel.app/'},
      { property: 'og:title', content: 'Americas'},
      { property: 'og:description', content: 'Aplicação feita por Stênio Amorim. Github: /stamorim28.'},
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:image', content: 'https://avatars.githubusercontent.com/u/61470896?v=4'},
      { property: 'twitter:url', content: 'https://americas-nuxt.vercel.app/'},
      { property: 'twitter:title', content: 'Americas'},
      { property: 'twitter:description', content: 'Aplicação feita por Stênio Amorim. Github: /stamorim28.'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/globe.png' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      },],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css', '@/assets/tailwind'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/index.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false}],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', '@nuxtjs/style-resources', '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://restcountries.com/v3.1',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend (config){
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      })
    },
    extractCSS: true
  },
}
