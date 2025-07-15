import { zodResolver } from '@hookform/resolvers/zod'
import React, { lazy, Suspense, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { env } from '@/config/env'
import { cn } from '@/lib/utils'

import { createMessage } from '../api/create-message'
import { contactSchema } from '../lib/validation'

type Props = React.HTMLProps<HTMLFormElement>

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export const ContactForm = ({ className, ...props }: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '400px' })

  const recaptchaRef = useRef<any>(null)
  const [sending, setSending] = useState(false)

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const recaptchaValue = recaptchaRef?.current?.getValue()
    if (recaptchaValue && !sending) {
      setSending(true)

      createMessage({
        name: values.name,
        email: values.email,
        message: values.message,
        recaptcha: recaptchaValue
      })
        .then((v) => {
          if (v.status == 200) return toast.success('Message sent successfully')
        })
        .catch(() => {
          toast.error('Failed to send message', { description: 'Please try again later.' })
        })
        .finally(() => {
          setSending(false)
          form.reset()
          recaptchaRef?.current?.reset()
        })
    }
  }

  return (
    <Form {...form}>
      <form
        className={cn('space-y-4', className)}
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message." rows={7} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {inView && (
          <Suspense>
            <ReCAPTCHA
              sitekey={env.RECAPTCHA_KEY}
              ref={recaptchaRef}
              className="w-full max-sm:flex-center"
            />
          </Suspense>
        )}
        <Button disabled={sending} type="submit" variant="secondary" size="lg">
          {sending ? 'Sending' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}
