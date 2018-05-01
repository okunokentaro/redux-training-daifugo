import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Game } from '../models/game'

export interface EnvironmentState {
  gameIsRunning: boolean
  currentGame: Game | undefined
}

//
// Actions
//

const actionCreator = actionCreatorFactory()

interface StartGamePayload {
  numOfPlayer: number
}

export const startGame = actionCreator<StartGamePayload>('START_GAME')
const startGameHandler = (
  state: EnvironmentState,
  payload: StartGamePayload,
): EnvironmentState => {
  return {
    ...state,
    gameIsRunning: true,
    currentGame: new Game(payload.numOfPlayer),
  }
}

//
// Reducer
//

export default reducerWithInitialState<EnvironmentState>({
  gameIsRunning: false,
  currentGame: undefined,
}).case(startGame, startGameHandler)
