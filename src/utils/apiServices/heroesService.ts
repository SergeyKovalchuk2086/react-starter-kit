import DataService from '.'
import { IHeroesPage, IRequestPost } from './types'

class HeroesService extends DataService {
  constructor () {
    super(`${process.env.REACT_APP_API_BASE_URL}`)
  }

  public async getHeroesPage (page: number): Promise<IHeroesPage> {
    const r = await this.get<IRequestPost<IHeroesPage>>(`/people/?page=${page}`)
    return r.data
  }
}

export default new HeroesService()
