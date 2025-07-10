import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import router from '../router'
import api from '../utils/axios' // ✅ Axios instance

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const userEmail = ref<string | null>(localStorage.getItem('userEmail'))

  const isAuthenticated = computed(() => !!token.value)

  

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/auth/login', { email, password }) // ✅ Axios POST
      token.value = res.data.token
      userEmail.value = res.data.email

      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userEmail', res.data.email)

      router.push('/dashboard')
    } catch (err: any) {
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  const logout = () => {
    token.value = null
    userEmail.value = null
    localStorage.clear()
    router.push('/login')
  }

  return {
    token,
    userEmail,
    isAuthenticated,
    login,
    logout
  }
})
