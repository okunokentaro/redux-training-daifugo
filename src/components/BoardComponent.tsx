import * as React from 'react'
import { pure } from 'recompose'

import { Card } from '../models/card/card'

interface Props {
  board: Card[]
}

export default pure(function BoardComponent({ board }: Props) {
  return <p>{JSON.stringify(board)}</p>
})
