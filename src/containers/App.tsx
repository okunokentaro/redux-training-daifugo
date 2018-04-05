import * as React from 'react'
import { lifecycle } from 'recompose'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { GameConfig, initGame, State } from '../modules/game'

interface StateToProps {
  cards: string
}

interface DispatchToProps {
  initGame: (gameConfig: GameConfig) => void
}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) =>
  ({
    cards: state.cards.toString(),
  } as StateToProps)

const mapDispatchToProps = (dispatch: Dispatch<void>) =>
  ({
    initGame: gameConfig => dispatch(initGame(gameConfig)),
  } as DispatchToProps)

const Cards = ({ cards }: Props) => (
  <div>
    <h1>{cards}</h1>
  </div>
)

const Initializer = lifecycle<DispatchToProps, State>({
  componentDidMount() {
    this.props.initGame({ player: 4 })
  },
})(Cards)

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps
)(Initializer)
