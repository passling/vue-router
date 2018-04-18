import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Index1 from '@/components/index/index'
import Invest from '@/components/invest/invest'
import Find from '@/components/find/find'
import Account from '@/components/account/account'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      name: 'index',
      component: Index
    },
    {
      path: '/invest',
      name: 'invest',
      component: Invest,
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
