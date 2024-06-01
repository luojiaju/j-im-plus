<template>
  <div class="-mt-2 w-full h-full">
    <q-list bordered padding class="rounded-borders">
      <div v-for="(menu, index) in menuList" :key="index">
        <q-item
          clickable
          v-ripple
          :active="appStore.menuActive === menu.name"
          @click="menuClickHandle(menu)"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="md" :name="menu.meta.icon" />
          </q-item-section>
          <q-tooltip anchor="center right" self="center left">{{
            menu.meta.title
          }}</q-tooltip>
        </q-item>
        <q-separator v-show="menu.meta.line" size="5px" color="accent" spaced />
      </div>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store/index";
const { appStore } = useStore();
const router = useRouter();
const menuList = reactive<any>(router.options.routes[0].children);

function menuClickHandle(menu: any) {
  appStore.menuActive = menu.name;
  router.replace(menu.path);
}
</script>

<style lang="css">
.my-menu-link {
  border-left: 5px solid rgb(99, 7, 180);
  border-radius: 5px;
}
</style>
