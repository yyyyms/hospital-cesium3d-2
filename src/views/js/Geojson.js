export function loadGeojson(_this) {
  let Cesium = _this.cesium;
  _this.cameraView(114.501801, 36.615988, 200, 6, -32, 0); //相机角度
  var linecolor = new Cesium.Color(46 / 255, 127 / 255, 173 / 255, 1); // 线颜色46,127,173
  var outline = new Cesium.Color(46 / 255, 127 / 255, 173 / 255, 1); // 线框颜色204,210,212
  let lablecolor = new Cesium.Color(75 / 255, 61 / 255, 65 / 255, 1);
  _this.viewer.dataSources
    .add(Cesium.GeoJsonDataSource.load("static/hospital_all.json"))
    .then((res) => {
      // console.log("res", res);
      let entities = res.entities.values;
      // console.log();
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        entity.polygon.material = createCallback(_this, entity);
        entity.polygon.outline = false;
        entity.polygon.extrudedHeight = entity.properties.floor;
        _this.schoolLabel.push({
          position: Cesium.Cartesian3.fromDegrees(
            entity.properties.center._value[0],
            entity.properties.center._value[1],
            entity.properties.center._value[2]
          ),
          name: entity.properties.parent._value.abbreviation,
        });

        // console.log(_this.schoolLabel);
        entity.position = Cesium.Cartesian3.fromDegrees(
          entity.properties.center._value[0],
          entity.properties.center._value[1],
          entity.properties.center._value[2]
        );
        // console.log(entity);
        if (
          entity.name !== "医院底图" &&
          entity.name !== "公路" &&
          entity.name !== "不重要建筑" &&
          entity.name !== "不重要建筑区域1" &&
          entity.name !== "不重要建筑区域2" &&
          entity.name !== "不重要建筑区域3" &&
          entity.name !== "不重要建筑区域4" &&
          entity.name !== "不重要建筑区域6" &&
          entity.name !== "不重要建筑区域7" &&
          entity.name !== "不重要建筑区域8" &&
          entity.name !== "不重要建筑区域9"
        ) {
          // console.log(entity);
          _this.Billboard.push({
            name: entity.properties.name._value,
            code: entity.properties.adcode._value,
            position: {
              x: entity.properties.center._value[0],
              y: entity.properties.center._value[1],
              z: entity.properties.center._value[2],
            },
          });
          // console.log(entity);
          // entity.label = {
          //     // position:
          //     text: entity.name,
          //     fillColor: lablecolor,
          //     // color: Cesium.Color.fromCssColorString('#ffff00'),
          //     // color: Cesium.Color.fromCssColorString(
          //     //     "rgba(0,128,128,1)"
          //     // ),
          //     font: "normal 14px MicroSoft YaHei",
          //     backgroundColor: Cesium.Color.fromCssColorString(
          //         // "rgba(75,61,65,1)"
          //         "rgb(24, 24, 24)"
          //     ),
          //     showBackground: true,
          //     scale: 1,
          //     horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
          //     verticalOrigin: Cesium.VerticalOrigin.BOTTOM
          // };
        }
        // }
      }
      _this.loadDiv(); //div
      // _this.loadBill();//广告牌
      // _this.loadbillboard();
      // loadSchoolLabel(_this);
    });
  // _this.Billboard.forEach((e)=>{
  //     // console.log("111",e);
  // })
  // 绘制路线
  _this.roldPline.forEach((element) => {
    _this.viewer.entities.add({
      name: "路线",
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights(element),
        width: 13,
        material: new Cesium.PolylineOutlineMaterialProperty({
          color: linecolor,
          outlineWidth: 1,
          outlineColor: outline,
        }),
      },
    });
  });
}

function createCallback(_this, entity) {
  let Cesium = _this.cesium;
  // var highlightColor = Cesium.Color.fromCssColorString("rgba(0,239,252,0.1)"); //高亮颜色
  // var collegeColor = Cesium.Color.fromCssColorString("rgb(32,183,246)"); //1,60,108 医学院
  // var togetherColor = Cesium.Color.fromCssColorString("rgba(191,249,253)"); //住院部191,249,253  #a6d8fffc
  var dormitoryColor = Cesium.Color.fromCssColorString("#1ba0ffed"); // 门诊急诊#1ba0ffed
  var bottomColor = Cesium.Color.fromCssColorString("rgba(39,76,105,0.6)"); //2,29,64// 底图的颜色208,214,215
  // var riverColor = Cesium.Color.fromCssColorString("rgba(70,185,199,0)"); // 河流的颜色
  // var otherColor = Cesium.Color.fromCssColorString("rgba(37,117,176,1)"); // 家属楼
  // let lu = Cesium.Color.fromCssColorString("rgba(46,127,173,1)");
  // let chunse = Cesium.Color.fromCssColorString("rgb(28,116,181)");
  let Allother = Cesium.Color.fromCssColorString("rgba(72,81,97,0.9)");
  var colorProperty = new Cesium.CallbackProperty(function (time, result) {
    if (entity.name.indexOf("底图") === -1) {
      // if (_this.highlightedEntity === entity) {
      //     return Cesium.Color.clone(highlightColor, result);
      // } else
      if (entity.properties.childrenNum._value === 20) {
        //医学院
        return Cesium.Color.clone(dormitoryColor, result);
      } else if (entity.properties.childrenNum._value === 10) {
        // 住院部
        return Cesium.Color.clone(dormitoryColor, result);
      } else if (entity.properties.childrenNum._value === 30) {
        // 门诊
        return Cesium.Color.clone(dormitoryColor, result);
      } else if (entity.properties.childrenNum._value === 40) {
        return Cesium.Color.clone(dormitoryColor, result); // 家属楼
      } else if (entity.properties.childrenNum._value === 50) {
        return Cesium.Color.clone(Allother, result); // 河流
      } else if (entity.properties.childrenNum._value === 60) {
        return Cesium.Color.clone(Allother, result); // 路100,238,251
      } else if (entity.properties.childrenNum._value === 100) {
        return Cesium.Color.clone(Allother, result); // 路100,238,251
      }
    } else {
      return Cesium.Color.clone(bottomColor, result);
    }
  }, false);

  return new Cesium.ColorMaterialProperty(colorProperty);
}

// export function loadSchoolLabel(_this) {
//     // console.log("_this.schoolLabel: ", _this.schoolLabel.length);
//     _this.schoolLabelEntities = [];
//     for (var i = 1; i < _this.schoolLabel.length; i++) {
//         var data = _this.schoolLabel[i];
//         // console.log("data: ", data);
//         _this.schoolLabelEntities.push(
//             _this.viewer.entities.add({
//                 //参数顺序：经度、纬度
//                 position: data.position,

//                 // label: {
//                 //     text: data.name,
//                 //     // color: Cesium.Color.fromCssColorString("#fff"),
//                 //     font: "normal 24px MicroSoft YaHei",
//                 //     // backgroundColor: Cesium.Color.fromCssColorString(
//                 //     //   "rgba(128,170,190,0)"
//                 //     // ),
//                 //     showBackground: false,
//                 //     // scale: 0.5,
//                 //     horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
//                 //     verticalOrigin: Cesium.VerticalOrigin.BOTTOM
//                 // },
//                 type: "text" //自定义属性
//             })
//         );
//     }
// }
