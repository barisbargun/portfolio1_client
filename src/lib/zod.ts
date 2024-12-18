import { z } from 'zod'

declare module 'zod' {
  interface ZodString {
    setLengths(min: number, max: number, minMessage?: string, maxMessage?: string): ZodString
  }
}

z.ZodString.prototype.setLengths = function (
  min: number,
  max: number,
  minMessage = `You should enter at least ${min} characters`,
  maxMessage = `You should enter at most ${max} characters`
) {
  return this.min(min, minMessage).max(max, maxMessage)
}

export * from 'zod' // Re-export Zod
