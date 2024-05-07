<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const responseData = ref(null)
const errorMessage = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/products')
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<template>
  <div>
    <h1 class="green">Mes produits</h1>
  </div>
  <div v-if="responseData">
    <ul>
      <li v-for="Data in responseData">
        <p>{{ Data.name }}</p>
        <p>Tarif : {{ Data.price }}</p>
        <p>Stock : {{ Data.stock }}</p>
        <div v-if="Data.categories && Data.categories.length > 0">
          Catégorie(s) :
          <span v-for="category in Data.categories">
            {{ category }}
          </span> 
        </div>
        <RouterLink :to="'/products/' + Data.id">Voir le produit</RouterLink>
      </li>
    </ul>
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
