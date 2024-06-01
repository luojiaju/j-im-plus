<template>
    <div class="h-full">
        <div class="w-full  flex flex-col ">
            <!-- Search Bar -->
            <div class="flex items-center bg-gray-800 p-2 rounded-md mb-4">
                <input type="text" placeholder="搜索"
                    class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none">
                <button class="ml-2 text-gray-500"><i class="fas fa-search"></i></button>
            </div>

            <q-scroll-area :style="{height: `calc(${screen.height}px - 195px)`} ">

                <!-- Online Users -->
                <div>
                    <div class="text-gray-400 mb-2">在线 — 1</div>
                    <div class="flex items-center justify-between bg-blue-700 text-white p-2 rounded-md mb-2"
                        v-for="(friend, index) in friendList">
                        <div class="flex items-center space-x-2">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-10 h-10 rounded-full">
                            <div class="flex flex-col">
                                <span>{{ friend.name }}</span>
                                <span class="text-green-500 text-xs">在线</span>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="text-gray-500"><i class="fas fa-comment"></i></button>
                            <button class="text-gray-500"><i class="fas fa-ellipsis-h"></i></button>
                        </div>
                    </div>
                </div>
            </q-scroll-area>
        </div>
    </div>
</template>
<script setup lang="ts">
const { screen } = useQuasar()

const friendList = reactive<any>([])

const getFriendList = () => {
    for (let y = 0; y < 20; y++) {
        friendList.push({
            name: 'Number Engineer',
            avatar: 'https://via.placeholder.com/40',
            status: '在线'
        })
    }
}

onMounted(() => {
    getFriendList()
})

</script>

