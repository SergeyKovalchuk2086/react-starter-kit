import { IHero } from '../../utils/apiServices/types'

import s from './styles.module.scss'

interface IProps {
  card: IHero
  img: string
}

const HeroCard = (props: IProps) => {
  const { card, img } = props

  return (
    <div className={s.heroCard}>
      <div className={s.heroCard__front}>
        <img className={s.heroCard__image} src={img} alt="ava" />
        <p className={s.heroCard__name}>{card.name}</p>
      </div>
      <div className={s.heroCard__back}>
        ОПИСАНИЕ
      </div>
    </div>
  )
}

export default HeroCard
