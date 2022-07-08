import React from 'react'
import s from './styles.module.scss'

const BaseBtn = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const {
    children,
    className,
    type = 'button',
    onClick,
    ...attr
  } = props

  return (
    <button
      type={type}
      className={`${className} ${s.baseBtn}`}
      onClick={onClick}
      {...attr}
    >
      {children}
    </button>
  )
}

export default BaseBtn
