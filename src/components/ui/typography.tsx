import { cn } from '@/lib/utils'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'strong' | 'span'
}

const H1 = ({ as: Tag = 'h1', className, ...props }: HeadingProps) => (
  <Tag
    className={cn(
      'scroll-m-20 text-5xl font-extrabold sm:text-5xl xl:text-6xl 2xl:text-7xl',
      className
    )}
    {...props}
  />
)

const H2 = ({ as: Tag = 'h2', className, ...props }: HeadingProps) => (
  <Tag className={cn('scroll-m-20 text-5xl font-extrabold xl:text-6xl', className)} {...props} />
)

const Large = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('font-semibold xl:text-lg', className)} {...props} />
)

const Small = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <small className={cn('font-medium max-xl:text-xs', className)} {...props} />
)

const Ul = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn('my-6', className)} {...props} />
)

export { H1, H2, Large, Small, Ul }
