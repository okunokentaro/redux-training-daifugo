import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Cards } from '../models/cards'

export interface GameConfig {
  player: number
}

export interface State {
  cards: Cards
}

//
// Actions
//

const actionCreator = actionCreatorFactory()
export const initGame = actionCreator<GameConfig>('INIT_GAME')

//
// Reducer
//

const initialState: State = { cards: Cards.init() }

export default reducerWithInitialState<State>(initialState).case(
  initGame,
  state => {
    const cards = state.cards.shuffle()
    return { ...state, cards }
  }
)
