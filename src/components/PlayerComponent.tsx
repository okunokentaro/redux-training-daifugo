import * as React from 'react'
import { pure } from 'recompose'
import { Player } from '../models/player'

interface Props {
  player: Player
  turn: number
  onClickCard: () => void
}

export default pure(function PlayerComponent({
  player,
  turn,
  onClickCard,
}: Props) {
  if (turn === player.id) {
    return (
      <div>
        {player.hand.toArray().map((card, i) => (
          <button key={i} onClick={onClickCard}>
            {card.toString()}
          </button>
        ))}
      </div>
    )
  }
  return <p>{player.toString()}</p>
})
