<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">加载中</dv-loading>
      <!-- 展示页面 -->
      <div v-else class="set-body">
        <div class="title d-flex jc-between ai-end">
          <span class="title-logo"></span>
          <span class="title-text d-flex ai-center">传感器自动分选机</span>
          <div>
            <span class="title-time">版本号：20230531a</span>
            <span class="iconfont setting" @click="router.push('/')">
              &#xe6ff;
            </span>
          </div>
        </div>

        <div class="body-box">
          <div class="column1">
            <div class="column1-1">
              <set-title title="通信" />
              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label="通道1" name="合格等级1">
                  <a-select
                    v-model:value="formState.password"
                    placeholder="Basic usage" />
                </a-form-item>

                <a-form-item label="通道2" name="通道2">
                  <a-select
                    v-model:value="formState.password"
                    placeholder="Basic usage" />
                </a-form-item>
              </a-form>
            </div>
            <div class="column1-2">
              <set-title title="基本参数" />

              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label="传感器型号" name="合格等级1">
                  <a-select
                    v-model:value="formState.password"
                    placeholder="Basic usage" />
                </a-form-item>

                <a-form-item label="满量程" name="通道2">
                  <a-select
                    v-model:value="formState.password"
                    placeholder="Basic usage" />
                </a-form-item>
                <a-form-item label="测试项目" name="通道2" layout="Vertical">
                  <a-checkbox-group v-model:value="formState['checkbox-group']">
                    <a-row>
                      <a-col
                        :span="12"
                        v-for="(item, index) in dd"
                        :key="index">
                        <a-checkbox :value="item" style="line-height: 32px">
                          {{ item }}
                        </a-checkbox>
                      </a-col>
                    </a-row>
                  </a-checkbox-group>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
            <div class="column1-3">
              <set-title title="模拟传感器专用" unit="Kpa" />

              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label="满量程区间" name="满量程区间">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="满量程区间" name="满量程区间">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
          </div>
          <div class="column2">
            <div class="column2-1">
              <set-title title="常压参数" unit="Kpa" />
              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
            <div class="column2-2">
              <set-title title="加压参数" unit="Kpa" />
              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label=" 合格等级1" name=" 合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item
                  label=" 加压延时"
                  name=" 合格等级1"
                  :label-col="{ span: 7 }"
                  :wrapper-col="{ span: 16 }">
                  <a-row class="d-flex  ai-center">
                    <a-col :span="9"><a-input placeholder=""></a-input></a-col>
                    <a-col :span="1"></a-col>
                    <a-col :span="2"><span>ms</span></a-col>
                  </a-row>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
          </div>
          <div class="column3">
            <div class="column3-1">
              <set-title title="BIN参数" />
              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>

                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-form-item label="合格等级1" name="合格等级1">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="20">
                      <a-select
                        v-model:value="formState.password"
                        placeholder="Basic usage" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2"><a-checkbox></a-checkbox></a-col>
                  </a-row>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
            <div class="column3-2">
              <set-title title="测漏参数" unit="Kpa" />
              <a-form
                :model="formState"
                name="basic"
                style="margin: auto"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 16 }"
                :colon="false">
                <a-form-item label="满量程区间" name="满量程区间">
                  <a-row class="d-flex jc-center ai-center">
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2">
                      <span class="d-flex jc-center ai-center">~</span>
                    </a-col>
                    <a-col :span="9">
                      <a-input
                        style="width: 100%; text-align: center"
                        placeholder="0.000" />
                    </a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="2">
                      <a-checkbox></a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-button type="primary" class="button-form">保存</a-button>
              </a-form>
            </div>
          </div>
          <div class="column4"><set-title title="操作日志" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const dd = ["通信测试", "侧漏测试", "常压测试", "加压测试"];
import { ref, reactive, onMounted, onUnmounted } from "vue";

import useDraw from "@/utils/useDraw";

import SetTitle from "@/components/set-title.vue";
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

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped>
@mixin common-styles {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(222, 225, 230, 0.6);
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: -1;
  }
}

#index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;

  .bg {
    width: 100%;
    height: 100%;
    padding: 0 16px 0 16px;
  }

  .set-body {
    height: 100%;
    .title {
      height: 42px;
      margin: 30px 0;
      .title-logo {
        width: 320px;
        height: 42px;
        background-image: url("../../assets/logo-blue.webp");
        background-size: cover;
        background-repeat: no-repeat;
      }

      .title-text {
        height: 100%;
        font-family: "MyFont";
        font-size: 34.28px;
        font-weight: 800;
        letter-spacing: 1.03px;
        color: #383838;
      }
      .title-time {
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: right; /* 将文本内容右对齐 */
        color: #383838;
        width: 320px;
        margin-right: 20px;
      }
      .iconfont.setting {
        font-size: 30px;
        transition: transform 0.3s ease;
        color: #165dff;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .body-box {
      display: grid;
      grid-template-columns: repeat(3, 2fr) 1fr;
      grid-gap: 16px;
      height: 89%;

      .column1 {
        display: grid;
        grid-template-rows: 1.7fr 3fr 2fr;
        grid-gap: 16px;
        :deep() .ant-form {
          .ant-form-item {
            margin-bottom: 32px;
          }
          label {
            font-size: 16px;
          }
        }

        .column1-1,
        .column1-2,
        .column1-3 {
          @include common-styles;
        }
      }

      .column2 {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-gap: 16px;
        :deep() .ant-form {
          .ant-form-item {
            margin-bottom: 32px;
          }
        }

        .column2-1,
        .column2-2 {
          @include common-styles;
        }
      }

      .column3 {
        display: grid;
        grid-template-rows: 7fr 2fr;
        grid-gap: 16px;
        :deep() .ant-form {
          .ant-form-item {
            margin-bottom: 22px;
          }
        }

        .column3-1,
        .column3-2 {
          @include common-styles;
        }
      }

      .column4 {
        @include common-styles;
      }
    }

    .center-box .column1,
    .center-box .column2,
    .center-box .column3,
    .center-box .column4 {
    }
  }

  .box-item {
    border-radius: 6px;
    background: rgba(222, 225, 230, 0.5);
  }
}
:deep() .ant-form {
  .ant-form-item-label > label {
    color: rgba(0, 0, 0, 1);
    font-size: 15px;
  }
}
.button-form {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
