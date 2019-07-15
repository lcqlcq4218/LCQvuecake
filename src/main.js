import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//等效于node中的const axios=require("axios")



Vue.config.productionTip = false





//让axios的请求携带验证信息到服务端
//3.2:配置跨域访问保存session中数据
axios.defaults.withCredentials=true;
//3.3:将axios配置为Vue实例属性
Vue.prototype.axios=axios;
//xxx.vue中： this.axios.get(...)

new Vue({
  router,
  store,
  render: h => h (App)
}).$mount('#app')
