<template>
  <div id="rightecharts_second">
    <div style="height: 10%">
      <p
        style="
          color: white;
          text-align: center;
          font-size: 14px;
          color: white;
          text-shadow: 0 0 8px rgb(0, 233, 249);
        "
      >
        近30天告警数据分类统计
      </p>
    </div>
    <div id="rightecharts_two" style="height: 90%"></div>
  </div>
</template>

<script>
export default {
  name: "rightecharts-second",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initsecond();
    });
  },
  methods: {
    initsecond() {
      let myChart = this.$echarts.init(
        document.getElementById("rightecharts_two")
      );
      let option = {
        // backgroundColor: '#013954',
        title: {
          // text: 'Pie',
          left: "center",
          top: 20,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "告警类型 <br/>{b} : {c} ({d}%)",
        },
        // legend: {
        //     orient: 'vertical',
        //     // left: 20,
        //     // top: 20,
        //     data: ['睡觉', '离岗', '玩手机', '抽烟','超时审讯'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        series: [
          {
            name: "水压告警",
            type: "pie",
            radius: "45%",
            center: ["50%", "50%"],
            data: [
              {
                value: 210,
                name: "水压告警",
              },
              // {
              //   value: 235,
              //   name: "用水量告警",
              // },
              {
                value: 274,
                name: "超时告警",
              },
              {
                value: 310,
                name: "用水量告警",
              },
              // {
              //   value: 435,
              //   name: "超时审讯",
              // },
            ],
            roseType: "radius",
            label: {
              color: "#ccc",
            },
            labelLine: {
              lineStyle: {
                color: "#888",
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  //设置饼图分块颜色
                  var colorList = [
                    "#00B2EE",
                    // "	#4876FF",
                    "#5CACEE",
                    "#6495ED",
                    "#63B8FF",
                  ];
                  return colorList[params.dataIndex % colorList.length];
                },
              },
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
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
#rightecharts_second {
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
