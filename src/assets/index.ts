/** Screenshots */
// import car_rent from './screenshots/car-rent.avif'
// import portfolio from './screenshots/portfolio.avif'
// import snapgram from './screenshots/snapgram.avif'
// import bussli1 from './screenshots/bussli/1.avif'
// import bussli2 from './screenshots/bussli/2.avif'
// import bussli3 from './screenshots/bussli/3.avif'

// const screenshots = {
//   car_rent: [car_rent],
//   portfolio: [portfolio],
//   snapgram: [snapgram],
//   bussli: [bussli1, bussli2, bussli3]
// }

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
import backend from './serviceIcons/backend.avif'
import creator from './serviceIcons/creator.avif'
import mobile from './serviceIcons/mobile.avif'
import web from './serviceIcons/web.avif'

const serviceIcons = {
  backend,
  creator,
  mobile,
  web
}

export default {
  screenshots,
  serviceIcons
}
