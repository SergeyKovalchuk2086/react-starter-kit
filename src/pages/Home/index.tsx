import { observer } from 'mobx-react-lite'
import DefaultLayout from '../../layouts/defaultLayout'
import stores from '../../store'
import { ModalKeY } from '../../store/Modals/modals'

const Home = () => {
  const modal = stores.modalsStore

  const handelClick = () => {
    modal.showModal({
      key: ModalKeY.Confirmation,
      text: 'dzasfaf',
      title: 'sdgfsgfs'
    })
  }

  return (
    <DefaultLayout>
      <div>
        HOME
      </div>
      <button onClick={handelClick}>SHOW MODAL</button>
    </DefaultLayout>
  );
}

export default observer(Home)
