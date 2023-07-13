import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/setting/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
