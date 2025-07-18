import { cn } from '@/lib/utils'

import { Svg, type SvgProps } from '../base'

export const IconMongodb = ({ className, ...props }: SvgProps) => {
  return (
    <Svg className={cn('fill-current stroke-1', className)} viewBox="0 0 1570 3362" {...props}>
      <path d="m885 2959.9l-11.8 9.1c-10.4 162.2-36.6 392.3-36.6 392.3h-104.5c0 0-26.1-231.4-36.6-392.3l-11.7-7.8c0 0-1402.1-1042.2-190.8-2586.6 141.1-167.3 262.6-337.3 287.5-372.6 2.6-2.7 6.5-2.7 9.1 0 24.8 35.3 146.3 205.3 287.5 372.6 1211.3 1544.4-190.8 2586.6-192.1 2585.3zm-20.9-103.3v-2.6l-75.8-1681.7c0-5.2-7.8-5.2-7.8 0l-75.8 1681.7v2.6c17 27.4 79.7 81.1 79.7 81.1 0 0 62.7-53.7 79.7-81.1z" />
    </Svg>
  )
}
