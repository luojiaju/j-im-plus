<template>
  <div ref="chartRef" class="w-full" :style="{ width: width, height: height }"></div>
</template>
<script setup lang="ts">
import echarts from "@/utils/common-echart.ts";
const props = defineProps(["options", "width", "height"]);
const chartRef = ref<HTMLDivElement>();
let chart: echarts.ECharts | null = null;
const resizeHandler = () => {
  chart?.resize();
};
onMounted(() => {
  nextTick(() => {
    initChart();
  });
  window.addEventListener("resize", resizeHandler);
});

const initChart = () => {
  chart = echarts.init(chartRef.value as HTMLDivElement);
  chart.setOption({
    ...props.options,
  });
};

watchEffect(() => {
  if (props.options && chart) {
    chart.setOption({
      ...props.options,
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
  chart?.dispose();
});
</script>

<style lang="scss" scoped></style>
