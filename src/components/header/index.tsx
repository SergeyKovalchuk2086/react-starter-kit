import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { appRoutes, routeElements } from '../../configs'
import s from './styles.module.scss'

const Header = () => {
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
          <button>
            <Link to={appRoutes.auth}>LOG OUT</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
