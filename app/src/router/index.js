import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shootings-by-borough',
      name: 'Shootings By Borough',
      component: () => import('../views/ShootingsBorough.vue'),
    },
    {
      path: '/shootings-by-precinct',
      name: 'Shootings By Precinct',
      component: () => import('../views/ShootingsPrecinct.vue'),
    },
    {
      path: '/shootings-by-race',
      name: 'Shootings By Race',
      component: () => import('../views/ShootingsRace.vue'),
    },
  ],
})

export default router
