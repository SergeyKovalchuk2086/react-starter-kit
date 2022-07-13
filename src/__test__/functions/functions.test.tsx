import { getIdFromUrl, getImageById } from '../../utils/functions/index'
import { Unit } from "../../utils/functions"

describe('Global function:', () => {

  test('getIdFromUrl should return value id', () => {
    const url = 'https://www.exemple.com/api/unit/20'
    expect(getIdFromUrl(url)).toBeTruthy()
  })

  test('getImageById should return link picture by id', () => {
    const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL as string
      expect(getImageById(Unit.planets, '10')).toMatch(IMAGE_URL)
      expect(getImageById(Unit.planets, '')).toBe('')
  })
})