import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Deck } from '../models/card/deck'
import { Hand } from '../models/card/hand'

export interface GameConfig {
  numOfPlayers: number
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
    const numOfPlayers = gameConfig.numOfPlayers
    const deck = state.deck.shuffle()
    const hands = deck.deal(numOfPlayers)

    return { ...state, deck, hands }
  },
)
