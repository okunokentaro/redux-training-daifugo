import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { Deck } from '../models/card/deck'
import { makePlayers, Player } from '../models/player'
import { Card } from '../models/card/card'

export interface GameConfig {
  numOfPlayers: number
}

interface PullOutCardPayload {
  player: Player
  card: Card
}

export interface State {
  deck: Deck
  players: Player[]
  turn: number
  board: Card[]
  numOfPlayers: number
}

//
// Actions
//

const actionCreator = actionCreatorFactory()

export const initGame = actionCreator<GameConfig>('INIT_GAME')
const initGameHandler = (state: State, config: GameConfig): State => {
  const numOfPlayers = config.numOfPlayers

  const deck = state.deck.shuffle()
  const dealResult = deck.deal(numOfPlayers)
  const players = makePlayers(numOfPlayers, dealResult.hands)

  return { ...state, deck: dealResult.deck, players, numOfPlayers }
}

export const pullOutCard = actionCreator<PullOutCardPayload>('PULL_OUT_CARD')
const pullOutCardHandler = (
  state: State,
  { player, card }: PullOutCardPayload,
): State => {
  return {
    ...state,
    board: state.board.concat([card]),
    players: state.players.reduce(
      (acc, v) => {
        if (v.eq(player)) {
          const reduced = v.releaseCard(card)
          acc.push(reduced)
          return acc
        }

        acc.push(v)
        return acc
      },
      [] as Player[],
    ),
    turn: state.turn + 1,
  }
}

//
// Reducer
//

export default reducerWithInitialState<State>({
  deck: Deck.init(),
  players: [],
  turn: 0,
  board: [],
  numOfPlayers: 0,
})
  .case(initGame, initGameHandler)
  .case(pullOutCard, pullOutCardHandler)
