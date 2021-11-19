import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import VueRouter from "vue-router";

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
