import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import HelloWorld from '@/components/HelloWorld'
import error from '@/components/error'
// @ts-ignore
import index from '@/pages/index'
import login from '@/pages/login'
import register from '@/pages/register'
import agency from '@/pages/agency'
import setup from '@/pages/setup'
import subcom from '@/pages/subcom'
import verify from '@/pages/verify'
import judge from '@/pages/judge'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'申请看点直播'
      },
      children: [
        { path: '/login/', name: 'login', component: login, meta:{ title:'代理登录' } },
        { path: '/register/', name: 'register', component: register, meta:{ title:'代理注册' } },
        { path: '/agency/', name: 'agency', component: agency, meta:{ title:'一级代理主页' } },
        { path: '/setup/', name: 'setup', component: setup, meta:{ title:'代理设置' } },
        { path: '/verify/', name: 'verify', component: verify, meta:{ title:'审核' } },
        { path: '/subcom/', name: 'subcom', component: subcom, meta:{ title:'分佣' } }
      ]
    },
    {
      path: '/hello/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/judge/',
      name: 'judge',
      component: judge
    },
    {
      path: '*',
      name: 'error',
      component: error,
      meta:{
        title:'该页面不存在'
      }
    }
  ]
})
