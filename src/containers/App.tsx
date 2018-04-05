import * as React from 'react'
import { lifecycle } from 'recompose'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { actions, State } from '../modules/game'

interface StateToProps {
  cards: string
}

interface DispatchToProps {
  initGame: () => void
}

type Props = StateToProps & DispatchToProps

const Cards = ({ cards }: Props) => (
  <div>
    <h1>{cards}</h1>
  </div>
)

const mapStateToProps = (state: State) =>
  ({
    cards: state.cards.toString()
  } as StateToProps)

const mapDispatchToProps = (dispatch: Dispatch<void>) =>
  ({
    initGame: () => dispatch(actions.initGame())
  } as DispatchToProps)

const Initializer = lifecycle<DispatchToProps, State>({
  componentDidMount() {
    this.props.initGame()
  }
})(Cards)

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps
)(Initializer)
