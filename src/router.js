import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DetailsView from './views/DetailsView.vue'
import AddItemView from './views/AddItemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:label',
    name: 'details',
    component: DetailsView
  },
  {
    path: '/add-item',
    name: 'add-item',
    component: AddItemView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router