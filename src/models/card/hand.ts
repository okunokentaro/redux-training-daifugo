import { Card } from './card'

export class Hand {
  static blank(): Hand {
    return new Hand([])
  }

  constructor(private list: Card[]) {}

  toString(): string {
    return this.list.map(v => v.toString()).join(' ')
  }

  toArray(): Card[] {
    return this.list
  }

  filterByCard(card: Card): Hand {
    return new Hand(this.list.filter(v => !v.eq(card)))
  }
}
