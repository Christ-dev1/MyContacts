<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const user = ref(null)
const contacts = ref([])
const loading = ref(true)

onMounted(async () => {
  const token = localStorage.getItem('token')

  if (token) {
    try {
      const [resUser, resContacts] = await Promise.all([
        api.getMyProfile(),
        api.getAllContacts()
      ])

      user.value = resUser.data
      contacts.value = resContacts.data.data || resContacts.data

    } catch (e) {
      localStorage.removeItem('token')
      alert("Session expirée, veuillez vous reconnecter.")
      console.error(e)
    }
  }
  loading.value = false
})

const logout = () => {
  localStorage.removeItem('token')
  user.value = null
  router.push('/')
}
</script>
<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-800">

    <header class="bg-white p-4 shadow flex items-center justify-between">

      <h1 class="text-xl font-bold">Contact</h1>

      <div class="flex-1 flex justify-center">
        <div class="relative w-full max-w-xl bg-white rounded-full">
          <input placeholder="rechercher vos contacts par nom  ou téléphone" class="w-full h-12 rounded-full border-2 border-gray-100 pl-6 pr-28 outline-none shadow-md focus:ring-blue-500" />
          <button class="absolute right-3 top-2 bg-blue-600 text-white px-4 py-1 rounded-full">Search</button>
        </div>
      </div>

      <div class="flex gap-4 items-center">
        <a v-if="user" href="/profile">Bonjour {{ user.name }}</a>
        <button v-if="user" @click="logout" class="text-red-500 text-sm font-bold">Déconnexion</button>
        <router-link v-else to="/login" class="text-blue-600 font-bold">Connexion</router-link>
      </div>

    </header>
    <main class="max-w-4xl mx-auto p-6">
      <div v-if="loading">Chargement...</div>
      <template v-else>
        <div v-if="user">
          <div class="flex justify-between mb-4">
            <h2>Mes Contacts ({{ contacts.length }})</h2>
            <router-link to="/create" class="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold">+ Ajouter</router-link>
          </div>
          <div v-if="contacts.length" class="grid sm:grid-cols-2 gap-4">
            <div v-for="c in contacts" :key="c.id" class="bg-white p-5 rounded-2xl shadow-sm border text-center">
              <h3>{{ c.firstname }} {{ c.lastname }}</h3>
              <p class="text-blue-500 text-sm">{{ c.position }} @ {{ c.company }}</p>
              <p class="text-sm text-gray-500">{{ c.phone }}</p>
              <p class="text-sm text-gray-500">{{ c.email }}</p>

              <a :href="'tel:'+ c.phone" class="mt-3 block bg-blue-600 text-white py-2 rounded-xl font-bold">Appeler</a>
            </div>
          </div>

          <div v-else class="text-center mt-10">
            <p>Aucun contact</p>
            <router-link to="/add-contact" class="bg-green-600 text-white px-6 py-2 rounded-lg">+ Ajouter</router-link>
          </div>
        </div>

        <div v-else class="bg-white p-10 rounded-3xl shadow-sm text-center border-2 border-dashed">
          <h2>Accès restreint</h2>
          <p>Connectez-vous pour gérer vos contacts.</p>
        </div>
      </template>
    </main>
  </div>
</template>
