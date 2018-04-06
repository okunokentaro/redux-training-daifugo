import { v4 } from 'uuid'
import { Hand } from './card/hand'
import { Card } from './card/card'

export const makePlayers = (numOfPlayers: number, hands: Hand[]) => {
  const players = [...Array(numOfPlayers)].map((_, i) => new Player(i))
  return hands.map((hand, i) => players[i].pickHand(hand))
}

export class Player {
  private id_: string
  private hand_ = Hand.blank()

  constructor(private order_: number) {
    this.id_ = v4()
  }

  get id(): string {
    return this.id_
  }

  get hand(): Hand {
    return this.hand_
  }

  get order(): number {
    return this.order_
  }

  toString(): string {
    return `${this.order_}: ${this.hand_.toString()}`
  }

  clone(): Player {
    const instance = new Player(this.order)

    instance.id_ = this.id
    instance.hand_ = this.hand

    return instance
  }

  eq(other: Player): boolean {
    return this.id === other.id
  }

  pickHand(hand: Hand): Player {
    const player = this.clone()
    player.hand_ = hand
    return player
  }

  releaseCard(card: Card): Player {
    const player = this.clone()
    player.hand_ = this.hand.filterByCard(card)
    return player
  }
}
