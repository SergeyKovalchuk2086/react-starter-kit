import { useEffect, useState } from 'react'
import { IHero } from '../../utils/apiServices/types'

import s from './styles.module.scss'

interface IProps { card: IHero }

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL

const HeroCard = (props: IProps) => {
  const { card } = props
  const [currentId, setCurrentId] = useState<string>("1")

  useEffect(() => {
    const id = card.url.replace(/[^0-9]/g,"")
    if (id) {
      setCurrentId(id)
    } 
  }, [card])
  
  return (
    <div className={s.heroCard}>
      <div className={s.heroCard__front}>
        <img className={s.heroCard__image} src={`${IMAGE_URL}/${currentId}.jpg`} alt="ava" />
        <p className={s.heroCard__name}>{card.name}</p>
      </div>
      <div className={s.heroCard__back}>
        ОПИСАНИЕ
      </div>
    </div>
  )
}

export default HeroCard
