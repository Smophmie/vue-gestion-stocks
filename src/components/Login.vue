<script setup>

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

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

let user = reactive({
  email: "",
  password: ""
})

function login(){
    axios.post('http://127.0.0.1:8000/api/v1/login', user)
    .then(response => {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        router.push({ name: 'welcome' });
    })
    .catch(error => {
          errorMessage.value = error.response.data.message;
          alert(errorMessage.value);
    })}

</script>

<template>
  <h1>Connexion</h1>

  <form @submit.prevent="login">
    <div class="form_part">
      <label>E-mail</label>
      <input type="text" v-model="user.email" id="user_email">
    </div>
    <div class="form_part">
      <label>Mot de passe</label>
      <input type="password" v-model="user.password" id="user_password">
    </div>
    <button type="submit">Connexion</button>
  </form>
  
</template>

<style scoped>
</style>
