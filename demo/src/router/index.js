import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Invest from '@/components/invest/invest'
import Find from '@/components/find/find'
import Account from '@/components/account/account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/account/:id',
      name: 'Account',
      component: Account
    }
  ]
})
