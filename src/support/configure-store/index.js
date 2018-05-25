import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'

import rootReducer from 'modules'

export default (state, history) => {
  let middlewares = [
    thunkMiddleware,
    // fetchMiddleware,
    promiseMiddleware(),
    // cookieMiddleware,
    // normalizrMiddleware,
    routerMiddleware(history)
  ]

  if (__IS_DEVELOPMENT__ && __IS_CLIENT__) {
    middlewares = middlewares.concat(
      [logger]
    )
  }

  /* eslint-disable no-underscore-dangle */

  let enhancers = [
    applyMiddleware(...middlewares)
  ]

  if (
    __IS_DEVELOPMENT__ &&
    __IS_CLIENT__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers = enhancers.concat(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  /* eslint-enable */

  const store = createStore(
    rootReducer,
    state,
    compose(...enhancers)
  )

  if (module.hot) {
    module.hot.accept('modules', () => {
      store.replaceReducer(require('modules').default)
    })
  }

  return store
}
