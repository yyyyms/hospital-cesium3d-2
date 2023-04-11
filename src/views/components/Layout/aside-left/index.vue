<template>
  <div id="aside_left">
    <div id="aside_first">
      <first></first>
    </div>
    <div id="aside_second">
      <second></second>
    </div>
    <div id="aside_third">
      <third></third>
    </div>
  </div>
</template>

<script>
import first from "./echarts/echarts-first";
import second from "./echarts/echarts-second";
import third from "./echarts/echarts-third";
export default {
  name: "aside-left",
  components: {
    first,
    second,
    third,
  },
  data() {
    return {};
  },
};
</script>

<style>
#aside_left {
  position: absolute;
  z-index: 1;
  left: 8px;
  width: 275px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-image: linear-gradient(to right, rgba(7, 6, 32), transparent); */
}
#aside_first {
  /* margin-top: 60px; */
  margin-top: 70px;
  width: 100%;
  height: 22%;
  /* background-color: black; */
}
#aside_second {
  margin-top: 18px;
  width: 100%;
  height: 32%;
}
#aside_third {
  margin-top: 18px;
  width: 100%;
  height: 33%;
  /* background-color: black; */
}
</style>
