import stores from '../../store'
import { ModalKeY } from '../../store/Modals/modals'
import heroesService from '../../utils/apiServices/heroesService'
import { IHero } from '../../utils/apiServices/types'
import BaseBtn from '../ui/BaseBtn'

import s from './styles.module.scss'

interface IProps {
  card: IHero
  img: string,
}

const HeroCard = (props: IProps) => {
  const { card, img } = props

  const loader = stores.loaderStore
  const modal = stores.modalsStore

  const getPlanet = async () => {
    loader.setIsLoading(true)
    try {
      const planet = await heroesService.getPlanetByHero(card.homeworld)
      modal.showModal({
        key: ModalKeY.Planet,
        title: planet.name,
        item: planet
      })
    } catch (error) {
      console.log('🚀 ~ file: index.tsx ~ line 32 ~ getPlanet ~ error', error)
    } finally  {
      loader.setIsLoading(false)
    }
  }

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

        <BaseBtn className={s.heroCard__planet} onClick={getPlanet}>Planet</BaseBtn>
      </div>
    </div>
  )
}

export default HeroCard
