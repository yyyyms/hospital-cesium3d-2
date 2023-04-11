import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./style/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dataV from "@jiaminghi/data-view";

Vue.use(dataV);
const echarts = require("echarts");
var cesium = require("cesium/Cesium");
var widgets = require("cesium/Widgets/widgets.css");
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.prototype.cesium = cesium;
Vue.prototype.widgets = widgets;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
