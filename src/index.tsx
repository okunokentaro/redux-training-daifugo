import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Game from './containers/Game'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
)
