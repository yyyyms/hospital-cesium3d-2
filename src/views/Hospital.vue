<template>
  <div id="box">
    <div v-show="activeName == '医院'">
      <Layout></Layout>
    </div>
    <div id="Hospital">
      <div id="cesium">
        <div v-if="Billboard !== undefined">
          <div
            v-show="activeName == '医院'"
            class="bubble2"
            v-for="(item, index) in Billboard"
            :key="index"
            :id="item.name"
          >
            <div
              class="bubble_lable"
              style="cursor: pointer"
              @click="clickDiv(item.name)"
            >
              <span>{{ item.name }}</span>
              <br />
              <span></span>
            </div>
            <svg id="svg_infoWindow">
              <circle
                cx="10"
                cy="92"
                r="4"
                stroke="rgba(26,152,252,0.7)"
                stroke-width="2"
                fill="transparent"
              />
              <line
                fill="transparent"
                x1="10"
                y1="50"
                x2="10"
                y2="90"
                stroke="rgba(44,247,254,0.7)"
                stroke-width="1"
              ></line>
            </svg>
          </div>
        </div>
      </div>
      <Breadcrumb
        v-show="activeName !== '医院'"
        :breadcrumb="breadcrumbBuilding"
        @showHospital="showHospital"
      ></Breadcrumb>
      <SelectFloor
        v-show="activeName !== '医院'"
        :floorNum="showFloorNum"
        @selector="selectOption"
      ></SelectFloor>
      <el-dialog
        id="point_echartsdialog"
        :visible.sync="dialogVisible"
        style="overflow: unset"
        width="750px"
        append-to-body
      >
        <div id="point_echartsHeader">
          <span style="font-size: 17px; font-weight: 700; color: #d0eaff">{{
            this.pointName
          }}</span>
          <div id="point_building" @click="looking">查看楼内详情</div>
        </div>
        <div id="point_echartsBody">
          <Echarts></Echarts>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import points from "./js/points.json";
// import { getBuilding } from "@/api/api.js";
import { roldPline } from "./js/data";
import { loadGeojson } from "./js/Geojson.js";
import { loadfloor } from "./js/floor.js";
import { schoolBuildingdGeoInfo } from "./js/data.js";


