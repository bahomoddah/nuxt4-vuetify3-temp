<template>
  <v-btn variant="text" :prepend-icon="themeIcon" @click="toggleTheme">
    {{ $t(currentTheme) }}
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();

const currentTheme = computed(() =>
  theme.current.value.dark ? "dark" : "light"
);

const themeIcon = computed(() =>
  currentTheme.value === "dark" ? "mdi-weather-night" : "mdi-weather-sunny"
);

const toggleTheme = () => {
  theme.global.name.value = currentTheme.value === "dark" ? "light" : "dark";
};
</script>