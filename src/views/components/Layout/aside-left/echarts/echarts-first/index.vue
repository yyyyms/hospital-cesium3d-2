<template>
  <div id="leftecharts_first">
    <!-- <div id="textContent"> -->
    <div id="leftechart_content" v-for="item in contents" :key="item.type">
      <!-- <div style="height: 50%; width: 50%"> -->
      <i
        :class="item.class"
        style="
          font-size: 30px;
          color: #01effd;
          margin-right: 20px;
          margin-left: 10px;
        "
      ></i>
      <!-- </div> -->
      <div>
        <div style="color: white; padding-bottom: 20px; font-size: 14px">
          {{ item.name }}
        </div>
        <div style="color: white; font-size: 14px">
          {{ item.num }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {
  name: "leftecharts-first",
  data() {
    return {
      contents: [
        {
          class: "iconfont icon-renjunrishenghuoyongshuiliang30",
          name: "用水量",
          num: "85吨",
        },
        {
          class: "iconfont icon-gaojing",
          name: "今日警告",
          num: "98条",
        },
        {
          class: "iconfont icon-icon-",
          name: "楼宇",
          num: "45栋",
        },
        {
          class: "iconfont icon-shuibiaoguohu-",
          name: "设备",
          num: "86台",
        },
      ],
    };
  },
  mounted() {
    this.initFirst();
  },
  methods: {
    initFirst() {},
  },
};
</script>

<style>
#leftecharts_first {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

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
#leftechart_content {
  width: 50%;
  /* margin-bottom: 20px; */
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
}
</style>
