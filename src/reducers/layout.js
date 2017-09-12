import { handleActions } from 'redux-actions'
import { Map } from 'immutable'
import moment from 'moment'

import c from './../constants/layout-constants'

const initialState = Map({
  selectedUserId: null,
  activeYear: moment().year(),
  activeMonth: moment().month(),
  selectedWeek: moment().weekYear(),
})

export default handleActions({
  [c.SELECT_USER]: (s, a) => s.set('selectedUserId', a.payload.id),
  [c.SET_DATE]: (s, a) => s.merge({
    activeYear: a.payload.year,
    activeMonth: a.payload.month,
    selectedWeek: a.payload.week,
  })
}, initialState)
