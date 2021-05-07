import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store, // store : store의 축약형
  render: h => h(App),
});
