import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/HomePage.vue')
      },
      {
        path: 'dashboard',
        component: () => import('@/views/tabs/DashboardPage.vue')
      },
      {
        path: 'support',
        component: () => import('@/views/tabs/SupportPage.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/tabs/SettingsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
