<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const responseData = ref(null)
const errorMessage = ref(null)
const router = useRouter()


async function getCategories() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/categories')
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
}

onMounted(getCategories)

const deleteCategory = async(id) => {
  await axios.delete('http://127.0.0.1:8000/api/v1/categories/'+id)
  getCategories();
}


</script>

<template>
  <div>
    <h1 class="green">Toutes les catégories</h1>
  </div>
  <div class="add_form_link">
    <RouterLink to="/categories/create"><i class="fa-regular fa-square-plus"></i> Ajouter une nouvelle catégorie</RouterLink>
  </div>

  <div v-if="responseData">
    <table>
      <thead>
        <th>Catégorie</th>
        <th class="actions_cells"></th>
      </thead>
      <tbody v-for="Data in responseData">
        <th>{{ Data.title }}</th>
        <td class="actions_cell">
          <RouterLink :to="{ name: 'showcategory', params: { id : Data.id }}">Voir</RouterLink>
          <RouterLink :to="{ name: 'updatecategory', params: { id : Data.id }}">Modifier</RouterLink>
          <button @click="deleteCategory(Data.id)" class="deleteButton">Supprimer</button>
        </td>
      </tbody>
    </table>
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
