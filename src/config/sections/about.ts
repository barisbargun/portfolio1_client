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
  description: 'about.description',
  roles: [
    {
      image: icons.web,
      text: 'about.roles.web'
    },
    {
      image: icons.backend,
      text: 'about.roles.backend'
    },
    {
      image: icons.mobile,
      text: 'about.roles.mobile'
    },
    {
      image: icons.creator,
      text: 'about.roles.abap'
    }
  ],
  quote: 'about.quote'
}

export { aboutConfig, type AboutConfig }
