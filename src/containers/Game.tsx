import * as React from 'react'
import { lifecycle, pure } from 'recompose'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { GameConfig, initGame, State } from '../modules/game'
import { Cards } from '../models/cards'

interface StateToProps {
  hands: Cards[]
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
    hands: state.hands,
  } as StateToProps)

const mapDispatchToProps = (dispatch: Dispatch<void>) =>
  ({
    initGame: gameConfig => dispatch(initGame(gameConfig)),
  } as DispatchToProps)

const Game = lifecycle<DispatchToProps, State>({
  componentDidMount() {
    this.props.initGame({ player: 4 })
  },
})(
  pure(({ hands }: Props) => (
    <div>{hands.map((hand, i) => <p key={i}>{hand.toString()}</p>)}</div>
  )),
)

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Game)
