import Immutable from 'immutable'

import * as actions from '../actions'

const INITIAL_STATE = Immutable.fromJS({})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE:
      return state.merge({
        [action.payload.data.id]: action.payload.data
      })
    case actions.EDIT:
      return state.merge(
        state.set(
          action.payload.id,
          action.payload.data
        )
      )
    default:
      return state
  }
}
