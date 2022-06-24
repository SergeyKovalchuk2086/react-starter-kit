import React from 'react'
import { observer } from 'mobx-react-lite'
import stores from '../../store'
import s from './styles.module.scss'

const Loader = () => {
  const isLoading = stores.loaderStore.isLoading

  return ( isLoading
      ? <div className={s.loader}>
          <div className={s.loader__body}>
              <div className={s.loader__anim}>
                  <div className={s.lds_dual_ring} />
              </div>
          </div>
      </div>
    : null
  )
}

export default observer(Loader)
