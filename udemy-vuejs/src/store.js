import Vue from 'vue';
import Vuex from 'vuex';


//プラグイン全体で利用
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    doubleCount: state => state.count * 2
  }
});