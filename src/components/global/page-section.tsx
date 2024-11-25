import { forwardRef, HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type Props = HTMLAttributes<HTMLDivElement> & {
  nestedClassName?: string
  children?: React.ReactNode
}

const PageSection = forwardRef<HTMLDivElement, Props>(
  ({ nestedClassName, className, children, ...props }, ref) => {
    return (
      <section className={cn('relative', className)} ref={ref} {...props}>
        <div
          className={cn('container mx-auto flex flex-col pt-20 lg:pt-24 xl:pt-28', nestedClassName)}
        >
          {children}
        </div>
      </section>
    )
  }
)

PageSection.displayName = 'PageSection'

export { PageSection }
