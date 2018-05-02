import * as React from 'react'
import { pure } from 'recompose'
import { connect } from 'react-redux'

import Entrance from './Entrance'
import Board from './Board'
import { State } from '../reducers'

interface StateToProps {
  gameIsRunning: boolean
}

interface DispatchToProps {}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) =>
  ({
    gameIsRunning: state.environment.gameIsRunning,
  } as StateToProps)

const mapDispatchToProps = () => ({} as DispatchToProps)

const Screen = pure(function Screen({ gameIsRunning }: Props) {
  if (!gameIsRunning) {
    return <Entrance />
  }
  return <Board />
})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Screen)
