import { ExternalLink } from 'lucide-react'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Large } from '@/components/ui/typography'
import type { ProjectConfig } from '@/config/sections/projects'
import { useIsMobile } from '@/hooks/is-mobile'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & ProjectConfig

const colors = ['#2563eb', '#ca8a04', '#16a34a', '#dc2626']

export const ProjectCard = ({
  description,
  image,
  tags,
  title,
  url,
  className,
  ...props
}: Props) => {
  const isMobile = useIsMobile()

  const Image = ({ src, index }: { src: string; index: number }) => (
    <img
      className="w-full rounded-lg"
      src={src}
      alt={image.alt + ' ' + index}
      loading="lazy"
      width={417}
      height={235}
    />
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

  const ProjectCarousels = () => (
    <Carousel opts={{ loop: true }}>
      <AspectRatio ratio={16 / 9} className="w-full overflow-hidden rounded-xl">
        <CarouselContent>
          {image.srcs.map((src, index) => (
            <CarouselItem key={index}>
              <Image src={src} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </AspectRatio>
      <CarouselPrevious className="bottom-4 left-auto right-16 top-auto translate-y-0" />
      <CarouselNext className="bottom-4 right-4 top-auto translate-y-0" />
    </Carousel>
  )

  return isMobile ? (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-3">
        <ProjectCarousels />
        <Title />
        <p className="mb-4 mt-1">{description}</p>
        <div className="mt-auto flex items-center gap-3">
          <Tags />
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card
      className={cn(
        'group relative h-full transition-transform duration-300 shadowCard hover:z-10 hover:scale-110',
        className
      )}
      {...props}
    >
      <CardContent className="flex h-full flex-col p-0">
        <ProjectCarousels />
        <div className="flex h-full flex-col p-2 px-4">
          <Title />
          <p className="mb-4 mt-1">{description}</p>
          <div className="mt-auto flex items-center gap-3">
            <Tags />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
