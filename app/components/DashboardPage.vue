<template>
  <div>
    <v-row>
      <v-col v-for="stat in stats" :key="stat.title" cols="12" sm="6" md="3">
        <StatCard :stat="stat" />
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>{{ $t("revenue") }}</v-card-title>
          <v-card-text>
            <ApexChart type="area" :options="revenueChartOptions" :series="revenueSeries" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>{{ $t("sales") }}</v-card-title>
          <v-card-text>
            <ApexChart type="donut" :options="salesChartOptions" :series="salesSeries" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();

const stats = ref([
  {
    title: "revenue",
    value: "$42,567",
    icon: "mdi-currency-usd",
    color: "primary",
  },
  { title: "sales", value: "1,234", icon: "mdi-sale", color: "success" },
  {
    title: "visitors",
    value: "45,678",
    icon: "mdi-account-eye",
    color: "info",
  },
  {
    title: "conversions",
    value: "32.5%",
    icon: "mdi-chart-line",
    color: "warning",
  },
]);

const revenueSeries = ref([
  {
    name: "Revenue",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
]);

const salesSeries = ref([44, 55, 13, 33]);

const revenueChartOptions = computed(() => ({
  chart: {
    type: "area",
    height: 350,
    zoom: { enabled: false },
  },
  colors: [theme.current.value.colors.primary],
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  theme: {
    mode: theme.current.value.dark ? "dark" : "light",
  },
}));

const salesChartOptions = computed(() => ({
  chart: {
    type: "donut",
    height: 350,
  },
  labels: ["Electronics", "Fashion", "Home", "Sports"],
  theme: {
    mode: theme.current.value.dark ? "dark" : "light",
  },
  responsive: [
    {
      breakpoint: 480,
      options: { chart: { width: 200 } },
    },
  ],
}));
</script>
