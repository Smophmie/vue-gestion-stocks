<script setup>

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()


const availableCategories = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/categories')
    availableCategories.value = response.data
  } catch (error) {
    errorMessage.value = error.message
  }
})

let form = reactive({
  name: "",
  price: 0,
  stock: 0,
  categories: []
})

const createProduct = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/v1/products', form)
    await router.push({name:"showproducts"})
  } catch (error) {
    errorMessage.value = error.message
  }
}
</script>

<template>
  <div>
    <h1 class="green">Créer un produit</h1>
  </div>

  <form @submit.prevent="createProduct()">
    <div class="form_part">
      <label for="name">Nom du produit</label>
      <input type="text" id="name" v-model="form.name" placeholder="Mon produit">
    </div>
    <div class="form_part">
      <label for="price">Prix</label>
      <input type="text" id="price" v-model="form.price" placeholder="5.00">
    </div>
    <div class="form_part">
      <label for="stock">Stock actuel</label>
      <input type="text" id="stock" v-model="form.stock" placeholder="100">
    </div>
    <div class="form_part">
      <label>Catégorie(s) associée(s)</label>
      <div v-for="category in availableCategories" :key="category.id" class="checkboxContainer">
        <input type="checkbox"  :value="category.id" v-model="form.categories">
        <label>{{ category.title }}</label>
      </div>
    </div>
    <div>
      <button type="submit" class="confirm_button">Créer</button>
    </div>
  </form>

</template>

<style scoped>

.checkboxContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

</style>
