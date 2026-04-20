<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleRegister = async () => {
  await auth.register({
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>
<template>
  <div>
    <h2>Inscription</h2>
    <input v-model="name" placeholder="Nom">
    <input v-model="email" placeholder="Email">
    <input v-model="password" type="password">
    <button @click="handleRegister">S'inscrire</button>
  </div>
</template>
