<template>
  <div id="rightecharts_third">
    <div style="height: 7%">
      <p
        style="
          color: white;
          text-align: center;
          font-size: 14px;
          color: white;
          text-shadow: 0 0 8px rgb(0, 233, 249);
        "
      >
        近30天设备在线率统计
      </p>
    </div>
    <div id="rightecharts_three" style="height: 90%"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "rightecharts-third",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts();
    });
  },
  methods: {
    initEcharts() {
      var data = {
        city: [
          "学院",
          "食堂",
          "公寓",
          "公共部分",
          "后勤",
          // "吴官营乡",
          // "小寨镇",
          // "鸡泽县",
        ],
        num: ["40", "60", "32", "85", "50", "40", "20", "50"],
      };
      let myChart = this.$echarts.init(
        document.getElementById("rightecharts_three")
      );
      let option = {
        // backgroundColor: "#0e1c47",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255,255,255,0)", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255,255,255,1)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(255,255,255,0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        },
        grid: {
          // top: "18%",
          left: "1%",
          right: "5%",
          bottom: "14%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,

              lineStyle: {
                color: 'color:"#092b5d"', //线条颜色
              },
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#ccc",
                margin: 15,
              },
              formatter: function (data) {
                return data;
              },
            },
            axisTick: {
              show: false,
            },
            data: data.city,
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 100,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#284785",
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#cccc",
              },
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#cccc",
              },
              formatter: function (value) {
                if (value === 0) {
                  return value;
                }
                return value + "%";
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "在线设备",
            smooth: true, //是否平滑
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#7c80f4", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            itemStyle: {
              color: "rgba(255,255,255,.8)",
              borderColor: "#646ace",
              borderWidth: 2,
            },
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: [" {a|{c}%}"].join(","),
                rich: {
                  a: {
                    color: "#fff",
                    align: "center",
                  },
                },
              },
            },
            tooltip: {
              show: true,
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(124, 128, 244,.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(124, 128, 244, 0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: data.num,
          },
        ],
      };
      myChart.setOption(option);

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      //echarts图表自适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
#rightecharts_third {
  width: 100%;
  height: 100%;

  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25);
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  border-top-left-radius: 10%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 1%;
  backdrop-filter: blur(8px);
}
</style>
