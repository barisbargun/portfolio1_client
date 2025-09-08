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
    role: 'Software Programming Intern',
    company: 'Lits Consulting',
    descriptions: [
      'I gained experience in OOP, ALV, SQL queries, Adobe Forms and debugging.',
      'During the internship, I kept my focus on writing clean code and successfully finished two projects.',
      'I used classes and data tables in my projects. I wrote comprehensive SQL queries by establishing relationships between multiple tables.'
    ],
    date: 'August 2025',
    icon: BriefcaseBusiness
  }
]

export { experiencesConfig, type ExperiencesConfig }
