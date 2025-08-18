
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import ReactivityFundamentals from '@/components/ReactivityFundamentals.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/template-syntax',
    name: 'TemplateSyntax',
    component: () => import('@/components/TemplateSyntax.vue') //lazy load component จะถูกโหลดเฉพาะเมื่อผู้ใช้เข้า route
  }, {
    path: '/reactivity-fundamentals',
    name: 'ReactivityFundamentals',
    component: () => import('@/components/ReactivityFundamentals.vue') //lazy load component จะถูกโหลดเฉพาะเมื่อผู้ใช้เข้า route
  },
  ],
})

export default router
