import { icons, screenshots } from '@/assets'

export type ProjectConfig = {
  title: string
  description: string
  tags: string[]
  image: {
    srcs: string[]
    alt: string
  }
  url: string
}

export const projectsConfig: ProjectConfig[] = [
  {
    title: 'projects.projects.newtod.title',
    description: 'projects.projects.newtod.description',
    tags: ['vue', 'supabase', 'tailwindcss'],
    image: {
      srcs: screenshots.newtod,
      alt: 'newtod app'
    },
    url: 'https://barisolgun-newtod.netlify.app/'
  },
  {
    title: 'projects.projects.carRent.title',
    description: 'projects.projects.carRent.description',
    tags: ['react', 'express', 'monorepo'],
    image: {
      srcs: screenshots.car_rent,
      alt: 'car rent app'
    },
    url: 'https://barisolgun-car-rent-client.netlify.app/'
  },
  {
    title: 'projects.projects.socialMedia.title',
    description: 'projects.projects.socialMedia.description',
    tags: ['react', 'appwrite', 'tailwindcss'],
    image: {
      srcs: screenshots.snapgram,
      alt: 'snapgram app'
    },
    url: 'https://barisolgun-snapgram.netlify.app/'
  },
  {
    title: 'projects.projects.portfolio.title',
    description: 'projects.projects.portfolio.description',
    tags: ['next.js', 'tailwindcss', 'framer-motion'],
    image: {
      srcs: screenshots.portfolio,
      alt: 'portfolio app'
    },
    url: 'https://barisolgun-portfolio2.vercel.app/'
  },
  {
    title: 'projects.projects.landingPage.title',
    description: 'projects.projects.landingPage.description',
    tags: ['react', 'tailwindcss', 'framer-motion'],
    image: {
      srcs: screenshots.bussli,
      alt: 'landing page'
    },
    url: 'https://barisolgun-bussli.netlify.app/'
  }
]

export type ProjectTagConfig = {
  label: string
  value: string
  icon: string
  color: string
}

export const projectsTags: ProjectTagConfig[] = [
  {
    label: 'React',
    value: 'react',
    icon: icons.react,
    color: '#61DAFB'
  },
  {
    label: 'Vue',
    value: 'vue',
    icon: icons.vue,
    color: '#42B883'
  },
  {
    label: 'Next.js',
    value: 'next.js',
    icon: icons.next,
    color: '#bbb'
  }
]
