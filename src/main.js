import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({

  methods: {

    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }

  },

  // Hook created
  created () {
    this.init()
  },

  router,
  store,
  render: h => h(App)

}).$mount('#app')
