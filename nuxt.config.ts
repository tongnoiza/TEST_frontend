// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "@nuxt/bridge";


export default defineNuxtConfig({

  components: {
    global: true,
   dirs: ["~/components"]
  },  
   runtimeConfig: {
    public: {
      baseURL:  'localhost:3002',
    },
  },
  nuxtIcon: {
    size: '44px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  modules: ['@bootstrap-vue-next/nuxt','@nuxtjs/i18n','@pinia/nuxt','nuxt-icon'],
  i18n: {
    vueI18n: 'nuxt-i18n.js' // custom path example
  },
  devtools: { enabled: true },
});
