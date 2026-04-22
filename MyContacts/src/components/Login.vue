<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const form = ref({ email: '', password: '' })
const router = useRouter()

const handleLogin = async () => {
  try {
    const { data } = await api.login(form.value)
    localStorage.setItem('token', data.token)
    router.push('/')
  } catch (err) {
    alert(err.response?.data?.message || "Erreur de connexion")
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="handleLogin" class="w-full max-w-md p-8 shadow-lg rounded-lg border space-y-4">
      <h2 class="text-2xl font-bold text-blue-600 text-center">Sign in</h2>

      <input v-model="form.email" type="email" placeholder="Email" required class="w-full p-2 border rounded" />
      <input v-model="form.password" type="password" placeholder="Password" required class="w-full p-2 border rounded" />

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded font-bold">Sign in</button>

      <p class="text-center text-sm">
        Don't have an account? <router-link to="/inscription" class="text-blue-600">Sign up</router-link>
      </p>
    </form>
  </div>
</template>
