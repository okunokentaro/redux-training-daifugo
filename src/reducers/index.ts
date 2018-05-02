import { combineReducers } from 'redux'
import environment, { EnvironmentState } from './environment'
import entrance, { EntranceState } from './entrance'

export interface State {
  environment: EnvironmentState
  entrance: EntranceState
}

export default combineReducers<State>({ environment, entrance })
