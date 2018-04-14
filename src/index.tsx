import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Screen from './containers/Screen'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <Screen />
  </Provider>,
  document.getElementById('root'),
)
