import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue';
import Categories from "../views/Categories.vue";

import CategoryModal from '../components/CategoryModal.vue';
import CategoryTable from "../components/CategoryTable.vue";

import PostModal from '../components/PostModal';
import PostTable from '../components/PostsTable.vue';


const routes = [
  {
    path: '/',
    name: 'Post',
    component: Posts
  },
  {
    path: '/category',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categorymodal',
    name: 'CategoryModal',
    component: CategoryModal
  },
  {
    path: '/categorytable',
    name: 'CategoryTable',
    component: CategoryTable
  },
  {
    path: '/posttable',
    name: 'PostTable',
    component: PostTable
  },
  {
    path: '/postmodal',
    name: 'PostModal',
    component: PostModal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
