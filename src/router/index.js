import Vue from "vue";
import VueRouter from "vue-router";
import Hospital from "../views/Hospital.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hospital",
    component: Hospital,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
