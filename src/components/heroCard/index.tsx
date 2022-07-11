import { IHero } from '../../utils/apiServices/types'
import BaseBtn from '../ui/BaseBtn'

import s from './styles.module.scss'

interface IProps {
  card: IHero,
  img: string,
  onClick: () => void | Promise<void>
}

const HeroCard = (props: IProps) => {
  const { card, img, onClick } = props

  return (
    <div className={s.heroCard}>
      <div className={s.heroCard__front}>
        <img className={s.heroCard__image} src={img} alt="ava" />
        <p className={s.heroCard__name}>{card.name}</p>
      </div>
      <div className={s.heroCard__back}>
        <div>
          ОПИСАНИЕ
        </div>

        <BaseBtn className={s.heroCard__planet} onClick={onClick}>Homeworld</BaseBtn>
      </div>
    </div>
  )
}

export default HeroCard
