<script setup>

const logout = () => {
  localStorage.removeItem('token')
  user.value = null
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans text-gray-800">
    <header class="bg-white p-4 shadow flex justify-between items-center">
      <h1 class="text-xl font-bold">Contact</h1>
      <div class="flex gap-4 items-center">
        <span v-if="user" class="hidden sm:inline">Bonjour {{ user.name }}</span>
        <button v-if="user" @click="logout" class="text-red-500 text-sm font-bold">Déconnexion</button>
        <router-link v-else to="/login" class="text-blue-600 font-bold">Connexion</router-link>
      </div>
    </header>

    <main class="max-w-4xl mx-auto p-6">
      <div v-if="loading" class="text-center mt-10">Chargement...</div>

      <template v-else>
        <div v-if="user">
          <div class="flex justify-between mb-4">
          <h2>Mes Contacts ({{ contacts.length }})</h2>
          <router-link to="/create" class="mt-4 block bg-blue-600 text-white py-2 rounded-xl font-bold">+ Ajouter</router-link>
        </div>
          <div v-if="contacts.length" class="grid gap-4 sm:grid-cols-2">
            <div v-for="c in contacts" :key="c.id" class="bg-white p-5 rounded-2xl shadow-sm border text-center">
              <h3 class="font-bold text-lg">{{ c.firstname }} {{ c.lastname }}</h3>
              <p class="text-blue-500 text-sm">{{ c.position }} @ {{ c.company }}</p>
              <div class="mt-3 text-sm text-gray-500">
                <p>{{ c.phone }}</p>
                <p>{{ c.email }}</p>
              </div>
              <a :href="'tel:'+c.phone" class="mt-4 block bg-blue-600 text-white py-2 rounded-xl font-bold">Appeler</a>
            </div>
          </div>

          <div v-else class="text-center mt-10">
            <p class="mb-4">Aucun contact trouvé.</p>
            <router-link to="/add-contact" class="bg-green-600 text-white px-6 py-2 rounded-lg">+ Ajouter</router-link>
          </div>
        </div>

        <div v-else class="bg-white p-10 rounded-3xl shadow-sm text-center border-2 border-dashed">
          <h2 class="text-xl font-bold mb-2">Accès restreint</h2>
          <p class="mb-6 text-gray-500">Connectez-vous pour gérer vos contacts.</p>
          <router-link to="/login" class="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold">Se connecter</router-link>
        </div>
      </template>
    </main>
  </div>
</template>
