import { BriefcaseBusiness } from 'lucide-react'

type ExperiencesConfig = {
  role: string
  company: string
  descriptions: string[]
  date?: string
  icon?: ({ className }: any) => any
}

const experiencesConfig: ExperiencesConfig[] = [
  {
    role: 'experiences.role',
    company: 'Lits Consulting',
    descriptions: [
      'experiences.descriptions.1',
      'experiences.descriptions.2',
      'experiences.descriptions.3'
    ],
    date: 'experiences.date',
    icon: BriefcaseBusiness
  }
]

export { experiencesConfig, type ExperiencesConfig }
