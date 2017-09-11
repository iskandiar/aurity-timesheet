import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

const initialState = OrderedMap()

export default handleActions({
  // [c.CLEAR_COMPANIES]: (s, a) => initialState,
}, initialState)
