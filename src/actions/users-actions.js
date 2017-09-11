import { createAction } from 'redux-actions'
import { get } from 'axios'

import c from './../constants/user-constants'
import offline from './../utils/offline'
import env from './../config/env'

export const fetch = p => async (d, getState) => {
  let users
  if (!env.API_URL) {
    users = offline.get('users')
  } else {
    const result = await get(`${env.API_URL}/users`)
    users = result.data
  }
  d(createAction(c.FETCH_USERS)({users}))
}
