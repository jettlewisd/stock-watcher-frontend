<template>
  <div id="stock-app">
    <AppHeader /> 
    <nav>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token">
        Logout
      </router-link>
      <router-link v-bind:to="{ name: 'login' }" v-else>
        Login
      </router-link>
    </nav>

    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
#stock-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

nav {
  margin: 10px 0; 
}
</style>
