import Confirmation from '../../components/modals/–°onfirmation'
import Planet from '../../components/modals/Planet'

export enum ModalKeY {
  Confirmation,
  Planet
}

export const modals = {
  [ModalKeY.Confirmation]: Confirmation,
  [ModalKeY.Planet]: Planet,
}
