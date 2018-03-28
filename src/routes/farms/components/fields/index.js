import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Photos from './components/photos'
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
      path={`${match.path}/:fieldId`}
      exact />
    <Route
      component={Photos}
      path={`${match.path}/:fieldId/photos`} />
    <Route
      component={FieldList}
      path={match.path}
      exact />
  </Switch>
)
