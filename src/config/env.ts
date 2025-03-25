import * as z from 'zod'

const createEnv = () => {
  const schema = z.object({
    API_URL: z.string().default('http://localhost:8080'),
    RECAPTCHA_KEY: z.string()
  })

  const envVars: Record<string, string> = {}

  for (const [key, value] of Object.entries(import.meta.env)) {
    if (key.startsWith('VITE_')) {
      envVars[key.replace('VITE_', '')] = value
    }
  }

  const parsedEnv = schema.safeParse(envVars)

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
The following variables are missing or invalid:
${Object.entries(parsedEnv.error.flatten().fieldErrors)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n')}
`
    )
  }
  return parsedEnv.data
}

export const env = createEnv()
