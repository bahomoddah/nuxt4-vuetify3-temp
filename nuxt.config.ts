// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["vuetify/lib/styles/main.sass"],

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/icon", "@nuxtjs/i18n"],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  i18n: {
    langDir: "locales",
    locales: [
      {
        code: "ar",
        file: "ar.json",
        name: "العربية",
        dir: "rtl",
      },
      {
        code: "en",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
    ],
    defaultLocale: "ar",
    strategy: "prefix_except_default",
  },

  devServer: {
    port: 8080,
    host: process.env.HOST || "localhost",
  },
});
