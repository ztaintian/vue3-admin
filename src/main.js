import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store/index'
import 'normalize.css'
import '../static/css/index.styl'
import './utils/rem'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
