import { combineReducers } from 'redux'
import environment, { EnvironmentState } from './environment'

export interface State {
  environment: EnvironmentState
}

export default combineReducers<State>({ environment })
