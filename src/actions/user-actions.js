import { createAction } from 'redux-actions'
import { get } from 'axios'

import c from './../constants/user-constants'

export const fetchUsers = p => async (d, getState) => {
  const result = await get('https://timesheet-training-api.herokuapp.com/api/users')
  d(createAction(c.FETCH_USERS)({users: []}))
}
