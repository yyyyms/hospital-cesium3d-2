<template>
  <div id="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in breadcrumb"
        :key="item"
        @click.native="returnHospital(item)"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "breadcrumb",
  props: ["breadcrumb"],
  data() {
    return {};
  },
  mounted() {
    //   console.log(breadcrumb);
  },
  methods: {
    returnHospital(item) {
      if (item === "医院") {
        this.$emit("showHospital");
      }
    },
  },
};
</script>

<style scoped>
#breadcrumb {
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  z-index: 1;
  top: 98px;
  left: 300px;
  height: 32px;
  border-radius: 10%;
  background-color: rgba(57, 149, 195, 0.1);
  border: 1px solid rgba(27, 97, 133, 0.5);
  backdrop-filter: blur(8px);
}
::v-deep .el-breadcrumb__inner {
  color: white !important;
  cursor: pointer !important;
  line-height: 2;
  font-size: 18px;
}
</style>
