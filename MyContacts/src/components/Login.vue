<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleLogin = async () => {
  await auth.login({
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div>
    <h2>Connexion</h2>
    <input v-model="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Mot de passe">
    <button @click="handleLogin">Se connecter</button>
  </div>
</template>
