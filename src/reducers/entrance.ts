import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { numOfPlayerMax, numOfPlayerMin } from '../models/game'

export interface EntranceState {
  numOfPlayerInput: number
}

//
// Actions
//

const actionCreator = actionCreatorFactory()

interface UpdateNumOfPlayerPayload {
  numOfPlayerInput: string
}
export const updateNumOfPlayer = actionCreator<UpdateNumOfPlayerPayload>(
  'UPDATE_NUM_OF_PLAYER',
)
const updateNumOfPlayerHandler = (
  state: EntranceState,
  payload: UpdateNumOfPlayerPayload,
): EntranceState => {
  const numOfPlayerInput = (() => {
    const n = parseInt(payload.numOfPlayerInput, 10)
    if (n < numOfPlayerMin) {
      return numOfPlayerMin
    }
    if (numOfPlayerMax < n) {
      return numOfPlayerMax
    }
    return n
  })()

  return { ...state, numOfPlayerInput }
}

//
// Reducer
//

export default reducerWithInitialState<EntranceState>({
  numOfPlayerInput: numOfPlayerMin,
}).case(updateNumOfPlayer, updateNumOfPlayerHandler)
