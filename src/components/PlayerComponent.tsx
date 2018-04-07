import * as React from 'react'
import { pure } from 'recompose'

import { Player } from '../models/player'
import { Card } from '../models/card/card'
import { Situation } from '../models/situation'

interface Props {
  player: Player
  turn: number
  numOfPlayers: number
  board: Card[]
  situation: Situation
  onClickCard: (card: Card) => void
}

export default pure(function PlayerComponent({
  player,
  turn,
  numOfPlayers,
  board,
  situation,
  onClickCard,
}: Props) {
  if (turn % numOfPlayers === player.order) {
    return (
      <div>
        {player.hand.toArray().map((card, i) => {
          const disabled = !situation.cardIsAvailable(card, board)
          return (
            <button
              key={i}
              disabled={disabled}
              onClick={() => onClickCard(card)}
            >
              {card.toString()}
            </button>
          )
        })}
      </div>
    )
  }

  return <p>{player.toString()}</p>
})
