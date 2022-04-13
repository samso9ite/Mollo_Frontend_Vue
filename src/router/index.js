import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/login',
    name: 'Sigin',
    component: () => import('../views/Sigin.vue')
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
