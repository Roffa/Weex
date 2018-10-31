/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Studio from '@/pages/Studio'
import Report from '@/pages/Report'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      redirect: '/report',
      path: '/',
    },
    {
      path: '/studio',
      name: 'Studio',
      component: Studio
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    }
  ]
})
