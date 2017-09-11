import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import c from './../constants/layout-constants'

const initialState = OrderedMap({
  currentUser: null,
  currentMonth: null,
  selectedWeek: null,
})

export default handleActions({
}, initialState)
