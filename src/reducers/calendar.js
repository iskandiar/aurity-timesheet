import { handleActions } from 'redux-actions'
import { Map, OrderedMap } from 'immutable'

const initialState = Map({
  loading: false,
  data: OrderedMap()
})

export default handleActions({
  // [c.CLEAR_COMPANIES]: (s, a) => initialState,
}, initialState)
