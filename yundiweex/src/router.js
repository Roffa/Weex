/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Studio from '@/pages/Studio'
import Report from '@/pages/Report'
import Glucoselist from '@/pages/GlucoseList'

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
    },
    {
      path: '/Glist',
      name: 'list',
      component: Glucoselist
    }
  ]
})
