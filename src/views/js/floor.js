export function loadfloor(_this) {
  let Cesium = _this.cesium;
  _this.viewer.dataSources.removeAll();//移除整体模型
  _this.viewer.entities.removeAll();//移除道路
  for (let index = 0; index < _this.showFloor.length; index++) {
    const element = _this.showFloor[index];
    // console.log("entity: ", element);
    _this.viewer.dataSources
      .add(Cesium.GeoJsonDataSource.load(element.geoJsonUrl))
      .then((res) => {
        // console.log("res", res);
        let entities = res.entities.values;
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          // console.log("entity: ", entity.properties.parent._value.abbreviation);
          entity.polygon.material = createCallback(_this, entity);
          entity.properties.center._value.push(element.altitude);
          entity.properties.centroid._value.push(element.altitude);
          entity.polygon.outlineColor =
            Cesium.Color.fromCssColorString("rgba(2,35,77,1)");
          entity.polygon.outline = true;
          entity.polygon.height = element.height;
          entity.polygon.extrudedHeight =
            element.height + entity.properties.floor;
          if (entity.name.indexOf("底图") < 0) {
            _this.buildingLabel.push({
              position: Cesium.Cartesian3.fromDegrees(
                entity.properties.center._value[0],
                entity.properties.center._value[1],
                element.height + entity.properties.floor
              ),
              name: entity.properties.parent._value.abbreviation,
            });
          }
        }
      });
  }
}

function createCallback(_this, entity) {
  let Cesium = _this.cesium;
  var highlightColor = Cesium.Color.fromCssColorString("rgba(0,122,187.1)");
  var normalColor = Cesium.Color.fromCssColorString("rgba(96,166,216,1)"); //1,60,108
  var bottomColor = Cesium.Color.fromCssColorString("rgba(40,75,105,1)"); //2,29,6
  var colorProperty = new Cesium.CallbackProperty(function (time, result) {
    if (entity.name.indexOf("底图") === -1) {
      if (_this.highlightedEntity === entity) {
        return Cesium.Color.clone(highlightColor, result);
      }
      return Cesium.Color.clone(normalColor, result);
    } else {
      return Cesium.Color.clone(bottomColor, result);
    }
  }, false);

  return new Cesium.ColorMaterialProperty(colorProperty);
}

export function loadBuildingLabel(_this) {
  let Cesium = _this.cesium;
  // console.log("_this.buildingLabel: ", _this.buildingLabel);
  for (var i = 0; i < _this.buildingLabel.length; i++) {
    var data = _this.buildingLabel[i];
    // console.log("data: ", data);
    _this.buildingLabelEntities.push(
      _this.viewer.entities.add({
        //参数顺序：经度、纬度
        position: data.position,
        label: {
          text: data.name,
          color: Cesium.Color.fromCssColorString("#fff"),
          font: "normal 24px MicroSoft YaHei",
          backgroundColor: Cesium.Color.fromCssColorString(
            "rgba(128,170,190,0)"
          ),
          showBackground: false,
          scale: 0.5,
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        },
      })
    );
  }
}
