<template>
  <div id="echarts_third">
    <div id="formTitle">最新告警数据</div>
    <div id="Form">
      <dv-scroll-board :config="config1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "leftecharts-third",
  data() {
    return {
      config1: {
        header: [" 位置", "告警类型", "时间"],
        headerBGC: "rgba(32,182,246,0.1)",
        oddRowBGC: "rgba(255,255,255,0.1)",
        evenRowBGC: "rgba(0,0,0,0)",
        rowNum: 5,
        // headerHeight: "12px",
        data: [
          [
            '<span style="font-size:12px">基础一东</span>',
            "<span style='font-size:12px'>水压超标</span>",
            "<span style='font-size:12px'>2020.12.19</span>",
          ],
          [
            "<span style='font-size:12px'>基础二西</span>",
            "<span style='font-size:12px'>水量超标</span>",
            "<span style='font-size:12px'>2020.12.18</span>",
          ],
          [
            "<span style='font-size:12px'>16号楼</span>",
            "<span style='font-size:12px'>设备超时</span>",
            "<span style='font-size:12px'>2020.12.17</span>",
          ],
          [
            "<span style='font-size:12px'>32号楼</span>",
            "<span style='font-size:12px'>水量超标</span>",
            "<span style='font-size:12px'>2020.12.20</span>",
          ],
          [
            "<span style='font-size:12px'>二食堂</span>",
            "<span style='font-size:12px'>水压超标</span>",
            "<span style='font-size:12px'>2020.12.21</span>",
          ],
          [
            "<span style='font-size:12px'>44号楼</span>",
            "<span style='font-size:12px'>设备超时</span>",
            "<span style='font-size:12px'>2020.12.16</span>",
          ],
          [
            "<span style='font-size:12px'>一社区澡堂</span>",
            "<span style='font-size:12px'>水压超标</span>",
            "<span style='font-size:12px'>2020.12.15</span>",
          ],
          [
            "<span style='font-size:12px'>图书馆</span>",
            "<span style='font-size:12px'>水量超标</span>",
            "<span style='font-size:12px'>2020.12.19</span>",
          ],
        ],
      },
    };
  },
};
</script>

<style>
#echarts_third {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(1, 131, 196, 0.05);
  border: solid 1px rgba(1, 131, 196, 0.25);
  /* background-color: rbga(); */
  /* border-radius: 10%; */
  border-top-left-radius: 0;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 10%;
  backdrop-filter: blur(8px);
}
#formTitle {
  height: 7%;
  color: white;
  text-align: center;
  font-size: 14px;
  color: white;
  text-shadow: 0 0 8px rgb(0, 233, 249);
  position: relative;
  top: 2%;
}
#Form {
  height: 90%;
  width: 93%;
  margin-top: 5%;
  padding-left: 4%;
  /* padding-top: 7%; */
  /* background-color: rgba(1, 131, 196, 0.05); */
}
.dv-scroll-board .header {
  font-size: 14px !important;
}
</style>
