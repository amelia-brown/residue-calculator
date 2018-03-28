import Immutable from 'immutable'

import * as actions from '../actions'

const INITIAL_STATE = Immutable.fromJS({})

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE:
      return state.merge({
        [action.payload.data.id]: action.payload.data
      })
    case 'photos/CREATE':
      let photos = state.getIn([
        action.payload.field,
        'photos'
      ]) || new Immutable.List()
      photos = photos.concat(action.payload.data.id)
      return state.setIn([
        action.payload.field,
        'photos'
      ], photos)
    default:
      return state
  }
}
