import AuthStore from './Auth'
import HeroesStore from './Heroes'
import LoaderStore from './Loader'
import ModalsStore from './Modals'

const stores = {
  authStore: new AuthStore(),
  heroesStore: new HeroesStore(),
  loaderStore: new LoaderStore(),
  modalsStore: new ModalsStore()
}

export default stores
