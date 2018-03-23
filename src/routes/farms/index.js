import React from 'react'
import { Route } from 'react-router-dom'

import FarmList from './components/list'
import FarmShow from './components/show'

export default ({match}) => (
  <div>
    <Route
      component={FarmShow}
      path={`${match.path}/:id`}
      exact />
    <Route
      component={FarmList}
      path={match.path}
      exact />
  </div>
)
