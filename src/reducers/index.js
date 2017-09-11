import { combineReducers } from 'redux'
import users from './users'
import weeks from './weeks'
import layout from './layout'

const rootReducer = combineReducers({
    users,
    weeks,
    layout
})

export default rootReducer
