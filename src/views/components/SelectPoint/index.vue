<template>
  <div id="selectPoont" style="cursor: pointer">
    <!-- <el-tooltip effect="dark" content="电数据" placement="bottom">
          <i
          id="icon_style"
          class="iconfont icon-fanhui"
        ></i>
      </el-tooltip> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#selectPoont {
  position: absolute;
  z-index: 0;
  right: 300px;
  top: 500px;
  width: 40px;
  height: 40px;
  background-color: rgba(57, 149, 195, 0.1);
  border: 1px solid rgba(27, 97, 133, 0.5);
  backdrop-filter: blur(8px);
  text-align: center;
  line-height: 40px;
}
</style>
