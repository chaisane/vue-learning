
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'

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
    component: () => import('@/components/ReactivityFundamentals.vue')
  }, {
    path: '/computed-properties',
    name: 'ComputedProperties',
    component: () => import('@/components/ComputedProperties.vue')
  }, {
    path: '/class-and-style-bindings',
    name: 'ClassAndStyleBindings',
    component: () => import('@/components/ClassAndStyleBindings.vue')
  }, {
    path: '/conditional-rendering',
    name: 'ConditionalRendering',
    component: () => import('@/components/ConditionalRendering.vue')
  }, {
    path: '/list-rendering',
    name: 'ListRendering',
    component: () => import('@/components/ListRendering.vue')
  }, {
    path: '/event-handling',
    name: 'EventHandling',
    component: () => import('@/components/EventHandling.vue')
  }, {
    path: '/form-input-bindings',
    name: 'FormInputBindings',
    component: () => import('@/components/FormInputBindings.vue')
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: () => import('@/components/Watchers.vue')
  },
  {
    path: '/template-refs',
    name: 'Template Refs',
    component: () => import('@/components/TemplateRefs.vue')
  },
  ],
})

export default router
