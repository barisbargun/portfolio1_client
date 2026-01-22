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
    role: 'experience.exps.intern.role',
    company: 'Lits Consulting',
    descriptions: [
      'experience.exps.intern.descriptions.1',
      'experience.exps.intern.descriptions.2',
      'experience.exps.intern.descriptions.3'
    ],
    date: 'experience.exps.intern.date',
    icon: BriefcaseBusiness
  }
]

export { experiencesConfig, type ExperiencesConfig }
