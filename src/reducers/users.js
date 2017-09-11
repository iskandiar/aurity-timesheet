import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import c from './../constants/user-constants'

const initialState = OrderedMap()

export default handleActions({
  [c.FETCH_USERS]: (s, a) => initialState,
}, initialState)
