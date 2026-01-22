type MenuLinks = 'main' | 'about' | 'experience' | 'projects' | 'contact'

type MenuLinkConfig = {
  name: string
  link: MenuLinks
  showNav?: boolean
}

const menuLinkConfig = {
  main: { name: 'menu.homepage', link: 'main' },
  about: { name: 'menu.about', link: 'about', showNav: true },
  experience: { name: 'menu.experience', link: 'experience', showNav: true },
  projects: { name: 'menu.projects', link: 'projects' },
  contact: { name: 'menu.contact', link: 'contact', showNav: true }
} satisfies Record<string, MenuLinkConfig>

export { menuLinkConfig, type MenuLinkConfig }
