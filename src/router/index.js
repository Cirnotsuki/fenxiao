// import Vue from 'vue'
const Vue = require('vue')
// import Router from 'vue-router'
const Router = require('vue-router')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      meta:{
        title:'申请看点直播'
      },
      children: [
        { path: '/login/', name: 'login', component: (resolve) => require(['@/pages/login'], resolve), meta:{ title:'代理登录' } },
        { path: '/register/', name: 'register', component: (resolve) => require(['@/pages/register'], resolve), meta:{ title:'代理注册' } },
        { path: '/agency/', name: 'agency', component: (resolve) => require(['@/pages/agency'], resolve), meta:{ title:'一级代理主页' } },
        { path: '/setup/', name: 'setup', component: (resolve) => require(['@/pages/setup'], resolve), meta:{ title:'代理设置' } },
        { path: '/verify/', name: 'verify', component: (resolve) => require(['@/pages/verify'], resolve), meta:{ title:'审核' } },
        { path: '/subcom/', name: 'subcom', component: (resolve) => require(['@/pages/subcom'], resolve), meta:{ title:'分佣' } }
      ]
    },
    {
      path: '/judge/',
      name: 'judge',
      component: (resolve) => require(['@/pages/judge'], resolve)
    },
    {
      path: '*',
      name: 'error',
      component: (resolve) => require(['@/components/error'], resolve),
      meta:{
        title:'该页面不存在'
      }
    }
  ]
})
