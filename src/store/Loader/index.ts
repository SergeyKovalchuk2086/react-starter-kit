import { action, makeAutoObservable, observable } from 'mobx'

class LoaderStore {
  isLoading = true

  constructor() {
    makeAutoObservable(this, {
      isLoading: observable,
      setIsLoading: action
    })
  }

  setIsLoading(payload: boolean) {
    this.isLoading = payload
  }
}

export default LoaderStore
