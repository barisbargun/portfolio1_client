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

const projectsConfig: ProjectsConfig = {
  description:
    'Behold a showcase of my prowess in web development, a testament to my rich experience manifested in real-world examples. Each project is meticulously crafted, reflecting a harmonious blend of skill and creativity. Explore the intricacies of my work through the accompanying Code Repository links and immersive live demos, where every line of code breathes life into a digital masterpiece.',
  projects: [
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
      title: 'Prompt Share App',
      description:
        'Powered by Next.js, Promptopia enables users to effortlessly share, edit, and delete their prompts. Authenticated via Google API for a secure experience.',
      tags: ['react', 'next', 'mongodb'],
      image: {
        src: screenshots.promptopia,
        alt: 'promptopia app'
      },
      url: 'https://barisolgun-promptopia.vercel.app/'
    },
    {
      title: 'Car Rent App',
      description:
        'Client-side powered by ReactJS, backend by ExpressJS. The car rental app includes a content management system for seamless customization.',
      tags: ['react', 'express', 'mongodb'],
      image: {
        src: screenshots.car_rent,
        alt: 'car rent app'
      },
      url: 'https://barisolgun-car-rent.netlify.app/'
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
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: screenshots.bussli,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    }
  ]
}

export { projectsConfig, type ProjectsConfig }
