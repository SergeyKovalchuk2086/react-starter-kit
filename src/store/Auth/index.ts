import { action, makeAutoObservable, observable } from 'mobx'

class AuthStore {
  isAuth = false

  constructor() {
    makeAutoObservable(this, {
      isAuth: observable,
      setIsAuth: action
    })
  }

  setIsAuth(payload: boolean) {
    this.isAuth = payload
  }
}

export default AuthStore
