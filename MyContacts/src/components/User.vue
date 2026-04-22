<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const users = ref([])
const page = ref(1)

const load = async (p) => {
  try {
    const { data } = await api.getAllUsers({ page: p, limit: 10 })
    users.value = data.data
    page.value = p
  } catch (err) {
    alert(err.response?.data?.message || "Erreur chargement utilisateurs")
    console.error("Erreur chargement")
  }
}

onMounted(() => load(1))
</script>

<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-xl font-bold mb-4">Utilisateurs (Page {{ page }})</h1>

    <div class="border rounded divide-y mb-4">
      <div v-for="u in users" :key="u.id" class="p-3">
        <div class="font-bold">{{ u.name }}</div>
        <div class="text-sm text-gray-500">{{ u.email }}</div>
      </div>
    </div>

    <div class="flex justify-between">
      <button @click="load(page - 1)" :disabled="page === 1" class="border px-4 py-1 rounded shadow-sm disabled:opacity-30">
        Précédent
      </button>
      <button @click="load(page + 1)" :disabled="users.length < 10" class="border px-4 py-1 rounded shadow-sm disabled:opacity-30">
        Suivant
      </button>
    </div>
  </div>
</template>
