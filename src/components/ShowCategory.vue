<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const responseData = ref(null)
const errorMessage = ref(null)

const route = useRoute()

onMounted(async () => {
  try {
    const id = route.params.id
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/categories/${id}`)
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<template>
  <div>
    <h1 class="green">Ma catégorie</h1>
  </div>
  <div v-if="responseData">
        <p>{{ responseData.title }}</p>
        <!-- <p v-if="responseData.categories && responseData.categories.length > 0">
          Catégorie(s) :
          <span v-for="category in responseData.categories">
            {{ category }}
          </span> 
        </p>    -->

  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
