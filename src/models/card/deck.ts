import { Card, suits } from './card'
import { Hand } from './hand'

interface DealResult {
  deck: Deck
  hands: Hand[]
}

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

export class Deck {
  static blank(): Deck {
    return new Deck([])
  }

  static init() {
    const n = 13

    const list = suits.map(v => [...Array(n)].map((_, i) => new Card(v, i + 1)))
    return new Deck(([] as Card[]).concat(...list))
  }

  constructor(private list: Card[]) {}

  toString(): string {
    return this.list.map(v => v.toString()).join(' ')
  }

  shuffle(): Deck {
    const arr = cloneCards(this.list)
    mutateShuffle(arr)
    return new Deck(arr)
  }

  deal(player: number): DealResult {
    const initial = [...Array(player)].map(_ => []) as Card[][]

    const cards = this.list.reduce((acc, v, i) => {
      acc[i % player].push(v)
      return acc
    }, initial)

    return {
      deck: Deck.blank(),
      hands: cards.map(v => new Hand(v)),
    }
  }
}
