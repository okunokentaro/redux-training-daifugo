import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

//
// Action Creators
//

const actionCreator = actionCreatorFactory()
export const increment = actionCreator('INCREMENT')
export const decrement = actionCreator('DECREMENT')

//
// Reducer
//

export interface State {
  cards: number[]
}

export default reducerWithInitialState<State>({ cards: [0] })
  .case(increment, state => {
    return { ...state }
  })
  .case(decrement, state => {
    return { ...state }
  })