import SelectFloor from "./components/SelectFloor";
import Echarts from "./components/echarts";
import Breadcrumb from "./components/Breadcrumb";
// import { initGltfBillboard } from "./js/boll.js";
export default {
  data() {
    return {
      roldPline: [],
      schoolLabel: [],
      dialogVisible: false,
      pointName: "",
      code: "", //楼号
      showBuilding: [],
      showFloor: [],
      showFloorInex: 6,
      showFloorNum: [],
      activeName: "医院",
      buildingLabel: [],
      floorHeight: "",
      point: [], //广告牌
      viewer: null,
      monitorEntity: null,
      points: [],
      breadcrumbBuilding: ["医院"],
      Billboard: [],
    };
  },
  name: "Hospital",
  components: { SelectFloor, Echarts, Layout, Breadcrumb },
  mounted() {
    this.getData();
  },
  methods: {
    init() {
      let Cesium = this.cesium;
      this.viewer = new Cesium.Viewer("cesium", {
        animation: false, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: false, //是否显示全屏按钮
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        orderIndependentTranslucency: false, // 透明背景设置
        contextOptions: {
          webgl: {
            alpha: true,
          },
        },
      });
      this.viewer._cesiumWidget._creditContainer.style.display = "none"; //去掉版权信息
      this.viewer.scene.sun.show = true; //在Cesium1.6(不确定)之后的版本会显示太阳和月亮，不关闭会影响展示
      this.viewer.scene.moon.show = false;
      this.viewer.scene.skyAtmosphere.show = false; //隐藏大气圈
      this.viewer.scene.skyBox.show = false; //天空盒的显影
      this.viewer.scene.globe.show = false; //地球的显示
      this.viewer.scene.globe.enableLighting = true; // 开启全球光照
      this.viewer.scene.light = new Cesium.DirectionalLight({
        //去除时间原因影响模型颜色
        direction: new Cesium.Cartesian3(
          -0.05492591601301104,
          0.0909182691839401,
          0.1833588392420772
        ),
      });
      // 设置缩放的大小
      this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 200;
      this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 500;
      // 背景颜色
      this.viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
      //是否开启抗锯齿
      this.viewer.scene.fxaa = true;
      this.viewer.scene.postProcessStages.fxaa.enabled = true;
      // 加载医院的Geojson
      loadGeojson(this);
    },
    // 获取数据
    getData() {
      this.points = points;
      this.roldPline = roldPline; // 路线
      this.init();
    },
    // 相机视角
    cameraView(lon, lat, alt, heading, pitch, roll) {
      let Cesium = this.cesium;
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lon, lat, alt),
        orientation: {
          heading: Cesium.Math.toRadians(heading),
          pitch: Cesium.Math.toRadians(pitch),
          roll: roll,
        },
      });
    },
    // 加载标签div
    loadDiv() {
      let Cesium = this.cesium;
      let viewer = this.viewer;
      this.Billboard.forEach((e) => {
        viewer.scene.postRender.addEventListener(() => {
          let centerCartesian3 = Cesium.Cartesian3.fromDegrees(
            e.position.x,
            e.position.y,
            e.position.z
          );
          let sceenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
            viewer.scene,
            centerCartesian3
          );
          let divid = e.name;
          document.getElementById(divid).style.marginTop =
            sceenPos.y -
            document.getElementById(divid).offsetHeight -
            40 +
            "px";
          document.getElementById(divid).style.marginLeft = sceenPos.x + "px";
          document.getElementById(divid).style.position = "absolute";
          // document.getElementById(divid).style.display = "block"; //显示对象
        }, this);
      });
    },
    // 点击div 
    clickDiv(Name) {
      if (this.activeName === "医院") {
        this.pointName = Name;
        // console.log("this.pointName", this.pointName);
        this.dialogVisible = true;
        this.showBuilding = schoolBuildingdGeoInfo;
        this.showFloor = schoolBuildingdGeoInfo[0].floors;
        this.showFloorNum = schoolBuildingdGeoInfo[0].floorNum;
        this.breadcrumbBuilding = ["医院"];
        this.breadcrumbBuilding.push(this.pointName);
      }
    },
    // 查看楼内详情
    looking() {
      this.dialogVisible = false;
      this.activeName = "楼内";
      this.cameraView(...this.showBuilding[0].camera);
      loadfloor(this);
    },
    // 回到医院
    showHospital() {
      this.activeName = "医院";
      this.viewer.dataSources.removeAll();
      loadGeojson(this);
      this.breadcrumbBuilding = [];
      this.breadcrumbBuilding.push("医院");
    },
    //building的选择器
    selectOption(option) {
      //利用第三变量监听数组是否改变
      if (this.showFloorInex !== option) {
        // console.log("showFloorInex变成了: ", this.showFloorInex);
        this.showFloor = [];
        if (option === 7) {
          this.showHospital();
        } else if (option === 6) {
          this.showFloorInex = option;
          this.showFloor = this.showBuilding[0].floors;
        } else {
          this.showFloorInex = option;
          this.showFloor.push(this.showBuilding[0].floors[option]);
        }
      }
    },
  },
  watch: {
    showFloorInex(val, newval) {
      // console.log("this.showFloor.length: ", this.showFloor.length);
      if (this.showFloor.length === 1) {
        //若显示单层楼宇重新赋予高度
        // console.log("this.showFloor",this.showFloor[0].height);
        this.floorHeight = this.showFloor[0].height + 4500;
        this.cameraView(
          this.showBuilding[0].camera[0],
          this.showBuilding[0].camera[1],
          this.floorHeight,
          this.showBuilding[0].camera[3],
          this.showBuilding[0].camera[4],
          this.showBuilding[0].camera[5]
        );
      } else {
        for (let index = 0; index < this.showFloor.length; index++) {
          //因为指针直接指向地址，所以需要重新赋予高度
          const element = this.showFloor[index];
          // let bottom = 158.8150767885274;
          if (index === 0) {
            element.height = 10;
          } else {
            element.height = index * 1500;
          }
        }
      }
      // console.log(this.showFloor);
      loadfloor(this);
    },
  },
};
</script>

<style scoped>
.bubble {
  opacity: 1;
  z-index: 10;
  color: white;
  position: absolute;
  height: 125px;
  width: 200px;
}
#bubble_main {
  padding-left: 20px;
  margin-left: 50px;
  position: absolute;
  width: 168px;
  height: 100px;
  background-color: rgba(128, 183, 201, 0.6);
  font-size: 15px;
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(104, 166, 186, 0.6);
}
#svg_infoWindow {
  width: 20px;
  height: 104px;
}
#point_building {
  display: inline;
  position: absolute;
  right: 80px;
  top: 30px;
  color: white;
  cursor: pointer;
}
/* dialog */
#point_echartsdialog >>> .el-dialog__header {
  padding: 0 !important;
}
#point_echartsdialog >>> #point_echartsBody {
  padding-top: 20px !important;
  height: 400px;
}
#point_echartsdialog >>> .el-dialog {
  position: relative;
  margin-top: 10vh !important;
  border-top-left-radius: 5%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 0;
  backdrop-filter: blur(8px);
  border: solid 2px rgba(64, 97, 148, 0.6);
  -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(64, 97, 148, 0.534);
}
#point_echartsdialog >>> .el-dialog__body {
  color: #06080e;
  font-size: 14px;
  word-break: break-all;
}
#selectPoont {
  position: absolute;
  z-index: 3;
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
#name {
  display: inline;
}
#code {
  display: inline;
}
#cesium {
  background: -webkit-linear-gradient(left, rgb(25, 38, 57), rgb(23, 38, 57))
    no-repeat;
}
.bubble2 {
  opacity: 1;
  z-index: 1;
  color: white;
  position: absolute;
  height: 50px !important;
  width: 200px !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.bubble_lable {
  padding-left: 0;
  margin-left: -60px;
  margin-top: 20px;
  position: absolute;
  width: 150px;
  height: 40px;
  background-color: rgba(128, 183, 201, 0.6);
  font-size: 16px;
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(104, 166, 186, 0.6);
  text-align: center;
  z-index: 1;
}
</style>
