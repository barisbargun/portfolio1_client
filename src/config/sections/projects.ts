import assets from '@/assets'

const screenshots = assets.screenshots

type ProjectsConfig = {
  projects: {
    title: string
    description: string
    tags: string[]
    image: {
      src: string
      alt: string
    }
    url: string
  }[]
}

export const projectsConfig: ProjectsConfig = {
  projects: [
    {
      title: 'projects.projects.carRent.title',
      description: 'projects.projects.carRent.description',
      tags: ['monorepo', 'react', 'express'],
      image: {
        src: screenshots.car_rent,
        alt: 'car rent app'
      },
      url: 'https://barisolgun-car-rent-client.netlify.app/'
    },
    {
      title: 'projects.projects.socialMedia.title',
      description: 'projects.projects.socialMedia.description',
      tags: ['react', 'appwrite', 'tailwindcss'],
      image: {
        src: screenshots.snapgram,
        alt: 'snapgram app'
      },
      url: 'https://barisolgun-snapgram.netlify.app/'
    },
    {
      title: 'projects.projects.portfolio.title',
      description: 'projects.projects.portfolio.description',
      tags: ['react', 'next', 'tailwindcss'],
      image: {
        src: screenshots.portfolio,
        alt: 'portfolio app'
      },
      url: 'https://barisolgun-portfolio2.vercel.app/'
    },
    {
      title: 'projects.projects.landingPage.title',
      description: 'projects.projects.landingPage.description',
      tags: ['next', 'tailwindcss', 'motion/react'],
      image: {
        src: screenshots.bussli,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    }
  ]
}
