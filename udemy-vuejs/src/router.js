import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";

//プラグイン（グローバルで利用できる機能）を使う宣言
Vue.use(Router);

export default new Router({
  //デフォルトは”hash"
  mode: "history",

  //URLとコンポーネントをマッピングする
  routes: [
    { path: "/", component: Home },
    //props: true にすることで、idがpropsとして渡させる
    { 
      path: "/users/:id", 
      component: Users, 
      props: true,
      //routerViewでコンポーネントを扱う
      children: [
        {path: "posts", component:UsersPosts},
        //name でURLに名前をつける
        {path: "profile", component:UsersProfile, name: "user-id-profile"}
      ]
    },
  ],
});
