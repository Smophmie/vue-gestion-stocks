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
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`)
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})

const deleteProduct = async(id) => {
  await axios.delete('http://127.0.0.1:8000/api/v1/products/'+id)
  router.push({name:"showproducts"})
}
</script>

<template>

  <div v-if="responseData">
    <h1 class="green">{{responseData.name}}</h1>
    <p>Tarif : {{ responseData.price }}</p>
    <p>Stock : {{ responseData.stock }}</p>
    <p v-if="responseData.categories && responseData.categories.length > 0">
      Catégorie(s) :
      <span v-for="category in responseData.categories">
        {{ category }}
      </span> 
    </p> 
    <button @click="deleteProduct(responseData.id)" class="deleteButton">Supprimer</button>  

  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
