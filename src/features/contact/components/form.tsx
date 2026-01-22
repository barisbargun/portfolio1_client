import { zodResolver } from '@hookform/resolvers/zod'
import React, { lazy, Suspense, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
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
          if (v.status == 200) return toast.success(t('toast.message.success'))
        })
        .catch(() => {
          toast.error(t('toast.message.fail'), { description: t('toast.message.fail_description') })
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
              <FormLabel>{t('contact.fields.name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.fields.name_placeholder')} {...field} />
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
              <FormLabel>{t('contact.fields.email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.fields.email_placeholder')} {...field} />
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
              <FormLabel>{t('contact.fields.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('contact.fields.message_placeholder')}
                  rows={7}
                  {...field}
                />
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
          {sending ? t('buttons.pending') : t('buttons.submit')}
        </Button>
      </form>
    </Form>
  )
}
