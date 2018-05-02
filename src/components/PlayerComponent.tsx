import * as React from 'react'
import { pure } from 'recompose'

import { Player } from '../models/player'
import CardComponent from './CardComponent'

export default pure(function PlayerComponent({ player }: { player: Player }) {
  return (
    <div>
      {player.hand
        .toArray()
        .map(card => <CardComponent card={card} key={card.id} />)}
    </div>
  )
})
