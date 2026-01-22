import { IconAbap } from '@/components/icons/techs/abap'
import { IconExpressjs } from '@/components/icons/techs/expressjs'
import { IconFigma } from '@/components/icons/techs/figma'
import { IconNextjs } from '@/components/icons/techs/nextjs'
import { IconReact } from '@/components/icons/techs/react'
import { IconTailwindcss } from '@/components/icons/techs/tailwindcss'

type TechsConfig = {
  icon?: ({ className }: any) => any
  title: string
}

const techsConfig: TechsConfig[] = [
  {
    title: 'React',
    icon: IconReact
  },
  {
    title: 'Next.js',
    icon: IconNextjs
  },
  {
    title: 'Express.js',
    icon: IconExpressjs
  },
  {
    title: 'React Native',
    icon: IconReact
  },
  {
    title: 'SAP/ABAP',
    icon: IconAbap
  },
  {
    title: 'Figma',
    icon: IconFigma
  },
  {
    title: 'TailwindCSS',
    icon: IconTailwindcss
  }
]

export { techsConfig }
