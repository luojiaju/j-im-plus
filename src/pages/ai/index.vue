<template>
  <div :style="{ height: `calc(${screen.height}px - 50px)` }">
    <q-layout view="hHh Lpr lff" container class="shadow-2 rounded-borders" style="height: 100%">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
          <q-select dark map-options filled :options="aiTypeOption" emit-value v-model="aiModel" color="white">
          </q-select>
          <q-toolbar-title>的对话记录</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawerLeft" show-if-above :width="200" 
      :breakpoint="700" :class="$currTheme.value">
        <q-scroll-area class="fit border-r-2">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <q-virtual-scroll :style="{
            margin: `0 auto`,
            height: `calc(${screen.height}px - ${dynamicHeight}px)`,
          }" :items="heavyList" class="w-1/2" v-slot="{ item, index }">
            <div>
              <q-chat-message :text="['Have you seen Quasar?']" sent text-color="white" bg-color="primary">
                <template v-slot:name>me</template>
                <template v-slot:stamp>7 minutes ago</template>
                <template v-slot:avatar>
                  <img class="q-message-avatar q-message-avatar--sent" src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </template>
              </q-chat-message>

              <q-chat-message bg-color="amber">
                <template v-slot:name>Mary</template>
                <template v-slot:avatar>
                  <img class="q-message-avatar q-message-avatar--received" src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </template>

                <div>
                  Already building an app with it...
                  <img src="https://cdn.quasar.dev/img/discord-qeart.png" class="my-emoji" />
                </div>

                <q-spinner-dots size="2rem" />
              </q-chat-message>
            </div>
          </q-virtual-scroll>
        </q-page>
      </q-page-container>
      <q-footer :class="$currTheme.value" class="w-scroll absolute-bottom">
        <div class="flex flex-col items-center max-h-96">
          <div class="w-9/12 ">
            <div class="ml-14" v-show="uploadShow">
              <upload v-model="form.files"></upload>
            </div>
            <div class="flex items-center flex-row w-full">
              <q-btn class="" flat icon="attach_file" @click="uploadShow = !uploadShow"></q-btn>
              <q-input class="flex-1" autofocus type="textarea" debounce="500" autogrow rows="2" v-model="form.text"
                label="内容" counter clearable filled>
                <template v-slot:append>
                  <q-btn dense icon="arrow_upward" round></q-btn>
                </template>
                <template v-slot:hint> 已输入</template>
              </q-input>
            </div>
          </div>
          <div class="flex items-center justify-center">
            以上内容均由AI生成,内容也可能会犯错。请核查重要信息。
          </div>
        </div>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import upload from "@/components/upload/index.vue";
const { screen } = useQuasar();

const drawerLeft = ref(false);
const uploadShow = ref(false);
const dynamicHeight = ref(300);
const aiModel = ref("智普清言");
const aiTypeOption: any = reactive([
  { label: "gpt-3.5-turbo", value: 1 },
  {
    label: "gpt-4",
    value: 2,
  },
  {
    label: "智普清言",
    value: 3,
  },
  {
    label: "通义千问",
    value: 4,
  },
]);
const form: any = reactive({
  text: "",
  files: "",
});

const maxSize = 20;
const heavyList = [];
for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1),
    class:
      i % 2 === 0
        ? "q-pa-md self-center bg-grey-2 text-black"
        : "q-pa-lg bg-black text-white",
  });
}

watchEffect(() => {
  console.log(uploadShow.value);

  if (uploadShow.value) {
    dynamicHeight.value = 345;
  } else {
    dynamicHeight.value = 205;
  }
});
</script>
<style lang="sass" scoped>

.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
