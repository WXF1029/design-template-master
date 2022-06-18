import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routers from './routers'

const routes: Array<RouteRecordRaw> = [...routers]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

