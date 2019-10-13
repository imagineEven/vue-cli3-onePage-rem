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
      keepAlive: true,
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

let nihao;

const createRouter = () =>{
  nihao = new Router({
    mode: 'history', // require service support
    base:  '/app/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  return nihao;
}
  
export default createRouter()

nihao.beforeEach((to, from, next) => {
  console.log('全局前置守卫：beforeEach -- next需要调用')
  next()
})
