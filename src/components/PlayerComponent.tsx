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
}: {
  player: Player
  turn: number
  numOfPlayers: number
  board: Card[]
  situation: Situation
  onClickCard: (card: Card) => void
}) {
  if (turn % numOfPlayers === player.order) {
    return (
      <HandComponent
        situation={situation}
        board={board}
        hand={player.hand}
        onClickCard={onClickCard}
      />
    )
  }

  return <p>{player.toString()}</p>
})
