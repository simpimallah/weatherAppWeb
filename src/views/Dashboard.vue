<template>
  <div class="dashboard">
    <h2>User Dashboard</h2>
    <p>Welcome back, <strong>{{ userEmail }}</strong>!</p>

    <!-- City Search -->
    <CitySearch @search="fetchCityWeather" />

    <!-- Last fetched weather -->
    <WeatherCard v-if="latestWeather" :weather="latestWeather" />

    <div class="stats">
      <div class="card">
        <h3>Saved Cities</h3>
        <p>{{ savedCities.length }}</p>
      </div>
      <div class="card">
        <h3>Weather History</h3>
        <p>{{ weatherHistory.length }} Entries</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../store/authStore'
import api from '../utils/axios'

import CitySearch from '../components/CitySearch.vue'
import WeatherCard from '../components/WeatherCard.vue'

const authStore = useAuthStore()
const userEmail = authStore.userEmail

const weatherHistory = ref<any[]>([])
const savedCities = ref<any[]>([])
const latestWeather = ref<null | {
  city: string
  temp: number
  description: string
  time: string
}>(null)

const fetchWeatherHistory = async () => {
  const res = await api.get('/weather/history')
  weatherHistory.value = res.data
  const cities = new Set(res.data.map((entry: any) => entry.city.name))
  savedCities.value = [...cities]
}

const fetchCityWeather = async (cityName: string) => {
  try {
    const res = await api.get(`/weather/city/${encodeURIComponent(cityName)}`)
    latestWeather.value = {
      city: cityName,
      temp: res.data.main.temp,
      description: res.data.weather[0].description,
      time: new Date().toLocaleString()
    }
    await fetchWeatherHistory()
  } catch (err: any) {
    console.error('City fetch failed:', err.response?.data || err.message)
  }
}

onMounted(fetchWeatherHistory)
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.dashboard h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #2563eb;
  margin-bottom: 20px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.card {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  flex: 1 1 200px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-bottom: 10px;
  color: #444;
}
</style>
