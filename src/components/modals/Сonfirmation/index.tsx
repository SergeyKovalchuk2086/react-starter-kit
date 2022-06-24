import { IOptionsModal } from '../../../store/Modals'
import s from './styles.module.scss'

interface IProps {
  options: IOptionsModal
}

const Confirmation = (props: IProps) => {

  const handelClick = () => {
    if (props.options.handler) {
      props.options.handler()
    }
  }
  
  return (
    <div className={s.content}>
      <p className={s.content__text}>
        { props.options.text }
      </p>
      <div className={s.content__control}>
        <button
          className={s.content__btn}
          onClick={handelClick}
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default Confirmation
