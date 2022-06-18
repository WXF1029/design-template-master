import index from '@/views/home/index.vue'

let routers = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  }
]

export default routers
