import { handleActions } from 'redux-actions'
import { Map, OrderedMap, Record, List } from 'immutable'

import c from './../constants/calendar-constants'

const initialState = Map({
  loading: false,
  data: OrderedMap()
})

const WeekRecord = Record({
  days: List(),
  status: '',
  approvedByDate: '',
  approvedById: ''
})

const DayRecord = Record({
  minutes: 0,
  hours: 0
})

export default handleActions({
  [c.FETCH_MONTH]: (s, a) => s.setIn(['data', a.payload.id, a.payload.year, a.payload.month], (
    a.payload.weeks.reduce((acc, week) => acc.set(week.week_number, WeekRecord({
      status: week.status,
      approvedByDate: week.approved_by_date,
      approvedById: week.approved_by_id,
      days: week.days_in_week.reduce((acc, day) => acc.push(DayRecord({
        minutes: day.minutes,
        hours: day.hours
      })), List())
    })), OrderedMap())
  )),
}, initialState)
