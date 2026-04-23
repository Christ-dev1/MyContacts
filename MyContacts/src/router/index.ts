import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Contact,
    },
    {
      path: '/inscription',
      name: 'INSCRIPTION',
      component: () => import('../components/Inscription.vue'),
    },
    {
      path: '/login',
      name: 'LOGIN',
      component: () => import('../components/Login.vue'),
    },

    {
      path: '/user',
      name: 'USER',
      component: () => import('../components/User.vue'),
    },

    {
  path: '/create',
  name: 'create contact',
  component: () => import('../components/create.vue')
},

    {
  path: '/profile',
  name: 'profile',
  component: () => import('../components/Profile.vue')
},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
