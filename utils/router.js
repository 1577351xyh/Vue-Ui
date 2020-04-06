import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export const ComontRouters = [
  {
    path: "/",
    component: () => import("/layout/index.vue"),
    // component: () => import("../views/layout/index.vue"),

  },
  {
    path: "/main",
    component: () => import("/layout/main.vue"),
  }
]

export default new Router({
  // mode: "history",
  routes: ComontRouters
});