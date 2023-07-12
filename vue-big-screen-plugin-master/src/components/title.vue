<template>
  <div class="title-container">
    <img src="@/assets/img/title-icon.webp" alt="" />
    <span class="title">{{title}}</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    // 可以设置传来值的类型和默认值
    title: {
        type:String,
        default: '运行数据'
    }
  })
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid rgba(25, 252, 222, 0.2);
  img {
    width: 20px;
    margin-left: 20px;
  }
  .title {
    margin-left: 10px;
    font-size: 22px;
    color: rgba(255, 255, 255, 1);
    
  }
}
</style>
