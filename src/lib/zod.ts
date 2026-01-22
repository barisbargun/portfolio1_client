import { z } from 'zod'

declare module 'zod' {
  interface ZodString {
    setLengths(min: number, max: number, minMessage?: string, maxMessage?: string): ZodString
  }
}

z.ZodString.prototype.setLengths = function (min: number, max: number) {
  return this.min(min, `min=${min}`).max(max, `max=${max}`)
}

export * from 'zod' // Re-export Zod
