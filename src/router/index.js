import { createWebHistory, createRouter } from 'vue-router'

import Welcome from '../components/Welcome.vue'
import ShowProducts from '../components/ShowProducts.vue'
import ShowProduct from '../components/ShowProduct.vue'
import ShowCategories from '../components/ShowCategories.vue'
import ShowCategory from '../components/ShowCategory.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    { path: '/', component: Welcome },
    { path: '/products', component: ShowProducts },
    { path: '/products/:id', component: ShowProduct },
    { path: '/categories', component: ShowCategories },
    { path: '/categories/:id', component: ShowCategory }

  ],
})

export default router