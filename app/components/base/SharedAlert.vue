<script setup>
const globalStore = useGlobalStore();
const alert = computed(() => globalStore.alertData);
const showAlert = computed(() => globalStore.showAlert);
</script>

<template>
  <v-snackbar
    v-model="showAlert"
    :timeout="4000"
    variant="flat"
    location="top"
    max-width="530"
    width="90svw"
    :color="alert.success ? 'success' : 'error'"
  >
    <div class="d-flex align-center justify-start ga-2">
      <p class="text-white f18 font-weight-medium">{{ alert.message }}</p>
    </div>
    <template #actions>
      <v-btn
        variant="text"
        rounded="circle"
        color="white"
        @click="globalStore.showAlert = false"
      >
        <v-icon size="27">mdi-close-circle</v-icon></v-btn
      >
    </template>
  </v-snackbar>
</template>
