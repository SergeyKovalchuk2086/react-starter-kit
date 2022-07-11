import { Unit } from "."

const IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL

export const getIdFromUrl = (url: string): string =>  url.replace(/[^0-9]/g,"")

export const getImageById = (unit: Unit, id: string): string => id ? `${IMAGE_URL}/${unit}/${id}.jpg` :  ''
