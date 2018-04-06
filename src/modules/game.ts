import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { Deck } from '../models/card/deck'
import { makePlayers, Player } from '../models/player'

export interface GameConfig {
  numOfPlayers: number
}

export interface State {
  deck: Deck
  players: Player[]
}

//
// Actions
//

const actionCreator = actionCreatorFactory()
export const initGame = actionCreator<GameConfig>('INIT_GAME')

const initGameHandler = (state: State, config: GameConfig) /* inference */ => {
  const num = config.numOfPlayers

  const deck = state.deck.shuffle()
  const hands = deck.deal(num)
  const players = makePlayers(num, hands)

  return { ...state, deck, players }
}

//
// Reducer
//

export default reducerWithInitialState<State>({
  deck: Deck.init(),
  players: [],
}).case(initGame, initGameHandler)
