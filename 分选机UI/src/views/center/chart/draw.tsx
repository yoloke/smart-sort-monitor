import { defineComponent, watch, shallowReactive } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  tips: {
    type: Number,
    default: 50,
    require: true,
  },
  colorObj: {
    type: Object,
    default: () => ({
      textStyle: "#3fc0fb",
      series: {
        color: ["#00bcd44a", "transparent"],
        dataColor: {
          normal: "#03a9f4",
          shadowColor: "#97e2f5",
        },
      },
    }),
  },
  title: {
    type: String,
    default: "运行数据",
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    let scaleData = [
      {
        name: "合格等级1",
        value: 300,
      },
      {
        name: "合格等级2",
        value: 200,
      },
      {
        name: "合格等级3",
        value: 188,
      },
      {
        name: "合格等级4",
        value: 100,
      },
      {
        name: "合格等级5",
        value: 62,
      },
      {
        name: "合格等级6",
        value: 20,
      },
    ];
    // let scaleData = [
    //   {
    //     name: "合格等级1",
    //     value: 600,
    //   },
    //   {
    //     name: "合格等级2",
    //     value: 400,
    //   },
    //   {
    //     name: "合格等级3",
    //     value: 200,
    //   },
    //   {
    //     name: "合格等级4",
    //     value: 200,
    //   },
    //   {
    //     name: "合格等级5",
    //     value: 200,
    //   },
    //   {
    //     name: "合格等级6",
    //     value: 200,
    //   },
    // ];
    // var legend = [
    //   "合格等级1",
    //   "合格等级2",
    //   "合格等级3",
    //   "合格等级4",
    //   "合格等级5",
    //   "合格等级6",
    // ];
    var data = [];
    var placeHolderStyle = {
      normal: {
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        color: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0,
      },
    };

    for (var i = 0; i < scaleData.length; i++) {
      data.push(
        {
          value: scaleData[i].value,
          name: scaleData[i].name,
          itemStyle: {
            normal: {
              borderWidth: 2,
              shadowBlur: 6,
              // borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              //   {
              //     offset: 0,
              //     color: "#7777eb",
              //   },
              //   {
              //     offset: 1,
              //     color: "#70ffac",
              //   },
              // ]),
              shadowColor: "rgba(142, 152, 241, 0.6)",
            },
          },
        },
        {
          value: 10,
          name: "",
          itemStyle: placeHolderStyle,
        }
      );
    }
    // 配置项
    let options = shallowReactive({
      legend: null,
      title: null,
      // tooltip: null,
      series: null,
    });
    var value = 99;

    let colors = ["#B58EF9", "#0DA8F6", "#5DD5D7", "pink"];
    watch(
      () => props.tips,
      (val: any) => {
        options = {
          title: {
            subtext: `${value}`,
            text: props.title + "数量",
            x: "center",
            top: 96,
            textStyle: {
              fontSize: 16,
              color: "#fff",
              fontWeight: 400,
            },
            subtextStyle: {
              color: "#fff",
              fontSize: 26,
              fontWeight: 400,
            },
          },

          legend: {
            width: "90%",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
            icon: "circle",
            right: "0",
            bottom: "40",
            padding: [30, 30],
            itemGap: 18,
            data: [
              "合格等级1",
              "合格等级2",
              "合格等级3",
              "合格等级4",
              "合格等级5",
              "合格等级6",
            ],
          },
          series: [
            // 内圆
            {
              type: "pie",
              radius: ["0", "20%"],
              center: ["50%", "30%"],
              z: 0,
              itemStyle: {
                normal: {
                  color: "#293134",
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              label: {
                normal: {
                  position: "center",
                },
              },
              data: [100],
            },
            {
              type: "pie",
              radius: ["45%", "55%"],
              center: ["50%", "30%"],
              labelLine: {
                show: false,
              },
              label: {
                show: false,
                position: "center",
              },
              data: data,
              color: [
                "#9292C1",
                "#FFCA3F",
                "#FFAD3F",
                "#FF752D",
                "#FF462E",
                "#0D9BFF",
                "#704BFF",
              ],
            },
          ],
        };
      },
      {
        immediate: true,
        deep: true,
      }
    );

    return () => {
      const height = "100%";
      const width = "100%";

      return <echart options={options} height={height} width={width} />;
    };
  },
});
