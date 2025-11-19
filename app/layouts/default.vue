<template>
  <v-app>
    <BaseAppNavigation />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
