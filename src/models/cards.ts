import { Card, Suit } from './card'

export class Cards {
  static init() {
    const suits = ['S', 'D', 'C', 'H'] as Suit[]
    const n = 13

    const list = suits.map(v => [...Array(n)].map((_, i) => new Card(v, i + 1)))
    return new Cards(([] as Card[]).concat(...list))
  }

  constructor(private list: Card[]) {}

  toString(): string {
    return this.list.map(v => v.toString()).join(' ')
  }
}
