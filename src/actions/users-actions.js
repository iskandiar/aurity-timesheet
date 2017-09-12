import { createAction } from 'redux-actions'
import { get } from 'axios'

import c from './../constants/user-constants'
import l from './../constants/layout-constants'
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
  if (users.length > 0) d(createAction(l.SELECT_USER)({id: users[0].id}))
}
