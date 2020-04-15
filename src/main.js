// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import store from './router/store.js'

// import 'assets/resources/css/axure_rp_page.css'
// import 'assets/data/styles.css'

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Authentication-Token'] = store.state.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

if(window.localStorage.getItem('token')!=null){
  axios.defaults.headers.get['token']=window.localStorage.getItem('token');
  axios.defaults.headers.post['token']=window.localStorage.getItem('token');
  console.log(window.localStorage.getItem('token'));
}
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    console.log(to.meta.title);
    document.title = to.meta.title
  }
  next()
});

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

// 添加请求拦截器
axios.interceptors.request.use(config => {
// 在发送请求之前做些什么
//判断是否存在token，如果存在将每个页面header都添加token
  if(store.state.token){
    config.headers.common['Authentication-Token']=store.state.token;
  }

  return config;
}, error => {
// 对请求错误做些什么
  return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/signin',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });
