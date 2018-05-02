import * as React from 'react'
import { pure } from 'recompose'

import { Card } from '../models/card/card'

export default pure(function CardComponent({ card }: { card: Card }) {
  return <p>{card.toString()}</p>
})
