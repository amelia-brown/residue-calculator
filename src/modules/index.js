import { combineReducers } from 'redux-immutable'

import farms from './farms'
import fields from './fields'
import photos from './photos'

export default combineReducers({
  farms,
  fields,
  photos
})
