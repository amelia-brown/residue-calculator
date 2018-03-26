import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FieldList from './components/list'
import FieldShow from './components/show'
import FieldCreate from './components/create'

export default ({match}) => (
  <Switch>
    <Route
      component={FieldCreate}
      path={`${match.path}/create`}
      exact />
    <Route
      component={FieldShow}
      path={`${match.path}/:id`}
      exact />
    <Route
      component={FieldList}
      path={match.path}
      exact />
  </Switch>
)
