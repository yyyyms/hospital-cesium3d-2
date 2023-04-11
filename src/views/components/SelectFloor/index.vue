<template>
  <div id="selectfloor_container">
    <div
      :id="'selectfloor_main' + item.index"
      class="selectfloor_main"
      v-for="item in icons"
      :key="item.index"
      style="cursor: pointer"
    >
      <el-tooltip
        class="item"
        effect="dark"
        :content="item.name"
        placement="left"
      >
        <i
          @click="selectFloor(item.index)"
          id="icon_style"
          :class="item.iconclass"
        ></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectFloor",
  components: {},
  props: ["floorNum"],
  data() {
    return {
      icons: [
        //index: 0-5分别对应五个楼层(这里不是动态，有空可以改成动态显示)，6对应全部楼层，7对应返回学校界面
        {
          index: 7,
          iconclass: "iconfont icon-fanhui",
          name: "返回",
        },
        {
          index: 6,
          iconclass: "iconfont icon-floor",
          name: "全楼",
        },
      ],
      flooricons: [
        {
          index: 0,
          iconclass: "iconfont icon-zifu-num",
          name: "一层",
        },
        {
          index: 1,
          iconclass: "iconfont icon-zifu-num2",
          name: "二层",
        },
        {
          index: 2,
          iconclass: "iconfont icon-zifu-num4",
          name: "三层",
        },
        {
          index: 3,
          iconclass: "iconfont icon-zifu-num1",
          name: "四层",
        },
        {
          index: 4,
          iconclass: "iconfont icon-zifu-num3",
          name: "五层",
        },
        {
          index: 5,
          iconclass: "iconfont icon-zifu-num5",
          name: "六层",
        },
      ],
      lastPoint: 6,

    };
  },
  created() {},
  mounted() {
    document.getElementById(  "selectfloor_main" + this.lastPoint ).style.backgroundColor = "rgba(57, 149, 195, 0.5)";
    this.showIcon();
  },
  methods: {
    selectFloor(selector) {
      this.$emit("selector", selector);
      if (this.lastPoint !== selector && selector !== 7) {
        document.getElementById(
          "selectfloor_main" + this.lastPoint
        ).style.backgroundColor = "unset";
        document.getElementById(
          "selectfloor_main" + selector
        ).style.backgroundColor = "rgba(57, 149, 195, 0.5)";
        this.lastPoint = selector;
      }
      if (selector === 7) {
        document.getElementById(
          "selectfloor_main" + this.lastPoint
        ).style.backgroundColor = "unset";
        this.lastPoint = 6;
        document.getElementById(
          "selectfloor_main" + this.lastPoint
        ).style.backgroundColor = "rgba(57, 149, 195, 0.5)";
      }
    },
    showIcon() {
      // this.showIcons = [];
      let downIcon = [];
      document.getElementById("selectfloor_container").style.height =
        (this.floorNum + 2) * 40 + "px";
      for (let index = 0; index < this.floorNum; index++) {
        const element = this.flooricons[index];
        downIcon.push(element);
      }
      downIcon.reverse().forEach((element) => {
        this.icons.push(element);
      });
    },
  },
  computed: {},
  watch: {
    floorNum(val, newval) {
      this.showIcon();
    },
  },
};
</script>
<style lang="scss" scoped>
#selectfloor_container {
  position: absolute;
  z-index: 3;
  right: 300px;
  top: 98px;
  width: 40px;
  // height: 280px;
  // border-radius: 10%;
  background-color: rgba(57, 149, 195, 0.1);
  border: 1px solid rgba(27, 97, 133, 0.5);
  backdrop-filter: blur(8px);
}
// #selectfloor_container_device{
//   position: absolute;
//   z-index: 3;
//   right: 300px;
//   top: 440px;
//   width: 40px;
//   // height: 280px;
//   // border-radius: 10%;
//   background-color: rgba(57, 149, 195, 0.1);
//   border: 1px solid rgba(27, 97, 133, 0.5);
//   backdrop-filter: blur(8px);
// }
.selectfloor_main {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
// #icon_style {
//   font-size: 25px;
//   color: #fff;
//   cursor: pointer;
// }
</style>
