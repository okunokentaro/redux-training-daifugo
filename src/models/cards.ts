import { Card, Suit } from './card'

/**
 * the Fisher–Yates shuffle algorithm
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
const mutateShuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const cloneCards = (list: Card[]): Card[] => {
  return list.map(v => v.clone())
}

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

  shuffle(): Cards {
    const arr = cloneCards(this.list)
    mutateShuffle(arr)
    return new Cards(arr)
  }
}
