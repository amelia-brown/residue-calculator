import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FarmList from './components/list'
import FarmShow from './components/show'
import FarmCreate from './components/create'

export default ({match}) => (
  <Switch>
    <Route
      component={FarmCreate}
      path={`${match.path}/create`}
      exact />
    <Route
      component={FarmShow}
      path={`${match.path}/:id`}
      exact />
    <Route
      component={FarmList}
      path={match.path}
      exact />
  </Switch>
)
