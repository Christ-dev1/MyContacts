<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const error = ref('')

const form = ref({
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  gender: 'Male',
  birthdate: '',
  position: '',
  company: ''
})

const handleAdd = async () => {
  try {
    await api.createContact(form.value)
    router.push('/')
  } catch (err) {
    console.error("Erreur 400 détails :", err.response?.data)
    error.value = "Veuillez remplir tous les champs."
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Ajouter un Contact</h2>

      <form @submit.prevent="handleAdd" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">Prénom</label>
          <input v-model="form.firstname" type="text" required class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Nom</label>
          <input v-model="form.lastname" type="text" required class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input v-model="form.email" type="email" required class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Téléphone</label>
          <input v-model="form.phone" type="text" required placeholder="+225..." class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Genre</label>
          <select v-model="form.gender" class="w-full p-2 border rounded-lg">
            <option value="Male">Masculin</option>
            <option value="Female">Féminin</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium">Date de naissance</label>
          <input v-model="form.birthdate" type="date" placeholder="MM/DD/YYYY" required class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Poste / Position</label>
          <input v-model="form.position" type="text" required class="w-full p-2 border rounded-lg">
        </div>
        <div>
          <label class="block text-sm font-medium">Entreprise</label>
          <input v-model="form.company" type="text" required class="w-full p-2 border rounded-lg">
        </div>

        <div class="md:col-span-2 mt-4">
          <p v-if="error" class="text-red-500 mb-2">{{ error }}</p>
          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
            Enregistrer le Contact
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
