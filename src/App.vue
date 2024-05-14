<script setup>
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/products">Produits</RouterLink>
      <RouterLink to="/categories">Catégories</RouterLink>    
      <RouterLink to="/login">Connexion</RouterLink>
      <RouterLink to="/register">Créer un compte</RouterLink> 
    </nav>
  </header>
    
  <main>

    <RouterView/>

  </main>
</template>

<style scoped>
</style>
