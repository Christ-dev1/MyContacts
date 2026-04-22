import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api-contact.zoul.dev/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default {
  login(credentials) {
    return apiClient.post('/users/login', credentials)
  },

  register(userData) {
    return apiClient.post('/users', userData)
  },

  getAllUsers(params = {}) {
    return apiClient.get('/users', { params })
  },

  getMyProfile() {
    return apiClient.get('/users/me')
  },

  updateMyProfile(data) {
    return apiClient.put('/users/me', data)
  },

  updateMyPassword(passwords) {
    return apiClient.put('/users/me/password', passwords)
  },

  createContact(contactData) {
    return apiClient.post('/contacts', contactData)
  },

  getAllContacts() {
    return apiClient.get('/contacts')
  },

  getMyContacts() {
    return apiClient.get('/contacts/me')
  },

  getContactById(id) {
    return apiClient.get(`/contacts/${id}`)
  },

  updateContact(id, data) {
    return apiClient.put(`/contacts/${id}`, data)
  },

  deleteContact(id) {
    return apiClient.delete(`/contacts/${id}`)
  }
}
