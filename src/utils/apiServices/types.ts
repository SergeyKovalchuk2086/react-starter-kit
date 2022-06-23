export interface IRequestPost<T> {
  config: any,
  data: T,
  headers: any,
  request: XMLHttpRequest,
  status: number,
  statusTetx: string
}

export interface IHero {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string
}

export interface IHeroesPage {
  count: number,
	next: string | string,
	previous: null | string,
	results: IHero[]
}
