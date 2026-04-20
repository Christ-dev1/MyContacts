import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),

  actions: {
    async login(data) {
      const res = await axios.post('https://api-contact.zoul.dev/api/users/login', data)

      this.token = res.data.token
      localStorage.setItem('token', this.token)
    },

    async register(data) {
      await axios.post('https://api-contact.zoul.dev/api/users', data)
    },

    logout() {
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
