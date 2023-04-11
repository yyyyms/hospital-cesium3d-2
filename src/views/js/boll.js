// vue文件引入的外部函数
function initGltfBillboard(_this, positions) {
  var Cesium = _this.cesium;
  let billboards = [
    {
      id: "document",
      name: "Draw the billboards",
      version: "1.0",
    },
  ];
  positions.forEach((element) => {
    let billboard = {};
    billboard = {
      id: element.code,
      name: element.name,
      billboard: {
        image: "static/img/广告牌.png",
        horizontalOrigin: {
          horizontalOrigin: "CENTER",
        },
        verticalOrigin: {
          verticalOrigin: "BOTTOM",
        },
        width: 100,
        height: 100,
      },
      label: {
        fillColor: {
          rgba: [255, 255, 255, 255],
        },
        font: "12pt Lucida Console",
        horizontalOrigin: "LEFT",
        pixelOffset: new Cesium.Cartesian2(-8, -35), //偏移量
        style: "FILL",
        text: element.name,
        showBackground: false,
        backgroundColor: {
          rgba: [112, 89, 57, 0],
        },
      },
      position: {
        cartographicDegrees: [
          element.position[0],
          element.position[1],
          element.position[2],
        ],
      },
    };
    billboards.push(billboard);
  });
  var dataSourcePromise = Cesium.CzmlDataSource.load(billboards);
  _this.viewer.dataSources.add(dataSourcePromise);
  _this.viewer.zoomTo(dataSourcePromise);
}
