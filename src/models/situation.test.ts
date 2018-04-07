import { Situation } from './situation'
import { Card } from './card/card'

type Param = [Card, boolean]

describe('Situation', () => {
  let situation: Situation

  beforeEach(() => {
    situation = Situation.init()
  })

  describe('#cardIsAvailable()', () => {
    describe('山札が無いとき、あらゆるカードが出せる', () => {
      let board: Card[]

      beforeEach(() => {
        board = [] as Card[]
      })

      const params = [
        [new Card('S', 3), true],
        [new Card('S', 2), true],
        [new Card('C', 3), true],
        [new Card('C', 2), true],
        [new Card('D', 3), true],
        [new Card('D', 2), true],
        [new Card('H', 3), true],
        [new Card('H', 2), true],
      ] as Param[]

      params.forEach(([card, expected]) => {
        test(`${card.toString()} は ${expected} となる`, () => {
          expect(situation.cardIsAvailable(card, board)).toBe(expected)
        })
      })
    })

    describe('山札に9が出ているとき、10より強いカードを出せる', () => {
      let board: Card[]

      beforeEach(() => {
        board = [new Card('S', 9)] as Card[]
      })

      const params = [10, 13, 1, 2].map(v => {
        const expected = true
        return [
          [new Card('S', v), expected],
          [new Card('C', v), expected],
          [new Card('D', v), expected],
          [new Card('H', v), expected],
        ] as Param[]
      })
      ;([] as Param[]).concat(...params).forEach(([card, expected]) => {
        test(`${card.toString()} は ${expected} となる`, () => {
          expect(situation.cardIsAvailable(card, board)).toBe(expected)
        })
      })
    })

    describe('山札に9が出ているとき、9とそれより弱いカードは出せない', () => {
      let board: Card[]

      beforeEach(() => {
        board = [new Card('S', 9)] as Card[]
      })

      const params = [3, 9].map(v => {
        const expected = false
        return [
          [new Card('S', v), expected],
          [new Card('C', v), expected],
          [new Card('D', v), expected],
          [new Card('H', v), expected],
        ] as Param[]
      })
      ;([] as Param[]).concat(...params).forEach(([card, expected]) => {
        test(`${card.toString()} は ${expected} となる`, () => {
          expect(situation.cardIsAvailable(card, board)).toBe(expected)
        })
      })
    })

    describe('山札に2が出ているとき、どのカードも出せない', () => {
      let board: Card[]

      beforeEach(() => {
        board = [new Card('S', 2)] as Card[]
      })

      const params = [
        [new Card('S', 3), false],
        [new Card('S', 2), false],
        [new Card('C', 3), false],
        [new Card('C', 2), false],
        [new Card('D', 3), false],
        [new Card('D', 2), false],
        [new Card('H', 3), false],
        [new Card('H', 2), false],
      ] as Param[]

      params.forEach(([card, expected]) => {
        test(`${card.toString()} は ${expected} となる`, () => {
          expect(situation.cardIsAvailable(card, board)).toBe(expected)
        })
      })
    })
  })
})
