import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/tabs/',
    component: () =>
      import("@/views/Index.vue"),
    children: [
      {
        path: '',
        component: () =>
          import("@/views/tabs/Index.vue"),
        children: [
          {
            path: 'tab1',
            component: () => import("@/views/tabs/home/Home.vue"),
          },
          {
            path: 'tab2',
            component: () => import('@/views/tabs/tab2/Tab2.vue')
          },
          {
            path: 'tab3',
            component: () => import('@/views/tabs/tab3/Tab3.vue')
          }
        ]
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
