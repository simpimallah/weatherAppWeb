<template>
  <form @submit.prevent="searchCity" class="search-form">
    <input
      v-model="city"
      type="text"
      placeholder="Enter city..."
      class="search-input" @keyup.enter="emitSearch"
    />
    <button type="submit" @click="emitSearch" class="search-button">
      Search
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '../utils/axios'
const emit = defineEmits(['search'])

const city = ref('')
const emitSearch = () => {
  if (city.value.trim()) {
    emit('search', city.value.trim())
    city.value = ''
  }
}
const searchCity = async () => {
  if (!city.value.trim()) return

  try {
    const res = await api.get(`/weather/city/${encodeURIComponent(city.value.trim())}`)

    emit('search', {
      city: res.data.name,
      temp: res.data.main.temp,
      description: res.data.weather[0].description,
      time: new Date().toLocaleString(),
    })

    city.value = ''
  } catch (err: any) {
    alert(err.response?.data?.message || 'Failed to fetch weather')
  }
}
</script>

<style scoped>
.search-form {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
  flex-wrap: wrap;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 240px;
  font-size: 1rem;
  background-color: white;
  color: #333;
}

.search-button {
  padding: 8px 16px;
  background-color: #2563eb; /* blue-600 */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #1e40af; /* blue-700 */
}
</style>
