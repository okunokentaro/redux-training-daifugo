import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Cards } from '../models/cards'

//
// Actions
//

const actionCreator = actionCreatorFactory()
export const actions = {
  initGame: actionCreator('INIT_GAME')
}

const initGame = () => {
  const cards = Cards.init()
  return {
    cards
  }
}

//
// Reducer
//

export interface State {
  cards: Cards
}

const initialState: State = { cards: Cards.init() }

export default reducerWithInitialState<State>(initialState).case(
  actions.initGame,
  initGame
)
