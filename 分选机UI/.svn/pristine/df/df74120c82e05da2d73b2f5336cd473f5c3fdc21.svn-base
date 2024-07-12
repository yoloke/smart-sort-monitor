<template>
  <div class="title-container" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <img src="@/assets/img/title-icon.webp" alt="" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 可以设置传来值的类型和默认值
  title: {
    type: String,
    default: "运行数据",
  },
  bg: {
    type: String,
    default: "/title/3.webp",
  },
});
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  // background-color: pink;
  // background-image: url("@/assets/img/title/2.webp");
  background-size: 100% 100%;
  // background-position: center center;
  // border-bottom: 1px solid rgba(25, 252, 222, 0.2);
  img {
    width: 20px;
    margin-left: 16px;
  }
  .title {
    margin-left: 10px;
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
