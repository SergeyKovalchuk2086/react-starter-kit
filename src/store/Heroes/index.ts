import { makeAutoObservable } from 'mobx'
// import { action, makeAutoObservable, observable } from 'mobx'

class HeroesStore {

  constructor() {
    makeAutoObservable(this, {
      // isAuth: observable,
      // setIsAuth: action
    })
  }

}

export default HeroesStore
