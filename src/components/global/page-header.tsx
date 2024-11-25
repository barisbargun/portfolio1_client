import { HTMLMotionProps, motion } from 'framer-motion'

import { motions } from '@/lib/motions'
import { cn } from '@/lib/utils'

import { H2 } from '../ui/typography'

type PageHeaderProps = HTMLMotionProps<'section'> & {
  center?: boolean
}

function PageHeader({ className, children, center, ...props }: PageHeaderProps) {
  return (
    <motion.section
      className={cn(
        'flex max-w-3xl flex-col text-balance',
        center && 'mx-auto text-center',
        className
      )}
      variants={motions.variants.fadeIn({})}
      {...motions.showOnlyViewOnce}
      {...props}
    >
      {children}
    </motion.section>
  )
}

function PageHeaderNav({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong
      className={cn(
        'mb-4 text-xs font-semibold uppercase tracking-[0.25rem] text-muted-foreground xl:text-sm',
        className
      )}
      {...props}
    >
      {children}
    </strong>
  )
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <H2 className={cn('max-lg:text-4xl', className)} {...props} />
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mt-4 lg:mt-6', className)} {...props} />
}

export { PageHeader, PageHeaderDescription, PageHeaderHeading, PageHeaderNav }
