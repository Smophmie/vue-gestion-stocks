<script setup>

import { useRouter } from 'vue-router';

let router = useRouter()

let token = localStorage.getItem('token')


function logout(){
  localStorage.removeItem('token');
  router.push({ name: 'Login' });
}

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/products">Produits</RouterLink>
      <RouterLink to="/categories">Catégories</RouterLink>    
      <RouterLink v-if="!token" to="/login">Connexion</RouterLink>
      <button v-if="token" @click="logout()">Se déconnecter</button>
      <!--<RouterLink to="/register">Créer un compte</RouterLink>  -->
    </nav>
  </header>
    
  <main>

    <RouterView/>

  </main>
</template>

<style scoped>
</style>
