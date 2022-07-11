import { IOptionsModal } from '../../../store/Modals'
import s from './styles.module.scss'
import {IPlanet} from '../../../utils/apiServices/types'

interface IProps {
  options: IOptionsModal
}

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL
const keysOnList = [
  'climate',
  'diameter',
  'gravity',
  'population',
]

const Planet = ({options}: IProps) => {
  const { item } = options

  const getImage = (): string => {
    const id = options.item?.url.replace(/[^0-9]/g,"")
    if (id) {
      return `${IMAGE_URL}/planets/${id}.jpg`
    }
    return ''
  }

  return (
    <div>
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
    </div>
  )
}

export default Planet
