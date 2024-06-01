<template>
    <q-scroll-area :style="{ height: `calc(${screen.height}px - 100px)` }">
        <div class=" p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-blue-500">


            <!-- Header Image -->
            <div class="w-full h-64 bg-cover bg-center"
                style="background-image: url('https://via.placeholder.com/1500x400');">
                <div class="flex justify-center items-center h-full bg-black bg-opacity-50">
                    <h1 class="text-4xl font-bold text-white">GALAXY</h1>
                </div>
            </div>

            <!-- Item Grid -->
            <div class="p-8">
                <h2 class="text-2xl mb-4">头像装饰</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Item 1 -->
                    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://via.placeholder.com/300x200" alt="Item 1" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl mb-2">星尘</h3>
                            <p class="text-gray-400 mb-2">US$5.99</p>
                            <p class="text-xs text-gray-500">在 Nitro 中的价格: US$4.99</p>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://via.placeholder.com/300x200" alt="Item 2" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl mb-2">黑洞</h3>
                            <p class="text-gray-400 mb-2">US$5.99</p>
                            <p class="text-xs text-gray-500">在 Nitro 中的价格: US$4.99</p>
                            <button class="w-full bg-blue-600 text-white py-2 rounded-md mt-2">花 US$5.99 购买</button>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://via.placeholder.com/300x200" alt="Item 3" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl mb-2">星座</h3>
                            <p class="text-gray-400 mb-2">US$5.99</p>
                            <p class="text-xs text-gray-500">在 Nitro 中的价格: US$4.99</p>
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg" v-for="() in 20">
                        <img src="https://via.placeholder.com/300x200" alt="Item 4" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl mb-2">日心轨道</h3>
                            <p class="text-gray-400 mb-2">US$5.99</p>
                            <p class="text-xs text-gray-500">在 Nitro 中的价格: US$4.99</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </q-scroll-area>
</template>
<script setup lang="ts">
const { screen } = useQuasar();



</script>

