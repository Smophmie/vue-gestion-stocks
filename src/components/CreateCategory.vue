<script setup>

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';


const createCategory = async () => {
  try {
    
  } catch (error) {
  }
}
</script>

<template>
  <div>
    <h1 class="green">Créer une catégorie</h1>
  </div>

  <form>
    <div>
      <input type="text" name="title" id="category_title" placeholder="Ma catégorie">
    </div>
    <div>
      <button type="submit" class="confirm_button">Créer</button>
    </div>
  </form>

</template>

<style scoped>

</style>
