import { useEffect, useState } from 'react'
import { IHero } from '../../utils/apiServices/types'

import s from './styles.module.scss'

interface IProps { card: IHero }

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL

const HeroCard = (props: IProps) => {
  const { card } = props
  const [currentId, setCurrentId] = useState<string | null>(null)

  useEffect(() => {
    const temp  = card.url.split('/')
    const id = temp[temp.length - 2]
    if (id) {
      setCurrentId(id)
    }
  }, [card])
  
  return (
    <div className={s.heroCard}>
      <div className={s.heroCard__content}>
        <img className={s.heroCard__image} src={`${IMAGE_URL}/${currentId}.jpg`} alt="ava" />
        {card.name}
      </div>
    </div>
  )
}

export default HeroCard
