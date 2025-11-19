<template>
  <v-app>
    <AppNavigation />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} - Template` : "Template"),
});
</script>
