import DataService from '.'
import { IRequestPost } from './types'

class HeroesService extends DataService {
  constructor () {
    super(`${process.env.BASE_URL}/api/v1`)
  }

  public async getHeroesPage (): Promise<any> {
    const r = (await this.get<IRequestPost<any>>('')).data.result
    return r
  }
}

export default new HeroesService()
