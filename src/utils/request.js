import axios from "axios";
// 配置请求的跟路径
const request = axios.create({
  baseURL: "http://42.193.99.32:8866", //新服务器
  timeout: 2000000, // 请求超时时间
});
// request.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem("userToken");
//   // 在最后必须 return config
//   // console.log(config)
//   return config;
// });
export default request;
