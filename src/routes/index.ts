// routes.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skins from "../views/Skins.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/skins", component: Skins },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.path != from.path) {
      return { left: 0, top: 0 };
    }

    return { left: savedPosition?.left, top: savedPosition?.top };
  },
  routes,
});

export default router;
