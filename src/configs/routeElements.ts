import { appRoutes } from '.'
import Home from '../pages/Home'
import Heroes from '../pages/Heroes'
import Web3 from '../pages/Web3'

export const routeElements = [
  {
    id: 1,
    name: 'Home',
    path: appRoutes.home,
    component: Home
  },
  {
    id: 2,
    name: 'Heroes',
    path: appRoutes.heroes,
    component: Heroes
  },
  {
    id: 3,
    name: 'Web3',
    path: appRoutes.web3,
    component: Web3
  }
]
