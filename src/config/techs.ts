import { icons } from '@/assets'

type TechsConfig = {
  title: string
  icon?: string
}

const techsConfig: TechsConfig[] = [
  {
    title: 'React',
    icon: icons.react
  },
  {
    title: 'Vue',
    icon: icons.vue
  },
  {
    title: 'Next.js',
    icon: icons.next
  },
  {
    title: 'React Native',
    icon: icons.react
  },
  {
    title: 'Express.js',
    icon: icons.express
  },
  {
    title: 'Figma',
    icon: icons.figma
  },
  {
    title: 'TailwindCSS',
    icon: icons.tailwindcss
  }
]

export { techsConfig }
