import assets from '@/assets'

const icons = assets.serviceIcons

type AboutConfig = {
  description: string
  roles: {
    image: string
    text: string
  }[]
  quote: string
}

const aboutConfig: AboutConfig = {
  description:
    "Hello, I graduated in Computer Programming from Marmara University. I did my internship at Lits Consulting in Istanbul. I've loved programming since childhood. I work on projects and share them on Github.",
  roles: [
    {
      image: icons.web,
      text: 'Full Stack Web Developer'
    },
    {
      image: icons.mobile,
      text: 'React.js Developer'
    },
    {
      image: icons.backend,
      text: 'Express.js Developer'
    },
    {
      image: icons.creator,
      text: 'SAP/ABAP Developer'
    }
  ],
  quote: 'I care about performance, security and writing clean, readable code.'
}

export { aboutConfig, type AboutConfig }
