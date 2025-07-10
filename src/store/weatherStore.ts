import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface WeatherData {
  city: string
  temp: number
  description: string
  time: string
}

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<WeatherData | null>(null)
  const history = ref<WeatherData[]>([])

  const fetchWeatherByCity = async (city: string) => {
    try {
      const res = await fetch(`/api/weather/city/${encodeURIComponent(city)}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      const data = await res.json()

      const formatted: WeatherData = {
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        time: new Date().toLocaleTimeString(),
      }

      weather.value = formatted
      history.value.unshift(formatted)
// oxlint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Error fetching weather')
    }
  }

  const clearHistory = () => {
    history.value = []
  }

  return {
    weather,
    history,
    fetchWeatherByCity,
    clearHistory,
  }
})
