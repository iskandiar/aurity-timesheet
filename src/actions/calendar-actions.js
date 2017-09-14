import { createAction } from 'redux-actions'
import { get } from 'axios'

import c from './../constants/calendar-constants'
import l from './../constants/layout-constants'
import offline from './../utils/offline'
import env from './../config/env'

export const fetch = p => async (d, getState) => {
  const state = getState()
  const year = state.layout.get('activeYear')
  const month = state.layout.get('activeMonth')
  const userId = state.layout.get('selectedUserId')
  let weeks
  if (!env.API_URL) {
    weeks = offline.get('weeks')
  } else {
    const result = await get(`${env.API_URL}/training/weeks/${(month + 1)}/${year}/${userId}`)
    weeks = result.data.data.weeks
  }
  d(createAction(c.FETCH_MONTH)({id: userId, year, weeks, month}))
}
