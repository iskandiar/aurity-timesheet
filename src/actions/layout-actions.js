import { createAction } from 'redux-actions'
import { get } from 'axios'
import m from 'moment'

import c from './../constants/layout-constants'

import * as calendarActions from './calendar-actions'

export const selectActiveUser = p => (d, getState) => {
  d(createAction(c.SELECT_USER)(p))
  d(calendarActions.fetch())
}

export const setDate = p => (d, getState) => {
  const { year, month, day } = p
  const week = m({year, month, day}).week()

  d(createAction(c.SET_DATE)({year, month, week}))
  d(calendarActions.fetch())
}
