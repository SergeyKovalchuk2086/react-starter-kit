import { observer } from 'mobx-react-lite'
import DefaultLayout from '../../layouts/defaultLayout'
import stores from '../../store'
import { ModalKeY } from '../../store/Modals/modals'

const Home = () => {
  const modal = stores.modalsStore

  const handelClick = () => {
    modal.showModal({
      key: ModalKeY.Confirmation,
      text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem' ,
      title: 'TEST MODAL',
      handler: () => {
        alert('You clicked OK')
        modal.hideModal()
      }
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
