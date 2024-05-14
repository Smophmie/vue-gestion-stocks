<script setup>

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const categoryId = ref(route.params.id)

const form = reactive({
  title: "",
  description: ""
})


const loadCategoryDetails = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/categories/${categoryId.value}`)
    form.title = response.data.title
    form.description = response.data.description
  } catch (error) {
    errorMessage.value = error.message
  }
}

onMounted(loadCategoryDetails);

const updateCategory = async () => {
  try {
    await axios.put(`http://127.0.0.1:8000/api/v1/categories/${categoryId.value}`, form)
    await router.push({name:"showcategories"})
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div>
    <h1 class="green">Mettre à jour une catégorie</h1>
  </div>

  <form @submit.prevent="updateCategory()">
    <div class="form_part">
      <label>Nom de la catégorie</label>
      <input type="text" id="title" v-model="form.title" placeholder="Ma catégorie">
    </div>
    <div class="form_part">
      <label>Description de la catégorie</label>
      <input type="text" id="description" v-model="form.description" placeholder="Ma description">
    </div>
    <div>
      <button type="submit" class="confirm_button">Mettre à jour</button>
    </div>
  </form>

</template>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
