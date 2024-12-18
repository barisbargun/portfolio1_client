import { z } from '@/lib/zod'

const contactSchema = z.object({
  name: z.string().setLengths(7, 100),
  email: z.string().setLengths(0, 100).email({ message: 'You should enter a valid email' }),
  message: z.string().setLengths(20, 800)
})

export { contactSchema }
