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
    },
    beforeEnter(to, from, next){
      next(false)
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
  //スクロールビヘイビア関数
  scrollBehavior(to, from, savedPosition) {
    //非同期の型を返す
    return new Promise(resolve => {
      //
      this.app.$root.$once('triggerScroll', () => {
        let position = ({x: 0, y:100 })

        //飛ぶ前の位置をとる
        if(savedPosition) {
          position = savedPosition;
        }
        //ハッシュアがあった時
        if(to.hash){
          position = {
            selector: to.hash 
          }
        }
        resolve(position)
      })
    }) 

    //return { x: 0, y: 0}
    //指定したハッシュまで移動する
    // return {
    //   selector: '#next-user',
    //   offset: { x: 0, y: 100}
    // };
  }
});
