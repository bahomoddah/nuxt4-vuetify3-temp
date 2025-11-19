<template>
  <v-select
    v-model="locale"
    :items="availableLocales"
    density="compact"
    variant="outlined"
  />
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
// const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  locales.value.map((locale) => ({
    title: locale.code === "en" ? "English" : "العربية",
    value: locale.code,
  }))
);
</script>
