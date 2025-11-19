<script setup>
import { useLocale } from "vuetify";
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { current } = useLocale();
// For update website language and text direction
watch(locale, (newLocaleValue) => {
  useHead({
    htmlAttrs: {
      lang: newLocaleValue,
      dir: newLocaleValue === "en" ? "ltr" : "rtl",
    },
  });
  // Update Vuetify Locale
  current.value = newLocaleValue;
});

onMounted(() => {
  // Update Vuetify Locale
  current.value = locale.value;
});
const localeIcon = computed(() =>
  locale.value == "ar" ? "mdi-translate" : "mdi-abjad-arabic"
);
</script>
<template>
  <div>
    <NuxtLink :to="switchLocalePath(locale == 'ar' ? 'en' : 'ar')">
      <v-btn variant="text" :prepend-icon="localeIcon">
        {{ locale === "ar" ? "English" : "عربي" }}
      </v-btn>
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped></style>
