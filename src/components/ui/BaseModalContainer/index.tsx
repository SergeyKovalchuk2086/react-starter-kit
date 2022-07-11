import { observer } from 'mobx-react-lite'
import stores from '../../../store'
import { modals } from '../../../store/Modals/modals'
import s from './styles.module.scss'

const BaseModalContainer = () => {
  const modal = stores.modalsStore
  const isShow = modal.isShow
  const options = modal.options

  const Component = modals[options.key]

  const closeModal = (e: any) => {
    if (e.currentTarget === e.target) {
      modal.hideModal()
    }
  }

  return ( isShow ?
    <div className={s.baseModal} onClick={(e: any) => closeModal(e)}>
      <div className={s.baseModal__modal}>
        <div className={s.baseModal__header}>
          <p className={s.baseModal__title}>
            {options.title || 'DEFAULT'}
          </p>
          <button
            type='button'
            className={s.baseModal__close}
            onClick={(e: any) => closeModal(e)}
          >
            Close
          </button>
        </div>
        { <Component options={options}/> }
      </div>
    </div>
    : null
  )
}

export default observer(BaseModalContainer)
