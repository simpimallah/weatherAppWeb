import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded route components
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const Dashboard = () => import('../views/Dashboard.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Optional: for route guarding
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
