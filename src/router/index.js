import { createRouter, createWebHistory } from 'vue-router'
import Table from '@/components/Table'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Table
  },
  {
    path: '/logs',
    name: 'log',
    component: () => import('../components/Logs')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../components/DialogMenu')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
