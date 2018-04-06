import { v4 } from 'uuid'

export type Suit = 'S' | 'C' | 'D' | 'H'

export const suits = ['S', 'D', 'C', 'H'] as Suit[]

export class Card {
  private id: string

  constructor(private suit: Suit, private num: number) {
    this.id = v4()
  }

  toString(): string {
    return `${this.suit}${this.num}`
  }

  clone(): Card {
    const instance = new Card(this.suit, this.num)
    instance.id = this.id
    return instance
  }

  eq(other: Card): boolean {
    return this.id === other.id
  }
}
