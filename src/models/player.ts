import { Hand } from './card/hand'

export const makePlayers = (numOfPlayers: number, hands: Hand[]) => {
  const players = [...Array(numOfPlayers)].map((_, i) => new Player(i))
  return hands.map((hand, i) => players[i].pickHand(hand))
}

export class Player {
  private hand = Hand.blank()

  constructor(private id: number) {}

  toString(): string {
    return `${this.id}: ${this.hand.toString()}`
  }

  clone(): Player {
    return new Player(this.id)
  }

  pickHand(hand: Hand): Player {
    const player = this.clone()
    player.hand = hand
    return player
  }
}
