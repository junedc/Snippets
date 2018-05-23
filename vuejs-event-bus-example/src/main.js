import Vue from 'vue'
import App from './App.vue'

import Bus from './Bus'
Vue.use(Bus)

new Vue({
  el: '#app',
  render: h => h(App)
})
