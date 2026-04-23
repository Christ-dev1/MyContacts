<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref(null)
const contacts = ref([])
const loading = ref(true)
const editingProfile = ref(false)
const formUser = ref({})

onMounted(async () => {

  try {

    const [u, c] = await Promise.all([
      api.getMyProfile(),
      api.getMyContacts()

    ])
    user.value = u.data
    formUser.value = { ...u.data }
    contacts.value = c.data.data || c.data
console.log('USER:', u.data)
console.log('CONTACTS:', c.data)

  } catch (e) {
    console.error(e)
  }
  loading.value = false
})

const deleteContact = async (id) => {
  if (!confirm('Supprimer ce contact ?')) return

  try {
    await api.deleteContact(id)

    contacts.value.data = contacts.value.data.filter(c => c._id !== id)
  } catch (e) {
    console.error(e)
  }
}

const logout = () => {
  localStorage.removeItem('token')
  user.value = null
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <div v-if="loading" class="text-center mt-10">
      Chargement...
    </div>
    <div v-else class="max-w-5xl mx-auto p-4 space-y-6">
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
      <div class="bg-white rounded-2xl shadow p-6 space-y-4">

        <div class="flex justify-between items-center">
  <h2 class="text-lg font-bold">Mon Profil</h2>

  <button
    @click="editingProfile = !editingProfile"
    class="px-4 py-1 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700"
  >
    {{ editingProfile ? 'Annuler' : 'Modifier' }}
  </button>
</div>

        <div v-if="!editingProfile" class="space-y-1">
          <p class="font-semibold">{{ user.name }}</p>
          <p class="text-gray-500">{{ user.email }}</p>
        </div>

        <div v-else class="space-y-3">
          <input v-model="formUser.name" class="w-full border p-2 rounded-xl" />
          <input v-model="formUser.email" class="w-full border p-2 rounded-xl" />

          <button class="bg-green-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-green-700">
            Enregistrer
          </button>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold"> Mes Contacts ({{ contacts.length }})</h2>
          <router-link to="/Create"
            class="bg-green-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-green-700 text-sm">
            + Ajouter
          </router-link>
        </div>
        <div v-if="contacts.length" class="grid sm:grid-cols-2 gap-4">
          <div v-for="c in contacts" :key="c._id" class="border rounded-2xl p-4 hover:shadow-md transition">
            <h3 class="font-bold text-lg">{{ c.firstname }} {{ c.lastname }}</h3>
            <p class="text-sm text-gray-500 mb-3">{{ c.phone }}</p>

            <div class="flex gap-2">
              <router-link :to="`/contacts/${c._id}/edit`"
                class="flex-1 text-center bg-yellow-500 text-white py-1 rounded-xl font-bold hover:bg-yellow-600">
                Modifier
              </router-link>

              <button @click="deleteContact(c._id)" class="flex-1 bg-red-500 text-white py-1 rounded-xl font-bold hover:bg-red-600">
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <p v-else class="text-center text-gray-400 mt-4">
          Aucun contact
        </p>
      </div>
    </div>
  </div>
</template>
