import Header from '../../components/header'
import Loader from '../../components/loader'
import s from './styles.module.scss'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const DefaultLayout = (props: IProps) => {
  return (
    <div className={s.primary}>
      <Header />
      <div className={s.primary__content}>
        { props.children }
      </div>
      <div className={s.primary__footer}>
        FOOTER
      </div>
      <Loader/>
    </div>
  )
}

export default DefaultLayout