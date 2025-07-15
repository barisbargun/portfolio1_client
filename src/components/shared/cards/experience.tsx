import { IconStar } from '@/components/icons/star'
import { Small } from '@/components/ui/typography'
import { type ExperiencesConfig } from '@/config/sections/experiences'
import { VerticalTimelineElement } from '@/features/vertical-timeline/card'

export const ExperienceCard = ({
  company,
  descriptions,
  role,
  date,
  icon: Icon
}: ExperiencesConfig) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #10152D' }}
      date={date}
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
