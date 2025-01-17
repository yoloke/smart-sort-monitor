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
    let data = reactive([]);
    let data2 = reactive([]);
    // 初始化最大值和最小值为初始数据集的第一个数据
    let minValue = 0;
    let maxValue = 0;
    // 计算当前数据集的最大值和最小值
    data.forEach((item) => {
      const value = item.value[1];
      if (value < minValue) {
        minValue = value;
      }
      if (value > maxValue) {
        maxValue = value;
      }
    });
    function calculateMinMax() {
      if (data.length > 0) {
        minValue = data[0].value[1];
        maxValue = data[0].value[1];

        for (let i = 1; i < data.length; i++) {
          const value = data[i].value[1];
          if (value < minValue) {
            minValue = value;
          }
          if (value > maxValue) {
            maxValue = value;
          }
        }
      }
    }
    let x = 0;
    let value = Math.random().toFixed(2);

    function randomData() {
      x = x + 1;
      value = Math.random().toFixed(2);
      return {
        name: x.toString(),
        value: [x, value],
      };
    }
    function randomData2() {
      value = Math.random().toFixed(2);

      return {
        name: x.toString(),
        value: [x, value],
      };
    }
    // 配置项
    const options = reactive({
      legend: {
        icon: "rect",
        top: "5%",
        right: "5%",
        itemWidth: 12,
        itemHeight: 2,
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
        bottom: "16%",
        left: "8%",
        right: "8%",
      },
      xAxis: {
        type: "category",

        axisLine: {
          lineStyle: {
            color: "#324048",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          interval: 0,
          textStyle: {
            color: "#556677",
          },
          // 默认x轴字体大小
          fontSize: 12,
          // margin:文字到x轴的距离
          margin: 15,
        },
        boundaryGap: false,
      },
      dataZoom: [
        {
          show: true,
          height: 8,
          bottom: 32,
          handleSize: "100%",
          handleStyle: {
            color: "rgba(255, 255, 255,0.5)",
          },
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
          fillerColor: "rgba(42, 131, 223,1)",
          borderColor: "rgba(66, 130, 197,1)",
          backgroundColor: "rgba(12, 67, 124,0.5)",
          showDataShadow: false,
          brushSelect: false,
        },
        {
          type: "inside",
        },
      ],
      yAxis: [
        // 温度
        {
          type: "value",
          scale: true, // y轴的起点 不从0开始  按照数值更智能化 脱离0值比例
          position: "left",
          // minInterval: 0.5,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#324048",
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
          // minInterval: 0.5,
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
              color: "#324048",
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
          data: data,
          symbolSize: 1, // 数据点的大小
          symbol: "circle", // 数据点的形状为圆形
          smooth: true, // 是否平滑显示曲线
          yAxisIndex: 0, // 使用的y轴索引，默认为0
          showSymbol: true, // 是否显示数据点的标记
          lineStyle: {
            width: 3,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,

                color: "rgba(77, 177, 219, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(77, 177, 219, 1)",
              },
            ]),
            shadowColor: "rgba(115,221,255, 0.3)",
            shadowBlur: 10,
            shadowOffsetY: 2,
          },
          itemStyle: {
            normal: {
              color: "rgba(77, 177, 219, 1)",
            },
          },
        },
        {
          name: "气压", // 数据系列的名称
          type: "line", // 数据系列的类型为线型
          data: data2,
          symbolSize: 1, // 数据点的大小
          symbol: "circle", // 数据点的形状为圆形
          smooth: true, // 是否平滑显示曲线
          yAxisIndex: 1, // 使用的y轴索引，默认为0
          showSymbol: true, // 是否显示数据点的标记
          lineStyle: {
            width: 3, // 曲线的宽度
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: "rgba(121, 72, 234, 0.3)" }, // 渐变色起始颜色
              { offset: 1, color: "rgba(121, 72, 234, 1)" }, // 渐变色结束颜色
            ]),
            shadowColor: "rgba(158,135,255, 0.3)", // 阴影颜色
            shadowBlur: 10, // 阴影模糊度
            shadowOffsetY: 2, // 阴影垂直偏移量
          },
          itemStyle: {
            normal: {
              color: "rgba(121, 72, 234, 1)",
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

    setInterval(function () {
      if (x > 80) {
        data.shift();
        data.push(randomData());
        options.series[0].data = data;

        data2.shift();
        data2.push(randomData2());
        options.series[1].data = data2;
      } else {
        data.push(randomData());
        calculateMinMax();
        options.series[0].data = data;
        data2.push(randomData2());

        options.series[1].data = data2;
      }
    }, 1000);
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