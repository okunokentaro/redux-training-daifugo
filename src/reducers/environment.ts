import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface EnvironmentState {
  gameIsRunning: boolean
}

//
// Actions
//

const actionCreator = actionCreatorFactory()

export const startGame = actionCreator<{}>('START_GAME')
const startGameHandler = (state: EnvironmentState): EnvironmentState => {
  return { ...state, gameIsRunning: true }
}

//
// Reducer
//

export default reducerWithInitialState<EnvironmentState>({
  gameIsRunning: false,
}).case(startGame, startGameHandler)
