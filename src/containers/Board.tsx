import * as React from 'react'
import { pure } from 'recompose'
import { connect } from 'react-redux'

import { State } from '../reducers'
import { Player } from '../models/player'

interface StateToProps {
  players: Player[]
}

interface DispatchToProps {}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) => {
  if (typeof state.environment.currentGame === 'undefined') {
    throw new Error('')
  }

  return {
    players: state.environment.currentGame.players,
  } as StateToProps
}

const mapDispatchToProps = () => ({} as DispatchToProps)

const Board = pure(function Board({ players }: Props) {
  return (
    <>
      {players.map((player, i) => (
        <div key={i}>
          {
            <ul>
              {player.hand
                .toArray()
                .map(card => <li key={card.id}>{card.toString()}</li>)}
            </ul>
          }
        </div>
      ))}
    </>
  )
})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Board)
