import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Layout from '@/views/Layout.vue'
// import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'news',
          component: News,
        },
        {
          path: 'about',
          component: About,
        },
      ],
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
