type Suit = 'S' | 'C' | 'D' | 'H'

export class Card {
  constructor(private suit: Suit, private num: number) {}

  toString(): string {
    return `${this.suit}${this.num}`
  }
}