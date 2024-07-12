<template>
  <div class="app" :style="{'background-image': 'url('+imageUrl+') '}">
   
    <router-view />
  </div>
</template>
<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const imageUrl = ref(require("./assets/main-bg.png"))
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/setting") {
      imageUrl.value = require("./assets/set-bg.webp"); // 设置路径为 '/setting' 时的背景图片
    } else {
      imageUrl.value = require("./assets/main-bg.png"); // 其他路径的背景图片
    }
  }
);
</script>
<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  // background-image: url("./assets/fff.png");
  background-size: cover;
  background-position: center center;
  overflow: hidden !important;
}
</style>
