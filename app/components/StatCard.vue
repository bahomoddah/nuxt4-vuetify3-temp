<template>
  <v-card>
    <v-card-text class="d-flex align-center">
      <v-avatar :color="stat.color" class="mr-4">
        <v-icon dark>{{ stat.icon }}</v-icon>
      </v-avatar>
      <div>
        <div class="text-h6">{{ stat.value }}</div>
        <div class="text-caption">{{ $t(stat.title) }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  stat: {
    title: string;
    value: string;
    icon: string;
    color: string;
  };
}>();
</script>
