import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

//プラグイン（グローバルで利用できる機能）を使う宣言
Vue.use(Router);

export default new Router({
  //デフォルトは”hash"
  mode: "history",

  //URLとコンポーネントをマッピングする
  routes: [
    { path: "/", 
      components: {
      default: Home,
      header: HeaderHome
    } 
  },
    //props: true にすることで、idがpropsとして渡させる
    { 
      path: "/users/:id", 
      components: {
        default: Users,
        header: HeaderUsers
      },
      //名前付ルーターコンポーネントを使うときはprposをオブジェクトにする
      props: {
        default: true,
        header: false
      },
      //routerViewでコンポーネントを扱う
      children: [
        {path: "posts", component:UsersPosts},
        //name でURLに名前をつける
        {path: "profile", component:UsersProfile, name: "user-id-profile"}
      ]
    },
    //リダイレクト
    {
      path: "/hellow",
      redirect: {path: '/'}
    }
  ],
});
