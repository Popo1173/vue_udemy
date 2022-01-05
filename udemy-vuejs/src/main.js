import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";
import router from "./router";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
