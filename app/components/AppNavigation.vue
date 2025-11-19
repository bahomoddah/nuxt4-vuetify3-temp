<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="$t(item.title)"
        :value="item.title"
      />
    </v-list>

    <template #append>
      <div class="pa-2">
        <BaseLocaleSwitcher />
        <BaseThemeSwitcher />
        <BaseLocaleSwitcher1 />
      </div>
    </template>
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"/>
    <v-app-bar-title>{{ $t("dashboard") }}</v-app-bar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script setup lang="ts">
const drawer = ref(true);

const navigationItems = [
  { title: "dashboard", icon: "mdi-view-dashboard" },
  { title: "analytics", icon: "mdi-chart-bar" },
  { title: "users", icon: "mdi-account-group" },
  { title: "settings", icon: "mdi-cog" },
];
</script>
