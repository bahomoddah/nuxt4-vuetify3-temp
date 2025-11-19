<template>
  <v-btn variant="text" @click="toggleTheme" :prepend-icon="themeIcon">
    {{ $t(currentTheme) }}
  </v-btn>
</template>

<script setup lang="ts">
const { $vuetify } = useNuxtApp()

const currentTheme = computed(() => 
  $vuetify.theme.current.dark ? 'dark' : 'light'
)

const themeIcon = computed(() => 
  currentTheme.value === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'
)

const toggleTheme = () => {
  $vuetify.theme.global.name.value = currentTheme.value === 'dark' ? 'light' : 'dark'
}
</script>