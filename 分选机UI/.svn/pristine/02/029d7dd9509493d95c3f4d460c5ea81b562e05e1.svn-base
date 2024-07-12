import { defineComponent, ref, watch, reactive } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"];
    // 配置项
    const options = reactive({
      legend: {
        icon: "circle",
        top: "5%",
        right: "5%",
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
          color: "#556677",
        },
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: "#fff",
        textStyle: {
          color: "#5c6c7c",
        },
        padding: [10, 10],
        extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
      },
      grid: {
        bottom: "18%",
        left: "8%",
        right: "8%",
      },
      xAxis: {
        type: "category",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11],
        axisLine: {
          lineStyle: {
            color: "#DCE2E8",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          // show: false,
          interval: 0,
          textStyle: {
            color: "#556677",
          },
          // 默认x轴字体大小
          fontSize: 12,
          // margin:文字到x轴的距离
          margin: 15,
        },
        axisPointer: {
          label: {
            // padding: [11, 5, 7],
            padding: [0, 0, 10, 0],

            // 这里的margin和axisLabel的margin要一致!
            margin: 15,
            // 移入时的字体大小
            fontSize: 12,
            backgroundColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#fff", // 0% 处的颜色
                },
                {
                  // offset: 0.9,
                  offset: 0.86,
                  /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                        
                        */
                  color: "#fff", // 0% 处的颜色
                },
                {
                  offset: 0.86,
                  color: "#33c0cd", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#33c0cd", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        boundaryGap: false,
      },
      yAxis: [
        // 温度
        {
          type: "value",
          scale: true, // y轴的起点 不从0开始  按照数值更智能化 脱离0值比例
          position: "left",
          minInterval: 0.5,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#DCE2E8",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 10,
            },
            formatter: "{value} ℃",
          },
          splitLine: {
            show: false,
          },
        },
        // 气压
        {
          type: "value",
          position: "right",
          minInterval: 0.4,
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 10,
            },
            formatter: "{value} Pa",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#DCE2E8",
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "温度",
          type: "line",
          data: [22, 54, 33, 22, 11, 55, 77, 88, 54, 77],
          symbolSize: 1,
          symbol: "circle",
          smooth: true, // 平滑曲线
          yAxisIndex: 0,
          showSymbol: true, // 是否显示数据点的标记
          lineStyle: {
            width: 3,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,

                color: "#73DDFF",
              },
              {
                offset: 1,
                color: "#73DD39",
              },
            ]),
            shadowColor: "rgba(115,221,255, 0.3)",
            shadowBlur: 10,
            shadowOffsetY: 2,
          },
          itemStyle: {
            normal: {
              color: colorList[1],
              borderColor: colorList[1],
              label: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: 12,
                  color: "#fff",
                },
                formatter: (params) => {
                  if (options.series[0].data.length - 1 == params.dataIndex) {
                    return params.value + " ℃";
                  } else {
                    return "";
                  }
                },
              },
            },
          },
        },
        {
          name: "气压", // 数据系列的名称
          type: "line", // 数据系列的类型为线型
          data: [1,3,4,5,6,7,8,1,4,1],
          symbolSize: 1, // 数据点的大小
          symbol: "circle", // 数据点的形状为圆形
          smooth: true, // 是否平滑显示曲线
          yAxisIndex: 1, // 使用的y轴索引，默认为0
          showSymbol: true, // 是否显示数据点的标记
          lineStyle: {
            width: 3, // 曲线的宽度
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: "#9effff" }, // 渐变色起始颜色
              { offset: 1, color: "#9E87FF" }, // 渐变色结束颜色
            ]),
            shadowColor: "rgba(158,135,255, 0.3)", // 阴影颜色
            shadowBlur: 10, // 阴影模糊度
            shadowOffsetY: 2, // 阴影垂直偏移量
          },
          itemStyle: {
            normal: {
              color: colorList[0], // 数据点的颜色
              borderColor: colorList[0], // 数据点边框的颜色
              label: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: 12,
                  color: "#fff",
                },
                formatter: (params) => {
                  if (options.series[1].data.length - 1 == params.dataIndex) {
                    return params.value + " Pa";
                  } else {
                    return "";
                  }
                },
              },
            },
          },
        },
      ],
      // toolbox: {
      //   show: true, //显示工具箱
      //   feature: {
      //     dataZoom: {
      //       yAxisIndex: "none",
      //     }, //数据缩放
      //     dataView: { readOnly: false }, //数据视图只读
      //     magicType: { type: ["line", "bar"] }, //魔法类型
      //     restore: {}, //重置
      //     saveAsImage: {}, //保存图片
      //   },
      // },
    });
   
    watch(
      () => props.cdata,
      (val) => {},
      {
        immediate: true,
      }
    );
    return () => {
      const height = "380px";
      const width = "100%";

      return <echart options={options} height={height} width={width} />;
    };
  },
});
