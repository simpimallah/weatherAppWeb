import axios from 'axios'


// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL || 'https://weatherapp-cpdf.onrender.com/api', // Make sure this is your actual backend API base
  headers: {
    'Content-Type': 'application/json',
  },
})

// Attach Bearer token from localStorage to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default api
