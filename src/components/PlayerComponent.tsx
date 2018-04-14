import * as React from 'react'
import { pure } from 'recompose'

import HandComponent from './HandComponent'
import { Player } from '../models/player'
import { Card } from '../models/card/card'
import { Situation } from '../models/situation'

export default pure(function PlayerComponent({
  player,
  turn,
  numOfPlayers,
  board,
  situation,
  onClickCard,
  onClickPass,
}: {
  player: Player
  turn: number
  numOfPlayers: number
  board: Card[]
  situation: Situation
  onClickCard: (card: Card) => void
  onClickPass: () => void
}) {
  if (turn % numOfPlayers === player.order) {
    return (
      <HandComponent
        situation={situation}
        board={board}
        hand={player.hand}
        onClickCard={onClickCard}
        onClickPass={onClickPass}
      />
    )
  }

  return <p>{player.toString()}</p>
})
