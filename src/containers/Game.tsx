import * as React from 'react'
import { pure } from 'recompose'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hello, State } from '../reducers/environment'

interface StateToProps {}

interface DispatchToProps {
  hello: () => void
}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) => ({} as StateToProps)

const mapDispatchToProps = (dispatch: Dispatch<void>) =>
  ({
    hello: () => dispatch(hello({})),
  } as DispatchToProps)

const Game = pure(function Game({ hello }: Props) {
  return <button onClick={() => hello()}>hello</button>
})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
