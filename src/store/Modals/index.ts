import { action, makeAutoObservable, observable } from 'mobx'
import { ModalKeY } from './modals'

export interface IOptionsModal {
  key: ModalKeY
  title: string,
  text: string,
  handler?<T>(arg?: T): void
}

class ModalsStore {
  isShow = false
  options = {} as IOptionsModal

  constructor() {
    makeAutoObservable(this, {
      isShow: observable,
      options: observable,
      showModal: action,
      hideModal: action
    })
  }

  showModal(payload: IOptionsModal) {
    this.isShow = true
    this.setOptionsModal(payload)
  }

  hideModal() {
    this.isShow = false
  }

  private setOptionsModal(options: IOptionsModal) {
    this.options = options
  }
}

export default ModalsStore