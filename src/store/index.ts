import AuthStore from './Auth'
import HeroesStore from './Heroes'

const stores = {  
  authStore: new AuthStore(),
  heroesStore: new HeroesStore()
}

export default stores
