import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);

Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
});

//全てのインスタンスに適用されてしまう
Vue.mixin({
  created() {
    console.log("グローバルmixin");
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
