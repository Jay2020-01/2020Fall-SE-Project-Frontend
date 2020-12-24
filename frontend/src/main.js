import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

// 引入v-charts
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.use(VueClipboard)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common.Authorization = token
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')