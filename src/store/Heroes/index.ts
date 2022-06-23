import { action, makeAutoObservable, observable } from 'mobx'
import { IHeroesPage } from '../../utils/apiServices/types'

class HeroesStore {
  heroesPage = {} as IHeroesPage

  constructor() {
    makeAutoObservable(this, {
      heroesPage: observable,
      changeHeroesPage: action,
    })
  }

  changeHeroesPage (page: IHeroesPage) {
    this.heroesPage = page
  }
}

export default HeroesStore
