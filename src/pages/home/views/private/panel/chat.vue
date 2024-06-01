<template>
    <q-scroll-area :style="{ height: `calc(${screen.height}px - 200px)` }">
        <div v-for="(index) in 20" class="m-5">

            <div class="border-2 h-1 w-full flex justify-center" v-if=" index % 5 == 0">
                <span class="-mt-3">2024年5月31日</span>
            </div>

            <div class="hover:border-2 p-2">
                <q-chat-message :text="['Have you seen Quasar?']" sent text-color="white" bg-color="primary">
                    <template v-slot:name>me</template>
                    <template v-slot:stamp>7 minutes ago</template>
                    <template v-slot:avatar>
                        <img class="q-message-avatar q-message-avatar--sent" src="https://cdn.quasar.dev/img/avatar4.jpg">
                    </template>
                </q-chat-message>
            </div>

            <div class="hover:border-2 p-2">
                <q-chat-message bg-color="amber">
                    <template v-slot:name>Mary</template>
                    <template v-slot:avatar>
                        <img class="q-message-avatar q-message-avatar--received"
                            src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </template>

                    <div>
                        Already building an app with it...
                        <img src="https://cdn.quasar.dev/img/discord-qeart.png" class="my-emoji">
                    </div>

                    <q-spinner-dots size="2rem" />
                </q-chat-message>
            </div>
        </div>
    </q-scroll-area>

    <div class="absolute-bottom mb-20 p-4 " v-show="uploadShow">
        <upload></upload>
    </div>
    <div class="absolute-bottom  border-2 flex justify-between items-center p-4 m-4" :class="$currTheme.value">

        <div class="flex items-center space-x-2 w-full flex-row">
            <button @click="handleUpload" class="bg-gray-700 rounded-full p-2 hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </button>
            <q-input class="flex-1" rows="2" v-model="form.text" filled label="消息@amin" type="text" autofocus>
            </q-input>
            <div class="flex space-x-2">
                <button class="bg-gray-700 rounded-full p-2 hover:bg-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#999999">
                        <path
                            d="M480-40q-149 0-254.5-42.5T120-200q0-32 20-57.5t56-45.5l65 58q-24 8-42.5 20.5T200-200q0 26 81 53t199 27q118 0 199-27t81-53q0-12-18.5-24.5T699-245l65-58q36 20 56 45.5t20 57.5q0 75-105.5 117.5T480-40Zm0-160q-22 0-42.5-7.5T400-230L148-453q-13-11-20.5-27t-7.5-33v-80q0-17 6.5-33t19.5-27l252-235q17-16 38-24t44-8q23 0 44 8t38 24l252 235q13 11 19.5 27t6.5 33v80q0 17-7.5 33T812-453L560-230q-17 15-37.5 22.5T480-200Zm-4-188q14 0 26.5-4.5T526-407l222-197-240-226q-7-5-14-7.5t-15-2.5q-8 0-15 2.5t-12 7.5L208-600l218 193q11 10 23.5 14.5T476-388ZM360-550q21 0 35.5-14.5T410-600q0-21-14.5-35.5T360-650q-21 0-35.5 14.5T310-600q0 21 14.5 35.5T360-550Zm50 54q43 21 90.5 13.5T584-522q34-29 44.5-73T618-678L410-496Zm70-174q21 0 35.5-14.5T530-720q0-21-14.5-35.5T480-770q-21 0-35.5 14.5T430-720q0 21 14.5 35.5T480-670Zm-2 56Z" />
                    </svg>
                </button>
                <button class="bg-gray-700 rounded-full p-2 hover:bg-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#FFFF55">
                        <path
                            d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { screen } = useQuasar();
import upload from "@/components/upload/index.vue";

const uploadShow = ref(false);
const dynamicHeight = ref(300);

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


function handleUpload() {
    uploadShow.value = !uploadShow.value
}
watchEffect(() => {
    console.log(uploadShow.value);

    if (uploadShow.value) {
        dynamicHeight.value = 305;
    } else {
        dynamicHeight.value = 155;
    }
});
</script>
<style lang="sass" scoped>

.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
  