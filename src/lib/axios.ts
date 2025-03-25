import axios from 'axios'

import { env } from '@/config/env'

export default axios.create({
  baseURL: `${env.API_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
