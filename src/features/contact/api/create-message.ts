import axios from '@/lib/axios'

type CreateMessage = {
  name: string
  email: string
  message: string
  recaptcha: string
}

export const createMessage = async ({ name, email, message, recaptcha }: CreateMessage) => {
  return await axios.post('', JSON.stringify({ name, email, message }), {
    headers: { 'x-recaptcha-token': recaptcha }
  })
}
