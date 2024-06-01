<template>
    <q-layout view="LHh Lpr lff" container  
        class="rounded-borders w-full">

        <q-drawer ref="leftDrawer" side="left" mini v-model="left" show-if-above :breakpoint="700">
            <q-scroll-area class="fit" :class="$currTheme.value">
                <q-list>
                    <q-item clickable 
                    :active="$appStore.menu_layout_active == '/layout/private/panel/@me/atme'"
                     active-class="active-line">
                        <img src="@/assets/images/avater.png" @click="changePath('/layout/private/panel/@me/atme')" />
                    </q-item>
                    <q-item clickable v-ripple v-for="index in 5"
                     :active="$appStore.menu_layout_active == '/layout/private/channels/' + index+'/'+index" 
                     @click="changePath(`/layout/private/channels/${index}/${index}`)"
                        active-class="active-line">
                        <q-item-section avatar>
                            <q-btn  icon="home" round />
                        </q-item-section>
                        <div>
                            <q-separator color="red"></q-separator>

                        </div>

                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>


        
        <q-page-container class="w-full h-full">
            <q-page>
                <RouterView></RouterView>
            </q-page>
        </q-page-container>
    </q-layout>


</template>

<script setup lang="ts">
const { screen } = useQuasar()
const { proxy } = getCurrentInstance()

const left = ref(false)


function changePath(to:string){
    proxy.$appStore.menu_layout_active = to
    proxy.$router.push(to)
    proxy.$appStore.menu_layout_active_path = proxy.$route.fullPath
    
}


</script>

<style lang="scss" scoped>
.active-line {
    // 圆形
    
    border-radius: 2px;
    border-left: 3px solid #541283;
}
</style>