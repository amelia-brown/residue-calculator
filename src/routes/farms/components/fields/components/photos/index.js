import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PhotoAdd from './components/add'
import PhotoEdit from './components/edit'
import PhotoShow from './components/show'

export default ({match}) => {
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        component={PhotoAdd} />
      <Route
        exact
        path={`${match.path}/:photoId/edit`}
        component={PhotoEdit} />
      <Route
        component={PhotoShow}
        exact
        path={`${match.path}/:photoId`} />
    </Switch>
  )
}
