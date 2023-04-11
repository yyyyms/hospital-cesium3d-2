<template>
  <div id="middle">
    <!-- <dv-border-box-12 class="box" backgroundColor="rgba(12,54,97,0.5)"> -->
    <dv-scroll-board :config="config" style="width: 100%; height: 100%" />
    <!-- </dv-border-box-12> -->
  </div>
</template>

<script>
export default {
  name: "Middle",
  data() {
    return {
      config: {
        header: ["预警类型", "预警描述", "监督机构", "所属项目", "上报时间"],
        data: [
          ["项目信息", "未录入安全员", "监督一科", "轨迹交通", "2022-4-13"],
          ["项目信息", "未录入安全员", "监督二科", "轨迹交通", "2022-4-12"],
          ["项目信息", "未录入安全员", "监督三科", "轨迹交通", "2022-4-13"],
          ["项目信息", "未录入安全员", "监督四科", "轨迹交通", "2022-4-11"],
          ["危大工程", "未录入安全员", "监督一科", "轨迹交通", "2022-4-13"],
          ["项目信息", "未录入安全员", "监督二科", "轨迹交通", "2022-4-12"],
          ["项目信息", "未录入安全员", "监督三科", "轨迹交通", "2022-4-13"],
          ["项目信息", "未录入安全员", "监督四科", "轨迹交通", "2022-4-11"],
        ],
        headerBGC: ["rgba(17,73,129,0.9)"],
        oddRowBGC: ["rgba(14,61,106,0.5)"],
        evenRowBGC: ["rgba(23,65,120,0.5)"],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#middle {
  top: 698px;
  left: 480px;
  position: absolute;
  width: 50%;
  height: 20%;
  z-index: 2;
  display: flex;
}
.box {
  height: 100%;
  width: 100%;
}
.dv-scroll-board .header .header-item {
  font-size: 12px !important;
}
</style>
