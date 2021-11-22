import Vue from "vue";
import VueRouter from "vue-router";
// All the views

import Cart from "../components/Cart.vue";
import Goods from "../components/Goods.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/goods",
    component: Goods,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
