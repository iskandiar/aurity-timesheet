import { handleActions } from 'redux-actions'
import { OrderedMap, Record } from 'immutable'

import c from './../constants/user-constants'

const initialState = OrderedMap()

const UserRecord = Record({
  id: '',
  email: '',
  username: '',
})

export default handleActions({
  [c.FETCH_USERS]: (s, a) => a.payload.users.reduce((acc, user) => acc.set(user.id, UserRecord({
    id: user.id,
    email: user.email,
    username: user.username,
  })), initialState),
}, initialState)
