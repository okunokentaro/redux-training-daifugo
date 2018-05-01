import { v4 } from 'uuid'

export type Suit = 'S' | 'C' | 'D' | 'H'

export const suits = ['S', 'D', 'C', 'H'] as Suit[]

export class Card {
  private id_: string

  constructor(private suit_: Suit, private num_: number) {
    this.id_ = v4()
  }

  get id(): string {
    return this.id_
  }

  get suit(): Suit {
    return this.suit_
  }

  get num(): number {
    return this.num_
  }

  toString(): string {
    return `${this.suit}${this.num}`
  }

  clone(): Card {
    const instance = new Card(this.suit, this.num)
    instance.id_ = this.id_
    return instance
  }

  eq(other: Card): boolean {
    return this.id_ === other.id_
  }
}
