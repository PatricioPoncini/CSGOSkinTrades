// routes.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skins from "../views/Skins.vue";
import Boxes from "../views/Boxes.vue";
import AboutUs from "../views/AboutUs.vue";
import Stickers from '../views/Stickers.vue'
import Collectibles from "../views/Collectibles.vue";
import Collections from "../views/Collections.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/skins", component: Skins },
  { path: "/boxes", component: Boxes },
  { path: "/about-us", component: AboutUs },
  { path: "/stickers", component: Stickers },
  { path: "/collectibles", component: Collectibles },
  { path: "/collections", component: Collections },

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
