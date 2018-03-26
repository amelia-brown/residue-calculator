import Immutable from 'immutable'

import * as actions from '../actions'

const INITIAL_STATE = Immutable.fromJS({})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE:
      return state.merge({
        [action.payload.id]: action.payload
      })
    default:
      return state
  }
}
