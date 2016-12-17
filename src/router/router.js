import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Start from 'src/pages/Start'
import Card from 'src/pages/Card'

const routes = [{
  path: '/',
  name: 'start',
  component: Start
}, {
  path: '/card',
  name: 'card',
  component: Card
}]

var router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
export default router