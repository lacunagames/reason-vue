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
      name: 'whatWeDo',
      component: () => import('../views/WhatWeDoView.vue')
    },
    {
      path: '/the-digital-divide',
      name: 'digitalDivide',
      component: () => import('../views/DigitalDivideView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    }
  ]
})

export default router
