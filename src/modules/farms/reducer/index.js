import Immutable from 'immutable'

import configureReducer from 'support/configure-reducer'
import * as actions from '../actions'

const INITIAL_STATE = Immutable.fromJS({
  data: []
})

export default configureReducer(
  'farms',
  INITIAL_STATE,
  [
    actions.READ_ALL,
    actions.READ,
    actions.CREATE,
    actions.UPDATE,
    actions.DELETE
  ]
)
