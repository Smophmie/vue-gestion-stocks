<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'

const responseData = ref(null)
const errorMessage = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/welcome')
    responseData.value = response.data;
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<template>
  
  <div v-if="responseData">
    <h1 class="green">{{ responseData }}</h1 class=""green">
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
</style>
