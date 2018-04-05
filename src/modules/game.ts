import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Cards } from '../models/cards'

export interface GameConfig {
  player: number
}

export interface State {
  cards: Cards
  hands: Cards[]
}

//
// Actions
//

const actionCreator = actionCreatorFactory()
export const initGame = actionCreator<GameConfig>('INIT_GAME')

//
// Reducer
//

const initialState: State = { cards: Cards.init(), hands: [] }

export default reducerWithInitialState<State>(initialState).case(
  initGame,
  (state, gameConfig) => {
    const player = gameConfig.player
    const cards = state.cards.shuffle()
    const hands = cards.deal(player)

    return { ...state, cards, hands }
  },
)
