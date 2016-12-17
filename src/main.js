import Vue from 'vue'
import App from 'src/App'
/*
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
  if (!/https:\/\/api.github.com/.test(request.url)) {
    request.credentials = true
  }
  next()
})
*/
import { sync } from 'vuex-router-sync'
import router from 'src/router/router'
import store from 'src/vuex/store'

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')