import { ExternalLink } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d'
import { Large } from '@/components/ui/typography'
import { useIsMobile } from '@/hooks/is-mobile'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  description: string
  image: { src: string; alt: string }
  tags: string[]
  title: string
  url: string
}

const colors = ['#2563eb', '#ca8a04', '#16a34a', '#dc2626']

export const Card3D = ({ description, image, tags, title, url, className, ...props }: Props) => {
  const isMobile = useIsMobile()

  const Image = () => (
    <img className="w-full rounded-lg" {...image} loading="lazy" width={417} height={235} />
  )

  const Title = () => (
    <a className="mt-3 flex items-center gap-2" href={url} target="_blank" rel="noreferrer">
      <Large>{title}</Large>
      <ExternalLink className="size-4" />
    </a>
  )

  const Tags = () =>
    tags?.map((tech, index) => (
      <strong key={tech} style={{ color: colors[index % 4] }} className="text-sm">
        #{tech}
      </strong>
    ))

  return isMobile ? (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-3">
        <Image />
        <Title />
        <p className="mb-4 mt-1">{description}</p>
        <div className="mt-auto flex items-center gap-3">
          <Tags />
        </div>
      </CardContent>
    </Card>
  ) : (
    <CardContainer className={cn('h-full rounded-lg bg-card p-4 shadowCard', className)} {...props}>
      <CardBody className="flex h-full flex-col">
        <CardItem translateZ="60">
          <Image />
        </CardItem>
        <CardItem translateZ={20}>
          <Title />
        </CardItem>
        <CardItem className="mb-4 mt-1" as="p" translateZ={20}>
          {description}
        </CardItem>
        <CardItem className="mt-auto flex items-center gap-3" translateZ={20}>
          <Tags />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
