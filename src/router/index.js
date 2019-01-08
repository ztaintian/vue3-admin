import Vue from 'vue'
import Router from 'vue-router'
import router from './router'

Vue.use(Router)
console.log(router);
export default new Router({
  // mode: 'history',
  routes: router
})