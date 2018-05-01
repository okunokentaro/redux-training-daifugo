import { Deck } from './card/deck'
import { makePlayers, Player } from './player'

export const numOfPlayerMin = 2
export const numOfPlayerMax = 4

export class Game {
  private players: Player[]

  constructor(numOfPlayer: number) {
    const dealResult = Deck.init()
      .shuffle()
      .deal(numOfPlayer)

    this.players = makePlayers(numOfPlayer, dealResult.hands)
  }
}
