<template>
  <header class="app-header">
    <h1>Stock Watcher</h1>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/exchanges" class="nav-link">Exchange Info</router-link>
      <router-link to="/connect" class="nav-link">Connect</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.app-header {
  background-color: #007BFF; 
  color: white; 
  padding: 15px; 
  text-align: center; 
}

h1 {
  margin: 0; 
  font-size: 2em; 
}

nav {
  margin-top: 10px; 
}

.nav-link {
  color: white; 
  text-decoration: none; 
  margin: 0 15px; 
  font-weight: bold; 
  transition: color 0.3s; 
}

.nav-link:hover {
  color: #ffd700; 
}
</style>
