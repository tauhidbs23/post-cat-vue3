import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue';

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Posts
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
