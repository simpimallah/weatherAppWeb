
<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
   <Navbar/>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>




<style scoped>
#app {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  padding: 20px;
}
</style>
