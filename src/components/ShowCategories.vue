<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const responseData = ref(null)
const errorMessage = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/categories')
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<template>
  <div>
    <h1 class="green">Toutes les catégories</h1>
  </div>
  <div v-if="responseData">
    <ul>
      <li v-for="Data in responseData">
        <p>{{ Data.title }}</p>
        <RouterLink :to="'/categories/' + Data.id">Voir la catégorie</RouterLink>
      </li>
    </ul>
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
