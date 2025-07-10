<template>
  <div class="auth-container">
    <h2>Register</h2>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../utils/axios' // Adjust path if needed

const name = ref('')
const email = ref('')
const password = ref('')

const router = useRouter()

const submit = async () => {
  try {
    const res = await api.post('/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value
    })

    alert(res.data.message || 'Registered successfully!')
    router.push('/login')
  } catch (err: any) {
    alert(err.response?.data?.message || 'Registration failed.')
  }
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
  background-color: #16a34a;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #15803d;
}
</style>
