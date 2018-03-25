import { combineReducers } from 'redux-immutable'

import farms from './farms'
import photos from './photos'

export default combineReducers({
  farms,
  photos
})
