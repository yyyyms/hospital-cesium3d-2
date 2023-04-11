const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

let cesiumSource = "./node_modules/cesium/Source";
let cesiumWorkers = "../Build/Cesium/Workers";
module.exports = {
  publicPath: "./", //打包后的位置(如果不设置这个静态资源会报404)
  // publicPath: process.env.NODE_ENV === "production" ? "http://47.92.237.225:8080/dist" : "./",
  outputDir: "dist", //打包后的目录名称
  assetsDir: "static", //静态资源目录名称
  productionSourceMap: false, //去掉打包的时候生成的map文件
  lintOnSave: true,
  filenameHashing: false,
  parallel: false,
  devServer: {
    //sockHost: "http://192.168.2.22:8080/",
    //disableHostCheck: true,
    host: "0.0.0.0", //不清楚主机和目的网络
    port: 8083, // 源地址端口，自行修改
    // disableHostCheck: true,
    //hotOnly: false,
    // useLocalIp: false,
    proxy: null,
  },
  configureWebpack: {
    output: {
      sourcePrefix: " ",
    },
    amd: {
      toUrlUndefined: true,
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve("src"),
        cesium: path.resolve(__dirname, cesiumSource),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Assets"), to: "Assets" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, "ThirdParty/Workers"),
          to: "ThirdParty/Workers",
        },
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./"),
      }),
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      // eslint-disable-next-line no-dupe-keys
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "@open-wc/webpack-import-meta-loader",
          },
        },
      ],
    },
  },
};
