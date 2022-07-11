import Confirmation from '../../components/modals/Сonfirmation'
import Planet from '../../components/modals/Planet'

export enum ModalKeY {
  Confirmation,
  Planet
}

export const modals = {
  [ModalKeY.Confirmation]: Confirmation,
  [ModalKeY.Planet]: Planet,
}
