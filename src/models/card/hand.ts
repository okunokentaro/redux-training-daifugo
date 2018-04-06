import { Card } from './card'

export class Hand {
  static blank(): Hand {
    return new Hand([])
  }

  constructor(private list: Card[]) {}

  toString(): string {
    return this.list.map(v => v.toString()).join(' ')
  }
}
