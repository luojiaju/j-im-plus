<template>
  <q-layout view="lHr lpR fFf">
    <q-header reveal elevated :class="`theme-${$appStore.theme}`">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          J-Im
        </q-toolbar-title>
        <themeToggle class=""></themeToggle>
        <q-btn dense flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
      </q-toolbar>
    </q-header>

    <q-drawer
      :class="`theme-${$appStore.theme}`"
      :mini="true"
      :width="80"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <left></left>
    </q-drawer>

    <q-drawer
      :class="`theme-${$appStore.theme}`"
      :mini="true"
      show-if-above
      elevated
      bordered
      :breakpoint="400"
      v-model="rightDrawerOpen"
      side="right"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container :class="`theme-${$appStore.theme} w-full h-screen`">
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import left from "@/layout/components/left/index.vue";
import themeToggle from "@/layout/views/theme-toggle.vue";
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function refresh(done: Function) {
  setTimeout(() => {
    window.location.reload();
    done();
  }, 1000);
}

onMounted(() => {
  // leftDrawerOpen.value = false
  rightDrawerOpen.value = false;
});
</script>
