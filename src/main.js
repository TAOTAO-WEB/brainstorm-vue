// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from 'qs'

// import 'assets/resources/css/axure_rp_page.css'
// import 'assets/data/styles.css'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.config.productionTip = false;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 参数格式转换
  if(config.method==="post"){
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
