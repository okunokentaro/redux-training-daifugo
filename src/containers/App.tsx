import * as React from 'react'
import { lifecycle } from 'recompose'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { actions, State } from '../modules/game'

interface StateToProps {
  cardsText: string
}

interface DispatchToProps {
  initGame: () => void
}

type Props = StateToProps & DispatchToProps

const Cards = ({ cardsText }: Props) => (
  <div>
    <h1>{cardsText}</h1>
  </div>
)

const mapStateToProps = (state: State): StateToProps => ({
  cardsText: state.cardsText
})

const mapDispatchToProps = (dispatch: Dispatch<void>): DispatchToProps => ({
  initGame: () => dispatch(actions.initGame())
})

const Initializer = lifecycle<DispatchToProps, State>({
  componentDidMount() {
    this.props.initGame()
  }
})(Cards)

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps
)(Initializer)
