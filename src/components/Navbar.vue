<template>
  <nav class="navbar">
    <h1 class="navbar-brand">WeatherApp</h1>
    <div class="navbar-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink v-if="!authStore.token" to="/login" class="nav-link">Login</RouterLink>
      <RouterLink v-if="!authStore.token" to="/register" class="nav-link">Register</RouterLink>
      <RouterLink v-if="authStore.token" to="/dashboard" class="nav-link">Dashboard</RouterLink>
      <button v-if="authStore.token" @click="logout" class="nav-link button-link">Logout</button>
    </div>
  </nav>
</template>


<script setup lang="ts">
import { useAuthStore } from '../store/authStore';
import { useRouter, RouterLink } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<style scoped>
.navbar {
  background-color: #2563eb; /* Tailwind blue-600 */
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: white;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;
  padding: 0;
}

.nav-link:hover {
  text-decoration: none;
  color: #000;
}

.button-link {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
