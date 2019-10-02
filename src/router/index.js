import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false,
      footer: true,
    }
  },
  {
    path: '/user',
    component: () => import('@/views/user/user'),
    meta: {
      keepAlive: false,
      footer: true,
    }
  },
  {
    path: '/power',
    component: () => import('@/views/power/power'),
    meta: {
      keepAlive: false,
      footer: true,
    }
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    base:  '/app/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export default createRouter()
