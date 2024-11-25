import { cn } from '@/lib/utils'

import { Svg, SvgProps } from '../base'

export const IconFramerMotion = ({ className, ...props }: SvgProps) => {
  return (
    <Svg className={cn('stroke-current stroke-1', className)} viewBox="0 0 24 24" {...props}>
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
      <path d="M20 12l-8 8l-4 -4" />
    </Svg>
  )
}
