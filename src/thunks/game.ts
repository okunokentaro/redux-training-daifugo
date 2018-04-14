import { Dispatch } from 'redux'

import { startGame } from '../reducers/environment'
import { State } from '../reducers'

export const playGame = () => {
  return (dispatch: Dispatch<State>) => {
    dispatch(startGame({}))
  }
}
