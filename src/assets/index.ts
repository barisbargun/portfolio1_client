/** Screenshots */

const modules = import.meta.glob('./screenshots/**/*.avif', {
  eager: true,
  import: 'default'
}) as Record<string, string>

export const screenshots: Record<string, string[]> = {}

for (const path of Object.keys(modules)) {
  // Dosya yolundan anahtar ismi çıkar (örneğin: 'car-rent' veya 'bussli')
  const pathParts = path.split('/')
  const fileName = pathParts[pathParts.length - 1]
  const folderName = pathParts[pathParts.length - 2]

  // Eğer dosya bir alt klasördeyse (bussli gibi), klasör ismini anahtar yap
  const key = folderName === 'screenshots' ? fileName.split('.')[0] : folderName

  if (!screenshots[key]) {
    screenshots[key] = []
  }
  screenshots[key].push(modules[path])
}

/** Service Icons */
import backend from './icons/service/backend.avif'
import creator from './icons/service/creator.avif'
import mobile from './icons/service/mobile.avif'
import web from './icons/service/web.avif'

/** Techs Icons */
import express from './icons/techs/express.svg'
import figma from './icons/techs/figma.svg'
import next from './icons/techs/next.svg'
import react from './icons/techs/react.svg'
import tailwindcss from './icons/techs/tailwindcss.svg'
import vue from './icons/techs/vue.svg'

/** Other Icons */
import star from './icons/star.svg'

export const icons = {
  backend,
  creator,
  mobile,
  web,

  express,
  figma,
  next,
  react,
  tailwindcss,
  vue,

  star
}
