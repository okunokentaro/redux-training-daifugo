import { AnyAction, Dispatch } from 'redux'

import { startGame } from '../reducers/environment'
import { State } from '../reducers'
import { updateNumOfPlayer } from '../reducers/entrance'

export const changeNumOfPlayer = (numOfPlayerInput: string) => {
  return (dispatch: Dispatch<AnyAction, State>) => {
    dispatch(updateNumOfPlayer({ numOfPlayerInput }))
  }
}

export const playGame = () => {
  return (dispatch: Dispatch<AnyAction, State>, getState: () => State) => {
    const numOfPlayer = getState().entrance.numOfPlayerInput
    dispatch(startGame({ numOfPlayer }))
  }
}
