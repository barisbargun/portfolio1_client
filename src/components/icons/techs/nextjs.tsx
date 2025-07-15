import { cn } from '@/lib/utils'

import { Svg, type SvgProps } from '../base'

export const IconNextjs = ({ className, ...props }: SvgProps) => {
  return (
    <Svg className={cn('stroke-current stroke-1', className)} viewBox="0 0 24 24" {...props}>
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
      <path d="M15 12v-3" />
    </Svg>
  )
}
