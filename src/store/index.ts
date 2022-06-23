import AuthStore from './Auth'
import HeroesStore from './Heroes'
import LoaderStore from "./Loader";

const stores = {
  authStore: new AuthStore(),
  heroesStore: new HeroesStore(),
  loaderStore: new LoaderStore()
}

export default stores
