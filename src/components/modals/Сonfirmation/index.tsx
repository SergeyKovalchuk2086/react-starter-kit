import { IOptionsModal } from '../../../store/Modals'
import s from './styles.module.scss'

interface IProps {
  options: IOptionsModal
}

const Confirmation = (props: IProps) => {
  return (
    <div className={s.content}>
      { props.options.text }
    </div>
  )
}

export default Confirmation
