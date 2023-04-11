<template>
  <div id="decharts">
    <div id="echarts" style="height: 100%"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echarts",
  data() {
    return {};
  },
  mounted() {
    this.initfirst();
  },
  methods: {
    initfirst() {
      let myChart = this.$echarts.init(document.getElementById("echarts"));
      let option = {
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 12,
          },
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
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "10%",
          left: "2%",
          right: "7%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          boundaryGap: false,
          data: ["08:01", "08:02", "08:03", "08:04", "08:05", "08:06"],
          //设置轴线的属性
          axisLine: {
            lineStyle: {
              color: "#a6bde9",
            },
          },
        },
        yAxis: {
          boundaryGap: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#a6bde9",
              fontSize: 10,
            },
          },
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            lineHeight: 40,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#283352",
              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#283352",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "昨日",
            type: "line",
            smooth: true, //是否平滑
            showSymbol: false,
            symbol: "circle",
            lineStyle: {
              normal: {
                width: 2,
                color: "#19a3df",
              },
            },
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(80,141,255,0.39)",
                  },
                  {
                    offset: 0.34,
                    color: "rgba(56,155,255,0.25)",
                  },
                  {
                    offset: 1,
                    color: "rgba(38,197,254,0.00)",
                  },
                ]),
              },
            }, //区域颜色渐变
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
            },
            itemStyle: {
              color: "#00DAFF",
              borderColor: "rgb(0,115,100)",
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0)",
              shadowBlur: 0,
              shadowOffsetY: 0,
              shadowOffsetX: 0,
            },
            tooltip: {
              show: true,
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
          },
        ],
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
#decharts {
  width: 100%;
  height: 100%;
}
#echarts {
  height: 100%;
  width: 100%;
  display: flex;
  /* padding-top: 7%; */
}
</style>
