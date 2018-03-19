import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import routes from 'routes'

export default (
  context,
  location,
  store
) => renderToString(
  <Provider store={store}>
    <StaticRouter
      context={context}
      location={location}>
      {routes}
    </StaticRouter>
  </Provider>
)
