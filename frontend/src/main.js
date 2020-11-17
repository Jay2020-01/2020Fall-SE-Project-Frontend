import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

// 引入v-charts
import VCharts from 'v-charts'

Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
