import Vue from 'vue'
import App from './App.vue'
import LinkeNmuber from "./components/LinkeNmuber"

Vue.config.productionTip = false
// グローバル登録
Vue.component('LinkeNmuber', LinkeNmuber);

new Vue({
  render: h => h(App),
}).$mount('#app')
