import { Card, CardContent } from '@/components/ui/card'
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d'
import { Meteors } from '@/components/ui/card-meteor'
import type { AboutConfig } from '@/config/sections/about'
import { useIsMobile } from '@/hooks/is-mobile'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & AboutConfig['roles'][0]

export const CardBasic3D = ({ image, text, className, ...props }: Props) => {
  const isMobile = useIsMobile()

  return isMobile ? (
    <Card className="h-full">
      <CardContent className="flex size-full flex-col items-center pt-6 text-center">
        <div>
          <img
            className="w-14 rounded-lg"
            src={image}
            alt="icon"
            loading="lazy"
            width={80}
            height={80}
          />
        </div>
        <div className="mt-3 max-w-28 text-sm font-bold leading-5">{text}</div>
      </CardContent>
    </Card>
  ) : (
    <CardContainer
      className={cn(
        'relative h-full w-44 overflow-hidden rounded-xl border border-border bg-card p-[1px] py-10 text-center shadowCard',
        className
      )}
      perspective="70px"
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
