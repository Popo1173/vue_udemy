import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

//プラグイン（グローバルで利用できる機能）を使う宣言
Vue.use(Router);

export default new Router({
  //デフォルトは”hash"
  mode: "history",

  //URLとコンポーネントをマッピングする
  routes: [
    { path: "/", component: Home },
    { path: "/users/:id", component: Users },
  ],
});
