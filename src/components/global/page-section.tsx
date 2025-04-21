import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    nestedClassName?: string
    children?: React.ReactNode
  }

export const PageSection = ({ nestedClassName, className, children, ...props }: Props) => (
  <section className={cn('relative', className)} {...props}>
    <div className={cn('container mx-auto flex flex-col pt-20 lg:pt-24 xl:pt-28', nestedClassName)}>
      {children}
    </div>
  </section>
)
