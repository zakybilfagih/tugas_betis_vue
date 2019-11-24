import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/subject',
    name: 'subject',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/subject/:id',
    name: 'sub subject',
    component: () => import('../views/Subject.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
