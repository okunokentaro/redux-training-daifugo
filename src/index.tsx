import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import Screen from './containers/Screen'

const store = createStore(reducers, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Screen />
  </Provider>,
  document.getElementById('root'),
)
