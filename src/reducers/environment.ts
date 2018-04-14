import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {}

//
// Actions
//

const actionCreator = actionCreatorFactory()

export const hello = actionCreator<{}>('HELLO')
const helloHandler = (state: State): State => {
  console.log('hello')
  return { ...state }
}

//
// Reducer
//

export default reducerWithInitialState<State>({}).case(hello, helloHandler)
