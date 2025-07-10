<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore' // Adjust path if needed
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const submit = async () => {
   await authStore.login(email.value, password.value)
  alert(`Login with ${email.value}, ${password.value}`)
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.auth-container h2 {
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #aaa;
  border-radius: 6px;
}

button {
  padding: 10px;
  background-color: #2563eb;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #1e40af;
}
</style>
