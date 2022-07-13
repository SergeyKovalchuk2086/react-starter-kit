import { IOptionsModal } from '../../../store/Modals'
import s from './styles.module.scss'
import {IPlanet} from '../../../utils/apiServices/types'
import { getIdFromUrl, getImageById } from '../../../utils/functions'
import { Unit } from '../../../utils/functions'

interface IProps {
  options: IOptionsModal
}

const keysOnList = [
  'climate',
  'diameter',
  'gravity',
  'population',
]

const Planet = ({options}: IProps) => {
  const { item } = options

  const getImage = (): string => {
    return getImageById(Unit.planets, getIdFromUrl(item!.url))
  }

  return (
    <>
      <div className={s.planet__picture}>
        <img src={getImage()} alt={item?.name} className={s.planet__img} />
      </div>
      <ul className={s.planet__list}>
        {
          keysOnList.map((key) => 
            <li key={key} className={s.planet__option}>
              <span className={s.planet__label}>
                {`${key}: `}
              </span>
              {item![key as keyof IPlanet]}
            </li>)
        }
      </ul>
    </>
  )
}

export default Planet
