import * as React from 'react'
import { pure } from 'recompose'
import { Player } from '../models/player'

interface Props {
  player: Player
}

export default pure(function PlayerComponent({ player }: Props) {
  return <p>{player.toString()}</p>
})
