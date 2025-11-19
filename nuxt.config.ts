import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["vuetify/lib/styles/main.sass"],

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/icon", "@nuxtjs/i18n"],

  build: {
    transpile: ["vuetify", "vue3-apexcharts"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    optimizeDeps: {
      include: ["vue3-apexcharts"],
    },
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
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
