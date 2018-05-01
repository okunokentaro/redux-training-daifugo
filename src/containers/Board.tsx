import * as React from 'react'
import { pure } from 'recompose'
import { connect } from 'react-redux'

import { State } from '../reducers'
import { Game } from '../models/game'

interface StateToProps {
  currentGame: Game
}

interface DispatchToProps {}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) =>
  ({
    currentGame: state.environment.currentGame,
  } as StateToProps)

const mapDispatchToProps = () => ({} as DispatchToProps)

const Board = pure(function Board({ currentGame }: Props) {
  return (
    <>
      <p>{JSON.stringify(currentGame)}</p>
    </>
  )
})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Board)
