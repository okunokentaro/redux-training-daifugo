import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { Deck } from '../models/card/deck'
import { makePlayers, Player } from '../models/player'
import { Card } from '../models/card/card'

export interface GameConfig {
  numOfPlayers: number
}

export interface State {
  deck: Deck
  players: Player[]
  turn: number
}

//
// ActionCreators
//

const actionCreator = actionCreatorFactory()

export const initGame = actionCreator<GameConfig>('INIT_GAME')
export const pullOutCard = actionCreator<Card>('PULL_OUT_CARD')

//
// Handlers
//

const initGameHandler = (state: State, config: GameConfig): State => {
  const num = config.numOfPlayers

  const deck = state.deck.shuffle()
  const dealResult = deck.deal(num)
  const players = makePlayers(num, dealResult.hands)

  return { ...state, deck: dealResult.deck, players }
}

const pullOutCardHandler = (state: State, card: Card): State => {
  console.log(card)
  return { ...state }
}

//
// Reducer
//

export default reducerWithInitialState<State>({
  deck: Deck.init(),
  players: [],
  turn: 0,
})
  .case(initGame, initGameHandler)
  .case(pullOutCard, pullOutCardHandler)
