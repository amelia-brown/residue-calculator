import Immutable from 'immutable'

import * as actions from '../actions'

const INITIAL_STATE = Immutable.fromJS({})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE:
      return state.merge({
        [action.payload.id]: action.payload
      })
    case 'fields/CREATE':
      let fields = state.getIn([
        action.payload.farm,
        'fields'
      ]) || new Immutable.List()
      fields = fields.concat(action.payload.data.id)
      return state.setIn([
        action.payload.farm,
        'fields'
      ], fields)
    default:
      return state
  }
}
