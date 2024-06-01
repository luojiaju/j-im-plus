<template>
  <div class="q-pa-md">
    <q-table
      class="h-full"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      :filter="filter"
      hide-header
      virtual-scroll
      grid
      :row-per-page-options="[0]"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="`${$currTheme.value} `">
            <q-card-section>
              <div class="flex justify-center">
                <img
                  class="margin:0 auto;"
                  style="height: 200px"
                  src="https://img2.imgtp.com/2024/05/26/c2f6qiIb.png"
                  alt="x"
                />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="flex justify-between items-center">
                <q-checkbox dense v-model="props.selected" label="加入购物车" />

                <q-btn
                  :disable="isDes(props.row.robTime, props.row.calories)"
                  color="red"
                  @click="spikes(props.row)"
                >
                  {{ formatTime(props.row.robTime) }} 抢购
                </q-btn>
              </div>
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item
                v-for="col in props.cols.filter((col: any) => col.name !== 'desc')"
                :key="col.name"
              >
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
const filter = ref("");
const selected = ref([]);

const isDes = computed(() => {
  return function (val1: any, val2: any) {

    if (val1 > 0 && val2 > 0) {
      return true;
    } else {
      if (val1 == 0 && val2 == 0) {
        return true;
      }
      return false;
    }
  };
});

function randomDate() {
  // 时分秒
  const date = new Date();
  // 随机10-60
  date.setSeconds(date.getSeconds() + 5);
  return date;
}

const formatTime = (seconds: any) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}分 ${remainingSeconds}秒`;
};

const startCountDown = () => {
  const interval: any = setInterval(() => {
    rows.forEach((item: any) => {
      if (item.robTime > 0) {
        item.robTime -= 1;
      }
    });
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
};

function spikes(row: any) {
  if (row.calories > 0) {
    row.calories -= 1;
    // 发送请求
    console.log("秒杀成功，库存剩余", row.calories);
  }
  return;
}

onMounted(() => {
  startCountDown();
});

const columns: any = [
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  {
    name: "robTime",
    label: "robTime",
    field: "robTime",
    sortable: true,
  },
];

const rows = reactive<any>([
  {
    name: "Honeycomb",
    calories: 5,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
    robTime: 3,
  },
  {
    name: "Donut",
    calories: 10,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
    robTime: randomDate().getSeconds(),
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
    robTime: randomDate().getSeconds(),
  },
]);
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
