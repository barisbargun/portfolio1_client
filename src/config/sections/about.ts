import assets from '@/assets'

const icons = assets.serviceIcons

type AboutConfig = {
  roles: {
    image: string
    text: string
  }[]
}

const aboutConfig: AboutConfig = {
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
  ]
}

export { aboutConfig, type AboutConfig }
