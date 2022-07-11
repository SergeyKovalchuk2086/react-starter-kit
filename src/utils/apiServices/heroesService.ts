import DataService from '.'
import { convertToSearchParams } from '../functions'
import { IHeroesPage, IPlanet, IRequestPost } from './types'

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

  public async getPlanetByHero (id: string): Promise<IPlanet> {
    const r = await this.get<IRequestPost<IPlanet>>(`/planets/${id}`)
    return r.data
  }
}

export default new HeroesService()
