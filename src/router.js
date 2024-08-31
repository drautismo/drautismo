import { createRouter, createWebHistory } from 'vue-router'
import EventosView from './views/EventosView.vue'
import HistoricoView from './views/HistoricoView.vue'
import ExamesView from './views/ExamesView.vue'
import FavoritosView from './views/FavoritosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EventosView
  },
  {
    path: '/history',
    name: 'historico',
    component: HistoricoView
  },
  {
    path: '/exames',
    name: 'exames',
    component: ExamesView
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavoritosView
  },
  {
    path: '/details/:label',
    name: 'details',
    component: () => import('./views/DetailsView.vue')
  },
  {
    path: '/add-item',
    name: 'add-item',
    component: () => import('./views/AddItemView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router