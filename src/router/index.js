import Vue from 'vue'
import VueRouter from 'vue-router'
import routesArray from './routes'

Vue.use(VueRouter)

const routes = routesArray

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
