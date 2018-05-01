import * as React from 'react'
import { FormEvent } from 'react'
import { pure } from 'recompose'
import { AnyAction, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { State } from '../reducers'
import { changeNumOfPlayer, playGame } from '../thunks/game'
import { numOfPlayerMax, numOfPlayerMin } from '../models/game'

interface StateToProps {
  numOfPlayerInput: string
}

interface DispatchToProps {
  changeNumOfPlayer: (v: FormEvent<HTMLInputElement>) => void
  playGame: () => void
}

type Props = StateToProps & DispatchToProps

//
// Implementation
//

const mapStateToProps = (state: State) =>
  ({
    numOfPlayerInput: `${state.entrance.numOfPlayerInput}`,
  } as StateToProps)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, State>) =>
  ({
    changeNumOfPlayer: (ev: FormEvent<HTMLInputElement>) => {
      const value = (ev.target as HTMLInputElement).value
      dispatch(changeNumOfPlayer(value))
    },
    playGame: () => dispatch(playGame()),
  } as DispatchToProps)

const Entrance = pure(function Entrance({
  changeNumOfPlayer,
  numOfPlayerInput,
  playGame,
}: Props) {
  return (
    <>
      <label htmlFor="player">
        Player:&nbsp;
        <input
          type="number"
          id="player"
          min={numOfPlayerMin}
          max={numOfPlayerMax}
          onChange={changeNumOfPlayer}
          value={numOfPlayerInput}
        />
      </label>
      <button onClick={() => playGame()}>playGame</button>
    </>
  )
})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Entrance)
