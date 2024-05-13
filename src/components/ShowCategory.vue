<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const responseData = ref(null)
const errorMessage = ref(null)

const route = useRoute()
const router = useRouter()

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

const deleteCategory = async(id) => {
  await axios.delete('http://127.0.0.1:8000/api/v1/categories/'+id)
  router.push({name:"showcategories"})
}
</script>

<template>
  <div v-if="responseData">
        <h1 class="green">{{ responseData.title }}</h1>
        <p>{{ responseData.description }}</p>
        <button @click="deleteCategory(responseData.id)" class="deleteButton">Supprimer</button>

  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>