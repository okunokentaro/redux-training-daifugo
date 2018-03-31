import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { increment, decrement, State } from '../modules/value'

const App = ({
  value,
  increment,
  decrement
}: {
  value: number
  increment: () => void
  decrement: () => void
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
  </div>
)

const mapStateToProps = (state: State) => ({
  value: state.value
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect<
  { value: number },
  {
    increment: () => void
    decrement: () => void
  },
  void,
  State
>(mapStateToProps, mapDispatchToProps)(App)
