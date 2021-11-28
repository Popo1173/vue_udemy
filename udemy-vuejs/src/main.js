import Vue from 'vue'
import App from './App.vue'
import LinkeNmuber from "./LinkeNmuber"

Vue.config.productionTip = false
Vue.component('LinkeNmuber', LinkeNmuber);

new Vue({
  render: h => h(App),
}).$mount('#app')
