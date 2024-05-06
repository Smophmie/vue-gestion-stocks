<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

import { ref, onMounted } from 'vue'
import axios from 'axios'

const responseData = ref(null)
const errorMessage = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/welcome')
    responseData.value = response.data
  } catch (error) {
    errorMessage.value = error.message
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
  <div v-if="responseData">
    <h2>{{ responseData }}</h2>
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
