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
  value: number
}

export default reducerWithInitialState<State>({ value: 0 })
  .case(increment, state => {
    return { ...state, value: state.value + 1 }
  })
  .case(decrement, state => {
    return { ...state, value: state.value - 1 }
  })
