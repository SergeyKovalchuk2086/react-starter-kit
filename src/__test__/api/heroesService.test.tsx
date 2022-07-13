import heroesService from "../../utils/apiServices/heroesService"

jest.createMockFromModule('axios')

describe('API Services:', () => {

  test('should return object hero', async () => {
    expect.assertions(2);
    const result = (await heroesService.getHeroesPage({ page: 1, search: 'Luke' })).results
    expect(result).toBeInstanceOf(Array)
    expect(result[0].name).toEqual('Luke Skywalker')
  })

  test('should return planet by hero', async () => {
    expect.assertions(2);
    const result = (await heroesService.getPlanetByHero('1'))
    expect(result).toBeInstanceOf(Object)
    expect(result.name).toEqual('Tatooine')
  })

})
