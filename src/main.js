import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import './filter'
Vue.prototype.axios = axios;

import Scroll from './components/Scroll'
Vue.component('Scroll', Scroll)
import Loading from './components/Loading'
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
