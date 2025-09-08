import assets from '@/assets'

const screenshots = assets.screenshots

type ProjectsConfig = {
  description: string
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
  description:
    'My projects are mostly made with React, Next.js, Express.js, and Tailwind CSS. I enjoy building web applications that are both functional and visually appealing.',
  projects: [
    {
      title: 'Car Rent App',
      description:
        'Client-side powered by ReactJS, backend by ExpressJS in Turborepo. The car rental app includes a content management system for seamless customization.',
      tags: ['monorepo', 'react', 'express'],
      image: {
        src: screenshots.car_rent,
        alt: 'car rent app'
      },
      url: 'https://barisolgun-car-rent-client.netlify.app/'
    },
    {
      title: 'Social Media App',
      description:
        'A well-founded platform, this social media app empowers users to share posts, express appreciation through likes, and craft their own digital realms.',
      tags: ['react', 'appwrite', 'tailwindcss'],
      image: {
        src: screenshots.snapgram,
        alt: 'snapgram app'
      },
      url: 'https://barisolgun-snapgram.netlify.app/'
    },
    {
      title: 'Personal Portfolio',
      description:
        'Utilizing the robust combination of Next.js and Tailwind CSS, this personal portfolio showcases an array of meticulously crafted services and projects.',
      tags: ['react', 'next', 'tailwindcss'],
      image: {
        src: screenshots.portfolio,
        alt: 'portfolio app'
      },
      url: 'https://barisolgun-portfolio2.vercel.app/'
    },
    {
      title: 'Landing Page',
      description:
        'A business website that stands out with our customizable options. Built with React and Tailwindcss, our platform ensures seamless navigation and functionality across home, pricing, about, terms and contact pages.',
      tags: ['next', 'tailwindcss', 'motion/react'],
      image: {
        src: screenshots.bussli,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    }
  ]
}
