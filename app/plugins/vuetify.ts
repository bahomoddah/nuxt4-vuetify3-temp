import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { ar, en } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    locale: {
      locale: "ar",
      fallback: "ar",
      messages: { ar, en },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#1867C0",
            secondary: "#5CBBF6",
            accent: "#005CAF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
        },
        dark: {
          colors: {
            primary: "#2196F3",
            secondary: "#424242",
            accent: "#FF4081",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
