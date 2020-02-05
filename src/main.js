// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
const Vue = require('vue')
// @ts-ignore
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
const Element = require('element-ui')
// import 'element-ui/lib/theme-chalk/index.css'
import Utils from './plugins/utils.js';


Vue.prototype.Utils=Utils;

Vue.config.productionTip = false
// @ts-ignore
// Vue.use(Element)

// 根据路由设置标题
router.beforeEach( (to, from, next)=>{
  if(to.meta.title) {
    document.title = to.meta.title
  }
  // 未登录时跳转到登录页面 已登录时登录页面跳转到主页
  if(!getCookie('uid') || !getCookie('ck_Md5')){
    if(to.name === 'login' || to.name === 'register'){ next() }else{ next('/login/') }
  }else{
    if(to.name === 'login' || to.name === 'register'){ next('/') }else{ next() }
  }
  
  function getCookie (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
})

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
