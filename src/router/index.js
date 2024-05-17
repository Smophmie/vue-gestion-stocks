import { createWebHistory, createRouter } from 'vue-router'

import Welcome from '../components/Welcome.vue'

import Login from '../components/Login.vue'


import ShowProducts from '../components/ShowProducts.vue'
import ShowProduct from '../components/ShowProduct.vue'
import CreateProduct from '../components/CreateProduct.vue'
import UpdateProduct from '../components/UpdateProduct.vue'

import ShowCategories from '../components/ShowCategories.vue'
import ShowCategory from '../components/ShowCategory.vue'
import CreateCategory from '../components/CreateCategory.vue'
import UpdateCategory from '../components/UpdateCategory.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    { path: '/', name:"welcome", component: Welcome },

    { path: '/login', name:"Login", component: Login },


    { path: '/products', name:"showproducts", component: ShowProducts, beforeEnter: authGuard },
    { path: '/products/:id', name:"showproduct", component: ShowProduct },
    { path: '/products/update/:id', name:"updateproduct", component: UpdateProduct },
    { path: '/products/create', name:"createproduct", component: CreateProduct },

    { path: '/categories', name:"showcategories", component: ShowCategories },
    { path: '/categories/:id', name:"showcategory", component: ShowCategory },
    { path: '/categories/update/:id', name:"updatecategory", component: UpdateCategory },
    { path: '/categories/create', name:"createcategory", component: CreateCategory }

  ],
})

function authGuard(to){
  let token = localStorage.getItem('token')
  console.log(token)

  if(token){
      return true
  } else {
    next({name:"Login"})
}   
}

export default router