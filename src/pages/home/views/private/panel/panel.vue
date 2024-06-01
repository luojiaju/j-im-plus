<template>
    <q-layout view="lHr lpR lFr" container :style="{ height: `calc(${screen.height}px - 50px)` }"
        class="shadow-2  rounded-borders w-full">
        <q-header :class="`theme-${$appStore.theme}`" class="border-b-2 border-r-2">
            <div class="   flex flex-col">
                <!-- Top Navigation Bar -->
                <div class="flex items-center px-4 py-2">
                    <div class="flex space-x-2">
                        <button class="px-2 py-1 bg-gray-700 text-white rounded-md">好友</button>
                        <button class="px-2 py-1 bg-gray-700 text-white rounded-md">在线</button>
                        <button class="px-2 py-1 bg-gray-700 text-white rounded-md">全部</button>
                        <button class="px-2 py-1 bg-gray-700 text-white rounded-md">待定</button>
                        <button class="px-2 py-1 bg-gray-700 text-white rounded-md">已屏蔽</button>
                        <button class="px-2 py-1 bg-green-600 text-white rounded-md">添加好友</button>
                    </div>
                    <div class="ml-auto flex space-x-2">
                        <button class="text-gray-500"><i class="fas fa-bell"></i></button>
                        <button class="text-gray-500"><i class="fas fa-comments"></i></button>
                        <button class="text-gray-500" @click="right1=!right1">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#999999">
                                <path
                                    d="M40-200v-120q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v120q0 17-11.5 28.5T880-160H680q-17 0-28.5-11.5T640-200v-51q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v52q0 17-11.5 28.5T280-160H80q-17 0-28.5-11.5T40-200Zm440-120q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </q-header>

        <!-- 好友|商店|其他 -->
        <q-drawer v-model="left" :width="240" show-if-above :breakpoint="700" :class="$currTheme.value">
            <div class="flex flex-col">
                <!-- Search Bar -->
                <div class="p-4">
                    <input type="text" placeholder="寻找或开始新的对话" class="w-full px-4 py-2 rounded-md focus:outline-none">
                </div>

                <!-- Menu Items -->
                <div class="flex-1 px-4 space-y-4">
                    <div class="flex items-center space-x-2" @click="toPage('atme')"
                        :class="$appStore.menu_layout_chat_active == 'atme' ? `bg-blue-600` : ``">
                        <img src="https://via.placeholder.com/20" alt="Icon" class="w-8 h-8 ">
                        <span>好友</span>
                    </div>
                    <div class="flex items-center space-x-2" @click="toPage('Nitro')"
                        :class="$appStore.menu_layout_chat_active == 'Nitro' ? `bg-blue-600` : ``">
                        <img src="https://via.placeholder.com/20" alt="Icon" class="w-8 h-8 ">
                        <span>Nitro</span>
                    </div>
                    <div class="flex items-center space-x-2" @click="toPage('sp')"
                        :class="$appStore.menu_layout_chat_active == 'sp' ? `bg-blue-600` : ``">
                        <img src="https://via.placeholder.com/20" alt="Icon" class="w-8 h-8 ">
                        <span>商店</span>
                        <span class="bg-red-600 text-white px-2 py-1 rounded-full text-xs">新的</span>
                    </div>
                    <div class="flex flex-row items-center justify-between">
                        <div class="mt-3">私信</div>
                        <button class="py-2 rounded-md flex items-center justify-center">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Private Messages -->
            <q-scroll-area :style="{ height: `calc(${screen.height}px - 372px)` }">
                <div class="flex flex-col">
                    <div class="px-4 space-y-4">
                        <button class="w-full rounded-md  hover:bg-blue-600" v-for="(friend, index) in friendList"
                            :key="index" @click="toPage(friend.id)">
                            <div class="flex items-center rounded-md  space-x-2"
                                :class="$appStore.menu_layout_chat_active == friend.id ? `bg-blue-600` : ``">
                                <img src="https://via.placeholder.com/20" alt="Icon" class="w-8 h-8 rounded-full">
                                <div class="flex justify-start items-start flex-1 flex-col">
                                    <span>{{ friend.name }} </span>
                                    <span class="text-xs text-gray-400">正在玩 {{ friend.message }}</span>
                                </div>
                                <button class="ml-auto text-gray-400">&times;</button>
                            </div>
                        </button>
                    </div>
                </div>
            </q-scroll-area>

            <!-- User Info -->
            <div class="bg-blue-6qq00 first:absolute-bottom p-4 flex items-center space-x-2 ">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-10 h-10 rounded-full">
                <div class="flex flex-col">
                    <span>Amani</span>
                    <span class="text-green-500 text-xs">在线</span>
                </div>
                <div class="ml-auto flex space-x-2">
                    <button class="text-red-500">&micro;</button>
                    <button class="text-red-500">&times;</button>
                    <button class="text-gray-500">&#9881;</button>
                </div>
            </div>
        </q-drawer>

        <!-- 状态 -->
        <q-drawer v-model="right1" side="right" :width="340" show-if-above :breakpoint="700" :class="$currTheme.value">
            <div class="flex items-center justify-center  ">
                <div class="w-full max-w-sm  rounded-lg  overflow-hidden">
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center space-x-3">
                            <div class="w-16 h-16 rounded-full  flex items-center justify-center">
                                <img src="https://via.placeholder.com/64" alt="User Icon" class="w-12 h-12">
                            </div>
                        </div>
                    </div>
                    <div class="p-4   ">
                        <div class="p-4  ">
                            <div class="text-xl font-semibold">amin</div>
                            <div class="">admin_bey_plus</div>
                            <div class="mt-2">
                                <div class="">成员加入时间</div>
                                <div class="">2024年3月21日</div>
                            </div>
                            <div class="mt-2">
                                <div class="">备注</div>
                                <div class="">dfg</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </q-drawer>



        <q-page-container>
            <q-page>
                <router-view></router-view>
            </q-page>
        </q-page-container>



    </q-layout>
</template>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { screen } = useQuasar()

const { $appStore } = getCurrentInstance()?.proxy;

const { id } = route.params

const left = ref(false)
const right1 = ref(true)

const friendList = reactive<any>([])


function toPage(params: string) {
    switch (params) {
        case 'atme':
            $appStore.menu_layout_chat_active = 'atme'
            router.push("/layout/private/panel/@me/atme")
            break;
        case 'Nitro':
            break;
        // $appStore.menu_layout_chat_active = 'Nitro'
        // router.push("/layout/private/panel/@me/nitro")
        case 'sp':
            $appStore.menu_layout_chat_active = 'sp'
            router.push("/layout/private/panel/sp")
            break;
        default:
            $appStore.menu_layout_chat_active = params
            router.push(`/layout/private/panel/@me/${params}`)
    }

}

onMounted(() => {
    left.value = false
    right1.value = true
    console.log(id);

    for (let i = 0; i < 10; i++) {
        friendList.push({
            id: '1' + i,
            name: 'amin' + i,
            avatar: 'https://via.placeholder.com/64',
            message: 'amin',
            time: '2024-3-21',
            unread: 1,
            isActive: true
        })
    }

})






</script>

<style lang="scss" scoped>
// 手机适配
.mediaPh {
    @media screen and (max-width: 768px) {
        display: none;
    }

}</style>