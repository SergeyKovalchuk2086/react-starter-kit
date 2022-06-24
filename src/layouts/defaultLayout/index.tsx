import Header from '../../components/header'
import Footer from '../../components/footer'
import Loader from '../../components/loader'
import BaseModalContainer from '../../components/ui/BaseModalContainer'
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
      <Footer />
      <Loader/>
      <BaseModalContainer />
    </div>
  )
}

export default DefaultLayout
