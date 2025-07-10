<template>
  <div class="weather-card">
    <h2 class="weather-title">{{ weather.city }}</h2>
    <p class="weather-info">Temperature: {{ weather.temp }}°C</p>
    <p class="weather-info">Condition: {{ weather.description }}</p>
    <p class="weather-updated">Updated: {{ weather.time }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


interface Weather {
  city: string
  temp: number
  description: string
  time: string
}

 defineProps<{ weather: Weather }>()
</script>

<style scoped>
.weather-card {
  background-color: white;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;
  max-width: 400px;
  margin: 20px auto;
}

.weather-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.weather-info {
  margin: 4px 0;
  font-size: 1rem;
}

.weather-updated {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #777;
}
</style>
