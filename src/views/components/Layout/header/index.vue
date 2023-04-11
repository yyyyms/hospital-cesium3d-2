<template>
  <div id="header">
    <dv-decoration-1
      style="width: 200px; height: 50px; margin-left: 1%; margin-top: 0.8%"
    />
    <dv-decoration-11
      class="dv11"
      style="
        width: 450px;
        height: 72px;
        font-size: 28px;
        color: white;
        text-shadow: 0 0 8px rgb(0, 233, 249);
      "
      >河北工程大学附属医院能耗平台</dv-decoration-11
    >
    <div class="dv1">
      <span class="span1">{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      time: null,
    };
  },
  mounted() {
    this.getTimes();
  },
  methods: {
    //时间
    getTimes() {
      clearTimeout(this.time); //清除定时器
      var data = new Date();
      // console.log(data, "标准时间");
      //获取年份
      var year = (data.getFullYear() + "").padStart(2, "0");
      // console.log(year, "年份");
      //获取月份
      var month = (data.getMonth() + 1 + "").padStart(2, "0");
      // console.log(month+1, "月份");
      //获取日
      var day = (data.getDate() + "").padStart(2, "0");
      // console.log(day,"日期")
      //时间戳
      // var hour = (data.getTime() + "").padStart(2, "0");
      // console.log(hours,"时间")
      //获取小时
      var hours = (data.getHours() + "").padStart(2, "0");
      // console.log(hours,"小时")
      //获取分钟
      var minutes = (data.getMinutes() + "").padStart(2, "0");
      // console.log(minutes,"分钟")
      //获取秒数
      var seconds = (data.getSeconds() + "").padStart(2, "0");
      // console.log(seconds,"秒数")

      this.time = setTimeout(this.getTimes, 1000); //
      this.time = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  // background-image: linear-gradient(rgb(7, 6, 32), transparent);
  position: absolute;
  width: 100%;
  height: 60px;
  // background-color: pink;
  z-index: 2;
  display: flex;
  justify-content: space-between;
}
// .dv11{
// //  margin: auto;
// }
.dv1 {
  width: 200px;
  height: 60px;
  display: table-cell;
  text-align: center;
}
.span1 {
  left: 10px;
  color: white;
  line-height: 100px;
  font-size: 20px;
  // margin: auto;
}
</style>
