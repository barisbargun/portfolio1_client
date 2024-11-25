import { forwardRef, HTMLAttributes } from 'react'

import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d'
import { Meteors } from '@/components/ui/card-meteor'
import { AboutConfig } from '@/constants/sections/about'
import { cn } from '@/lib/utils'

type Props = HTMLAttributes<HTMLDivElement> & AboutConfig['roles'][0]

const CardBasic3D = forwardRef<HTMLDivElement, Props>(
  ({ image, text, className, style, ...props }, ref) => {
    return (
      <CardContainer
        className={cn(
          'relative h-full w-44 overflow-hidden rounded-xl border border-border bg-card p-[1px] py-10 text-center shadowCard',
          className
        )}
        style={{ perspective: '70px', ...style }}
        ref={ref}
        {...props}
      >
        <CardBody className="flex size-full flex-col items-center">
          <CardItem translateZ={10}>
            <img
              className="w-14 rounded-lg"
              src={image}
              alt="icon"
              loading="lazy"
              width={80}
              height={80}
            />
          </CardItem>
          <CardItem as="small" className="mt-3 max-w-28 text-sm font-bold leading-5" translateZ={5}>
            {text}
          </CardItem>
        </CardBody>
        <Meteors number={5} />
      </CardContainer>
    )
  }
)
CardBasic3D.displayName = 'CardBasic3D'
export { CardBasic3D }
