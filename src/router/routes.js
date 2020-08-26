
const routes = [
  {
    path: '/',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/client/about.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
