import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutPage
    },
  ]
})

export default router
