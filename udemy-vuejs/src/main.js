import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber";
import router from "./router";

Vue.config.productionTip = false;
// グローバル登録
Vue.component("LikeNumber", LikeNumber);

//ナビゲーションガード
//本来の処理をガードする
router.beforeEach((to, from, next)=> {
  //to 後の状態 from 前の状態
  
  if(to.path === "/users/1") {
    next("/"); 
  }

  next(); 
  //falseを引数にすると画面遷移しない
  // / パスを引数にすると
  //必ず入れる 画面遷移するときに真っ白になる
  // next(false); 
})

new Vue({
  //routerを登録する
  router,
  render: (h) => h(App),
}).$mount("#app");
