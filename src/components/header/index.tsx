import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeElements } from '../../configs'
import s from './styles.module.scss'
import stores from "../../store";

const Header = () => {
  const auth = stores.authStore

  const logOut = () => {
    auth.setIsAuth(false)
  }

  return (
    <div className={s.header}>
      <div className={s.header__nav}>
        <ul className={s.header__list}>
          {routeElements.map(item => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={isActive => isActive?.isActive ? `${s.active}` : ""}
                >
                  { item.name }
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className={s.header__control}>
          {/* TODO change base-btn */}
          <button onClick={logOut}>LOG OUT</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
