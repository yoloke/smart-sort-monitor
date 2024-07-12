<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">加载中</dv-loading>

      <div v-else class="host-body">
        <div class="title d-flex jc-between ai-center">
          <span class="title-logo"></span>
          <span class="title-text d-flex ai-center">传感器自动分选机</span>
          <span class="title-time">
            20230531a
          </span>
        </div>

        <div class="body-box">
          <div class="center-box">
            <div class="column1">
              <div class="box-item">
                <Title></Title>
              </div>
              <div class="box-item">
                <Title></Title>
                <LineChart></LineChart>
              </div>
            </div>
            <div class="column2 box-item">
              <Title></Title>
              <BarChart></BarChart>
            </div>
          </div>
          <div class="bottom-box">
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[0].tips" :colorObj="rate[0].colorData" />
            </div>
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[1].tips" :colorObj="rate[1].colorData" />
            </div>
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[2].tips" :colorObj="rate[2].colorData" />
            </div>
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[3].tips" :colorObj="rate[3].colorData" />
            </div>
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[0].tips" :colorObj="rate[0].colorData" />
            </div>
            <div class="box-item">
              <Title></Title>
              <chart :tips="rate[0].tips" :colorObj="rate[0].colorData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Chart from "../center/chart/draw";
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { formatTime } from "@/utils/index";
import { WEEK } from "@/constant/index";
import useDraw from "@/utils/useDraw";
import { title, subtitle, moduleInfo } from "@/constant/index";
import CenterLeft1 from "../centerLeft1/index.vue";
import LineChart from "@/views/lineChart/index.vue";
import BarChart from "@/views/barChart/index.vue";
import CenterLeft2 from "../centerLeft2/index.vue";
import Center from "../center/index.vue";
import CenterRight1 from "../centerRight1/index.vue";
import CenterRight2 from "../centerRight2/index.vue";
import BottomLeft from "../bottomLeft/index.vue";
import BottomRight from "../bottomRight/index.vue";
import Title from "@/components/title.vue";
const rate = reactive([
  {
    id: "Pipeline1",
    tips: 60,
    colorData: {
      textStyle: "#3fc0fb",
      series: {
        color: ["#00bcd44a", "transparent"],
        dataColor: {
          normal: "#03a9f4",
          shadowColor: "#97e2f5",
        },
      },
    },
  },
  {
    id: "Pipeline2",
    tips: 70,
    colorData: {
      textStyle: "#67e0e3",
      series: {
        color: ["#faf3a378", "transparent"],
        dataColor: {
          normal: "#ff9800",
          shadowColor: "#fcebad",
        },
      },
    },
  },
  {
    id: "Pipeline3",
    tips: 40,
    colorData: {
      textStyle: "#67e0e3",
      series: {
        color: ["#faf3a378", "transparent"],
        dataColor: {
          normal: "#ff9800",
          shadowColor: "#fcebad",
        },
      },
    },
  },
  {
    id: "Pipeline4",
    tips: 40,
    colorData: {
      textStyle: "#67e0e3",
      series: {
        color: ["#faf3a378", "transparent"],
        dataColor: {
          normal: "#ff9800",
          shadowColor: "#fcebad",
        },
      },
    },
  },
  {
    id: "Pipeline5",
    tips: 40,
    colorData: {
      textStyle: "#67e0e3",
      series: {
        color: ["#faf3a378", "transparent"],
        dataColor: {
          normal: "#ff9800",
          shadowColor: "#fcebad",
        },
      },
    },
  },
  {
    id: "Pipeline6",
    tips: 40,
    colorData: {
      textStyle: "#67e0e3",
      series: {
        color: ["#faf3a378", "transparent"],
        dataColor: {
          normal: "#ff9800",
          shadowColor: "#fcebad",
        },
      },
    },
  },
]);
// * 颜色
const decorationColors = ["#568aea", "#000000"];
// * 加载标识
const loading = ref<boolean>(true);
// * 时间内容
const timeInfo = reactive({
  setInterval: 0,
  dateDay: "",
  dateYear: "",
  dateWeek: "",
});
// * 适配处理
const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();
// 生命周期
onMounted(() => {
  cancelLoading();
  handleTime();
  // todo 屏幕适应
  windowDraw();
  calcRate();
});

onUnmounted(() => {
  unWindowDraw();
  clearInterval(timeInfo.setInterval);
});

// methods
// todo 处理 loading 展示
const cancelLoading = () => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
};

// todo 处理时间监听
const handleTime = () => {
  timeInfo.setInterval = setInterval(() => {
    const date = new Date();
    timeInfo.dateDay = formatTime(date, "HH: mm: ss");
    timeInfo.dateYear = formatTime(date, "yyyy-MM-dd");
    timeInfo.dateWeek = WEEK[date.getDay()];
  }, 1000);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>
