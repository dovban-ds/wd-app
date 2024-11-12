import axios from 'axios'

const api = axios.create({
  baseURL: 'https://test-task-server-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
