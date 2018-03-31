import * as React from 'react'
import { connect } from 'react-redux'

import { State } from '../modules/value'

interface StateToProps {
  cards: number[]
}

interface DispatchToProps {}

type Props = StateToProps & DispatchToProps

const App = ({ cards }: Props) => (
  <div>
    <h1>{cards}</h1>
  </div>
)

const mapStateToProps = (state: State): StateToProps => ({
  cards: state.cards
})

const mapDispatchToProps = (): DispatchToProps => ({})

export default connect<StateToProps, DispatchToProps, void, State>(
  mapStateToProps,
  mapDispatchToProps
)(App)
