import DataService from '.'
import { convertToSearchParams } from '../functions'
import { IHeroesPage, IRequestPost } from './types'

type TGetHeroesPageProps = {
  page: number,
  search: string
}

class HeroesService extends DataService {
  constructor () {
    super(`${process.env.REACT_APP_API_BASE_URL}`)
  }

  public async getHeroesPage (props: TGetHeroesPageProps): Promise<IHeroesPage> {
    // const { page, search } = props
    const params = convertToSearchParams(props)
    const r = await this.get<IRequestPost<IHeroesPage>>(`/people/?${params}`)
    return r.data
  }
}

export default new HeroesService()
