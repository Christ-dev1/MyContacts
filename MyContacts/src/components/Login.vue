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

  <div class="flex justify-center items-center min-h-screen bg-white">
    <div class="w-full flex items-center justify-center">
      <div class="w-3/4 max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold text-blue-600 mb-6">Sign in</h2>
        <form>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2">Email</label>
            <input v-model="email" type="email" name="email" placeholder="Enter your email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2">
              Password
            </label>
            <input v-model="password" type="password" name="password" placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>


          <button @click="handleLogin()"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign in
          </button>
        </form>


        <p class="mt-6 text-sm text-center text-gray-600">
          Already have an account?
          <a href="/inscription" class="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
