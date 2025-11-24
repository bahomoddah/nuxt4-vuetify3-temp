<template>
  <v-btn class="custom-primary-btn" variant="text" @click="showAlert">
    Vuetify Button (Custom Class)
  </v-btn>
  <v-btn class="bg-primary text-surface" variant="text" @click="showAlert"> showAlert </v-btn>
</template>
<script setup lang="ts">
const globalStore = useGlobalStore();
const showAlert = () => {
  const res = {
    message: "This is a primary button alert!",
    success: false,
  };
  globalStore.setAlertData(res);
  
};
</script>
<style lang="scss" scoped>
.custom-primary-btn {
  // Using the requested variable for background
  background-color: var(--primary-button-surface-defulte);

  // Using the corresponding text color variable
  color: var(--primary-button-text---defulte);

  // Basic styling
  padding: 10px 20px;
  // border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    // Example of using the hover variable from the system
    background-color: var(--primary-button-surface-hover);
  }
}
</style>
