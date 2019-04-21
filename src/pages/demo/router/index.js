import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const Detail = (resolve) => { require(['../views/Detail.vue'], resolve) }
Vue.use(Router)

const router = new Router({
  mode: 'hash', // history
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta: {
        title: '详情页'
      }
    }
  ]
})

export default router
