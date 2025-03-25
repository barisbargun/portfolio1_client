import 'react-vertical-timeline-component/style.min.css'

import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import { IconStar } from '@/components/icons/star'
import { Small } from '@/components/ui/typography'
import { ExperiencesConfig } from '@/config/sections/experiences'

type Props = ExperiencesConfig

export const ExperienceCard = ({ company, descriptions, role, date, icon: Icon }: Props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work w-full [&>div]:bg-card [&>div]:shadowCard"
      contentStyle={{ color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #10152D' }}
      // @ts-expect-error - Date styling
      date={
        <Small className="font-sourceCodePro font-semibold uppercase text-muted-foreground max-sm:text-xs sm:tracking-widest">
          {date}
        </Small>
      }
      iconStyle={{
        background: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        boxShadow: '0 0 0 4px hsl(var(--foreground))'
      }}
      icon={Icon && <Icon className="scale-110 object-contain" />}
    >
      <h3 className="block font-bold text-foreground">{role}</h3>
      <Small className="uppercase text-muted-foreground">{company}</Small>
      <ul className="mt-2 flex flex-col gap-3 text-foreground">
        {descriptions.map((v, ind) => (
          <li key={ind} className="flex items-start">
            <IconStar className="mt-1 size-4" />
            <p className="!ml-2 !mt-0 flex-1 !text-sm">{v}</p>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
