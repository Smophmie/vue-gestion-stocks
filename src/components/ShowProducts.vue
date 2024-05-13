<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'


const responseData = ref(null)
const errorMessage = ref(null)
const router = useRouter()


onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/products')
    responseData.value = response.data
    console.log(responseData);
  } catch (error) {
    errorMessage.value = error.message
  }
})

const deleteProduct = async(id) => {
  await axios.delete('http://127.0.0.1:8000/api/v1/products/'+id)
  router.push({name:"welcome"})
}
</script>

<template>
  <div>
    <h1 class="green">Mes produits</h1>
  </div>
  <div class="add_form_link">
    <RouterLink to="/products/create"><i class="fa-regular fa-square-plus"></i> Ajouter un nouveau produit</RouterLink>
  </div>
  <div v-if="responseData">
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Catégorie(s)</th>
          <th class="actions_cells"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Data in responseData">
          <th>{{ Data.name }}</th>
          <td>{{ Data.price }}€</td>
          <td>{{ Data.stock }}</td>
          <td>
            <span v-for="category in Data.categories">
              {{ category }}
            </span> 
          </td>
          <td class="actions_cells">
            <RouterLink :to="'/products/' + Data.id">Voir</RouterLink>
            <RouterLink :to="'/products/update/' + Data.id">Modifier</RouterLink>
            <button @click="deleteProduct(Data.id)" class="deleteButton">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
