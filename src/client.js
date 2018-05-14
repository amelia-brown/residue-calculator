import Immutable from 'immutable'

import createHistory from 'history/createBrowserHistory'
import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import configureStore from 'support/configure-store'
import Mount from 'support/mount'

let state = {}
const initialState = Immutable.fromJS(state)

const mount = document.getElementById('mount')
const history = createHistory()

const store = configureStore(initialState, history)

const renderComponent = Component => {
  hydrate(
    <AppContainer>
      <Component
        store={store}
        history={history} />
    </AppContainer>,
    mount
  )
}

if (module.hot) {
  module.hot.accept(
    'support/mount',
    () => renderComponent(require('./support/mount').default)
  )
}

renderComponent(Mount)
