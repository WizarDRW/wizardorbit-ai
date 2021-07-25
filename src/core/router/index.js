import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(`@/layout/Container.vue`),
    children: [
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/product/Index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
