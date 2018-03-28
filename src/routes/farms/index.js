import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Fields from './components/fields'
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
      path={`${match.path}/:farmId`}
      exact />
    <Route
      component={Fields}
      path={`${match.path}/:farmId/fields`} />
    <Route
      component={FarmList}
      path={match.path}
      exact />
  </Switch>
)
