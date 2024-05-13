<script setup>

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
  title: "",
  description: ""
})

const createCategory = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/v1/categories/', form)
    await router.push({name:"showcategories"})
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div>
    <h1 class="green">Créer une catégorie</h1>
  </div>

  <form @submit.prevent="createCategory()">
    <div>
      <input type="text" id="title" v-model="form.title" placeholder="Ma catégorie">
    </div>
    <div>
      <input type="text" id="description" v-model="form.description" placeholder="Ma description">

    </div>
    <div>
      <button type="submit" class="confirm_button">Créer</button>
    </div>
  </form>

</template>

<style scoped>

</style>
