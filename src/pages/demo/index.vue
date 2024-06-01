<script setup lang="ts">
import { getTest } from "@/api/test"
import useStore from "@/store"
import { invoke } from "@tauri-apps/api/tauri";

const {authStore} = useStore()

console.log(authStore.count)

function test() {
  getTest()

}

function loginTest() {
  const newWindow = window.open('/popup', 'newWindow', 'width=600,height=400');
  console.log(newWindow);
  // 监听来自新窗口的消息
  window.addEventListener('message', handleMessage);
}

function handleMessage(event: MessageEvent) {
  console.log(event);
  // 安全校验，确保消息来自同一来源
  if (event.origin === window.location.origin) {
    console.log('从新窗口接收到的信息:', event.data);
    // 在接收到消息后，移除事件监听器（可选）
    window.removeEventListener('message', handleMessage);
  }
}

async function sendNotification() {
   const res  = await invoke("greet1",{name:"hello"})
   console.log(res);
   
}

</script>

<template>
  <!-- 居中 -->
  <div class="flex justify-center items-center h-screen">
    <div class="text-center">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div class="flex flex-col">
        <div class="flex justify-center items-stretch">
          <button class="m-2" @click="authStore.count+=1" >+1</button>
          <button @click="test">发送网络请求:{{ authStore.count }}</button>
          <button class="m-2" @click="authStore.count -=1">-1</button>
        </div>
        <button @click="loginTest">登录</button>
        <router-link to="/popup">goto</router-link>
        <button @click="sendNotification">发送系统通知</button>
      </div>
    </div>
  </div> 
</template>

<style scoped></style>
