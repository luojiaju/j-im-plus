<template>
  <div>
    <div>
      <div class="flex items-center justify-center border-b-2">
        <button 
        @click="$router.replace($appStore.menu_layout_active_path)"
          class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
          打开私信
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center border-b-2">
      <q-btn @click="count += 10">+10</q-btn>
      <q-btn @click="count -= 1">-1</q-btn>
    </div>
    <div class="w-full flex justify-center border-b-2">
      <myEchart :options="options7" width="600px" height="400px"> </myEchart>
      <div>
        <select v-model="hotType">
          <option value="line">线图</option>
          <option value="pie">饼图</option>
          <option value="bar">柱状图</option>
          <option value="scatter">散点图</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import myEchart from "@/components/echarts/index.vue";
const count = ref(5);
const hotType = ref("bar");
const labelOption = {
  show: true,
  rotate: 0,
  formatter: "{c}  {name|{a}}",
  fontSize: 16,
  rich: {
    name: {},
  },
};
const options7 = computed(() => {
  return {
    title: {
      text: "热度",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      data: ["周一", "周二", "周三", "周四", "周五", "周六"],
    },
    yAxis: {},
    series: [
      {
        name: "pv",
        label: labelOption,
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        type: hotType.value,
        data: [count.value, 20, 36, 10, 10, 20],
        symbolSize: function (value: any) {
          return value / 2;
        },
      },
    ],
  };
});
</script>
