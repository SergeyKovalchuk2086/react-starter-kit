import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { appRoutes, routeElements } from './configs'
import Auth from './pages/Auth'
import stores from './store'

const App = () => {
  const authStore = stores.authStore
  const navigate = useNavigate()

  useEffect(() => {
    if(!authStore.isAuth) {
      navigate(appRoutes.auth)
    }
  }, [authStore.isAuth, navigate])
  
  return (
    <Routes>
      <Route path='/auth' element={<Auth />}/>
      {routeElements.map(item => {
        return (
          <Route
            key={item.id}
            path={item.path}
            element={<item.component />}
          />
        )
      })}
    </Routes>
  )
}

export default observer(App)
