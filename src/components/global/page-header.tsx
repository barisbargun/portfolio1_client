import type React from 'react'

import { cn } from '@/lib/utils'

type PageHeaderProps = React.HTMLAttributes<HTMLElement> & {
  center?: boolean
}

function PageHeader({ className, children, center, ...props }: PageHeaderProps) {
  return (
    <section
      className={cn(
        'flex max-w-3xl flex-col text-balance',
        center && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

function PageHeaderNav({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong
      className={cn(
        'mb-4 text-sm font-semibold uppercase tracking-[0.25rem] text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </strong>
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mt-4 lg:mt-6', className)} {...props} />
}

export { PageHeader, PageHeaderDescription, PageHeaderNav }

export { H2 as PageHeaderHeading } from '../ui/typography'
