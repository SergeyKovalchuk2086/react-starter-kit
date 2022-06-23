import Header from '../../components/header'
import s from './styles.module.scss'
import Loader from "../../components/loader";

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
