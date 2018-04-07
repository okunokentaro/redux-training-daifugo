import { Card } from './card/card'

export class Situation {
  static init(): Situation {
    const initOrder = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2]
    return new Situation(initOrder)
  }

  private constructor(private order: number[]) {}

  cardIsAvailable(card: Card, board: Card[]): boolean {
    if (board.length === 0) {
      return true
    }

    const latestCard = board[board.length - 1]
    const idx = this.order.findIndex(v => v === latestCard.num)
    const availableNumbers = this.order.slice(idx + 1)

    return availableNumbers.includes(card.num)
  }
}
