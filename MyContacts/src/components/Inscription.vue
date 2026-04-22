<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const form = ref({ name: '', email: '', password: '', confirm_password: '' })
const router = useRouter()

const handleRegister = async () => {
  if (form.value.password !== form.value.confirm_password)
    return alert("Mots de passe différents")

  try {
    await api.register(form.value)
    router.push('/login')
  } catch (err) {
    alert(err.response?.data?.message || "Erreur inscription")
  }
}
</script>
<template>
  <div class="flex justify-center items-center min-h-screen">
    <form @submit.prevent="handleRegister" class="w-full max-w-md p-8 shadow-lg rounded-lg border space-y-4">
      <h2 class="text-2xl font-bold text-blue-600 text-center">Sign up</h2>

      <input v-model="form.name" type="text" placeholder="Username" required class="w-full p-2 border rounded" />
      <input v-model="form.email" type="email" placeholder="Email" required class="w-full p-2 border rounded" />
      <input v-model="form.password" type="password" placeholder="Password" required
        class="w-full p-2 border rounded" />
      <input v-model="form.confirm_password" type="password" placeholder="Confirm Password" required
        class="w-full p-2 border rounded" />

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded font-bold">Sign up</button>

      <p class="text-center text-sm">
        Already have an account? <router-link to="/login" class="text-blue-600">Sign in</router-link>
      </p>
    </form>
  </div>
</template>
