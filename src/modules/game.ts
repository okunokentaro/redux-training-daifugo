import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Deck } from '../models/deck'
import { Hand } from '../models/hand'

export interface GameConfig {
  player: number
}

export interface State {
  deck: Deck
  hands: Hand[]
}

//
// Actions
//

const actionCreator = actionCreatorFactory()
export const initGame = actionCreator<GameConfig>('INIT_GAME')

//
// Reducer
//

const initialState: State = { deck: Deck.init(), hands: [] }

export default reducerWithInitialState<State>(initialState).case(
  initGame,
  (state, gameConfig) => {
    const player = gameConfig.player
    const deck = state.deck.shuffle()
    const hands = deck.deal(player)

    return { ...state, deck, hands }
  },
)
