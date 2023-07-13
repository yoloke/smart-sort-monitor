<template>
  <div class="set-title d-flex ai-center">
    <div class="d-flex ai-center">
      <span class="iconfont setting">&#xe638;</span>
      <span class="title">{{ title }}</span>
    </div>
    <span v-if="unit" class="unit">单位 : {{ unit }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 可以设置传来值的类型和默认值
  title: {
    type: String,
    default: "通信",
  },
  unit: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.set-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  .iconfont {
    color: rgba(22, 93, 255, 1);
    font-size: 30px;
    font-weight: 800;
  }
  .title {
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
  }
  .unit {
    margin-right: 10px;
    font-size: 14px;
    color: rgba(56, 56, 56, 1);
  }
}
</style>
