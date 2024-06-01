<template>
    <div>
        <button @click="closeWindow">关闭窗口并发送消息</button>
    </div>
</template>
  
<script setup lang="ts">
function closeWindow() {
    // 发送消息给主窗口
    window.opener.postMessage('这是从新窗口发送的消息', window.location.origin);
    // 关闭窗口
    window.close();
}
</script>
  