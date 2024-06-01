<template>
    <q-layout view="lHr lpR lFr" container :style="{ height: `calc(${screen.height}px - 50px)` }"
        class="shadow-2  rounded-borders w-full">
        <q-header :class="`theme-${$appStore.theme}`" class="border-b-2 border-r-2">
            <div class="">
                <div class="p-4  flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <img src="https://via.placeholder.com/20" alt="Rules Icon" class="w-5 h-5">
                        <span>rules</span>
                    </div>
                    <div class="flex space-x-4 ">
                        <!-- 通知 -->
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#999999">
                                <path
                                    d="M440-440h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                        </button>

                        <!-- 消息图钉 -->
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#999999">
                                <path
                                    d="M365-580Zm-5 540-40-40v-240H120v-80l80-80v-280h-40v-80h285q-18 17-32.5 37T387-760H280v314l-46 46h263q24 14 49.5 23.5T600-363v43H400v240l-40 40Zm280-600q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T541-573q17 25 43 39t56 14Zm0 80q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440Z" />
                            </svg>
                        </button>
                        <!-- 成员显示 -->
                        <button @click="right1 = !right1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#999999">
                                <path
                                    d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </q-header>

        <q-drawer v-model="left" :width="250" show-if-above :breakpoint="700" :class="$currTheme.value">
            <div class="">
                <!-- Sidebar -->
                <div class="flex flex-col">
                    <!-- Server Banner -->
                    <div class="relative">
                        <img src="https://via.placeholder.com/256x128" alt="Server Banner" class="w-full h-32 object-cover">
                        <div class="absolute top-0 left-0 w-full h-full  bg-opacity-50 flex items-center justify-center">
                            <h1 class="text-lg font-bold">Together C & C++</h1>
                        </div>
                    </div>

                    <q-scroll-area :style="{ height: `calc(${screen.height}px - 178px)` }">
                        <div class="flex flex-col">
                            <!-- Progress Bar -->
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span>3 级</span>
                                    <span>19 个助力</span>
                                </div>
                                <div class="w-full bg-gray h-2 rounded-full">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 50%;"></div>
                                </div>
                            </div>

                            <!-- Menu Items -->
                            <div class="flex-1 px-4 space-y-4 overflow-auto">
                                <div class="space-y-2">
                                    <div class="flex items-center space-x-2">
                                        <img src="https://via.placeholder.com/20" alt="Icon" class="w-5 h-5">
                                        <span>服务器指南</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <img src="https://via.placeholder.com/20" alt="Icon" class="w-5 h-5">
                                        <span>频道和身份组</span>
                                    </div>
                                </div>

                                <!-- META -->
                                <div>
                                    <h2 class="text-gray-400 text-xs">META</h2>
                                    <div class="space-y-2">
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-hashtag text-gray-400"></i>
                                            <span>rules</span>
                                        </button>
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-bullhorn text-gray-400"></i>
                                            <span>announcements</span>
                                        </button>
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-hashtag text-gray-400"></i>
                                            <span>partners</span>
                                        </button>
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-hashtag text-gray-400"></i>
                                            <span>resources</span>
                                        </button>
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-hashtag text-gray-400"></i>
                                            <span>server-suggestions</span>
                                        </button>
                                        <button class="flex items-center space-x-2">
                                            <i class="fas fa-hashtag text-gray-400"></i>
                                            <span>introductions</span>
                                        </button>
                                    </div>
                                </div>
                                <!-- C HELP -->
                                <div v-for="(index) in 10">
                                    <h2 class="text-gray-400 text-xs">C HELP</h2>
                                    <div class="space-y-2">
                                        <button class="flex items-center space-x-2"
                                            :class="{ 'bg-blue-600 text-white': index === currentChannelActive }"
                                            @click="changeChannel(index)">
                                            <i class="fas fa-comments text-gray-400"></i>
                                            <span>c-help</span>
                                            <span class="bg-blue-600 text-white text-xs px-2 rounded-full">14 New</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-scroll-area>


                </div>
            </div>
        </q-drawer>

        <!-- 状态 -->
        <q-drawer v-model="right1" side="right" :width="340" show-if-above :breakpoint="700" :class="$currTheme.value">
            <div class="">
                <div class="p-4 ">
                    <!-- Team Section -->
                    <div class="mb-4" v-for="() in 20">
                        <h3 class=" text-sm mb-2">TEAM — 2</h3>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">Jeff Galbraith (en-CA)</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2 p-2 rounded-md">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">Scott</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Staff Section -->
                    <div class="mb-4">
                        <h3 class="text-gray-400 text-sm mb-2">STAFF — 1</h3>
                        <div class="flex items-center space-x-2">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                            <div>
                                <span class="">skwrl (EN/US)</span>
                                <p class="text-gray-400 text-xs">It's all fun and games until so...</p>
                            </div>
                        </div>
                    </div>

                    <!-- GH Sponsor Section -->
                    <div>
                        <h3 class="text-gray-400 text-sm mb-2">GH SPONSOR — 19</h3>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="text-yellow-400">Alan Colón - Jobot.co...</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">Arkshine</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">brian.adams</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">By</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">CharlieKnoll</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">darshivan</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">Dr Brian of London</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">f.senn</span>
                                    <p class="text-gray-400 text-xs">正在玩 DSX v3</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full">
                                <div>
                                    <span class="">frigjord</span>
                                </div>
                            </div>
                            <!-- Add more user entries as needed -->
                        </div>
                    </div>
                </div>
            </div>
        </q-drawer>



        <q-page-container>
            <q-page>
                <chat></chat>
            </q-page>
        </q-page-container>



    </q-layout>
</template>
<script setup lang="ts">
import chat from "@/pages/home/views/private/panel/chat.vue";

const route = useRoute()
const router = useRouter()
const { screen } = useQuasar()

const { $appStore } = getCurrentInstance()?.proxy;

const { channelId, subChannelId } = route.params

const left = ref(false)
const right1 = ref(true)
const currentChannelActive = ref($appStore.menu_layout_current_channel_active)



function changeChannel(subChannelId: string) {
    $appStore.menu_layout_current_channel_active = subChannelId
    currentChannelActive.value = subChannelId
    router.push(`/layout/private/channels/2/${subChannelId}`)

}

onMounted(() => {
    left.value = false
    right1.value = true
    console.log(channelId, subChannelId);
})
</script>

<style lang="scss" scoped>
// 手机适配
.mediaPh {
    @media screen and (max-width: 768px) {
        display: none;
    }

}
</style>