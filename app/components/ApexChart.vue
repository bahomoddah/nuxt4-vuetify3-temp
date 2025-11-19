<template>
  <div ref="chart"/>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  type: string;
  options: any;
  series: any;
}>();

const chart = ref();
const chartObj = ref();

onMounted(() => {
  if (import.meta.client) {
    import("apexcharts").then((module) => {
      const ApexCharts = module.default;
      chartObj.value = new ApexCharts(chart.value, {
        chart: { type: props.type },
        ...props.options,
        series: props.series,
      });
      chartObj.value.render();
    });
  }
});

watch(
  () => props.options,
  (newOptions) => {
    if (chartObj.value) {
      chartObj.value.updateOptions(newOptions);
    }
  },
  { deep: true }
);

watch(
  () => props.series,
  (newSeries) => {
    if (chartObj.value) {
      chartObj.value.updateSeries(newSeries);
    }
  },
  { deep: true }
);
</script>
