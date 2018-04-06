import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import gameReducer from './modules/game'
import Game from './containers/Game'

const store = createStore(gameReducer)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
)
