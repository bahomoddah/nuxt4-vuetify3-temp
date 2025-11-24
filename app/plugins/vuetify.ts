import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { ar, en } from "vuetify/locale";

function getCssVariable(name: string) {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  return "";
}
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
          dark: false,
          colors: {
            primary: getCssVariable("--primary-600"),
            secondary: getCssVariable("--secondary-500"),
            accent: getCssVariable("--primary-800"),
            error: getCssVariable("--danger-500"),
            info: getCssVariable("--primary-400"),
            success: getCssVariable("--success-500"),
            warning: getCssVariable("--warning-500"),
            background: getCssVariable("--neutral-50"),
            surface: getCssVariable("--accent-color-white"),
            
            // primary: "#03ae67", // --primary-600
            // secondary: "#ff375e", // --secondary-500
            // accent: "#05603d", // --primary-800 (using as accent)
            // error: "#ef4444", // --danger-500
            // info: "#31d689", // --primary-400
            // success: "#10b981", // --success-500
            // warning: "#eab308", // --warning-500
            // background: "#fafafa", // --neutral-50
            // surface: "#ffffff", // --accent-color-white
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: getCssVariable("--primary-600"),
            secondary: getCssVariable("--secondary-500"),
            accent: getCssVariable("--primary-800"),
            error: getCssVariable("--danger-500"),
            info: getCssVariable("--primary-400"),
            success: getCssVariable("--success-500"),
            warning: getCssVariable("--warning-400"),
            background: getCssVariable("--neutral-950"),
            surface: getCssVariable("--neutral-800"),

            // primary: "#0dbc70", // --primary-500 (lighter for dark mode)
            // secondary: "#ff6983", // --secondary-400
            // accent: "#31d689", // --primary-400
            // error: "#f87171", // --danger-400
            // info: "#6ce9aa", // --primary-300
            // success: "#34d399", // --success-400
            // warning: "#facc15", // --warning-400
            // background: "#060606", // --neutral-950
            // surface: "#1b1b1b", // --neutral-800
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
