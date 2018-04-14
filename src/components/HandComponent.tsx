import * as React from 'react'
import { pure } from 'recompose'

import { Hand } from '../models/card/hand'
import { Situation } from '../models/situation'
import { Card } from '../models/card/card'

export default pure(function HandComponent({
  situation,
  board,
  hand,
  onClickCard,
  onClickPass,
}: {
  situation: Situation
  board: Card[]
  hand: Hand
  onClickCard: (card: Card) => void
  onClickPass: () => void
}) {
  return (
    <div>
      {hand.toArray().map((card, i) => {
        const disabled = !situation.cardIsAvailable(card, board)
        return (
          <button key={i} disabled={disabled} onClick={() => onClickCard(card)}>
            {card.toString()}
          </button>
        )
      })}
      <button onClick={() => onClickPass()}>Pass</button>
    </div>
  )
})
