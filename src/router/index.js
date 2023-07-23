import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: () => import('../views/WysiwygView.vue')
    },
    {
      path: '/the-digital-divide',
      name: 'the-digital-divide',
      component: () => import('../views/WysiwygView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/WysiwygView.vue')
    }
  ]
})

export default router
