import { z } from '@/lib/zod'

const contactSchema = z.object({
  name: z.string().setLengths(7, 100),
  email: z.email('validation.email'),
  message: z.string().setLengths(20, 800)
})

export { contactSchema }
