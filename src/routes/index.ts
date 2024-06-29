// routes.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skins from "../views/Skins.vue";
import Stickers from '../views/Stickers.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/skins", component: Skins },
  { path: "/stickers", component: Stickers },
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
