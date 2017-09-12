import { combineReducers } from 'redux'
import users from './users'
import calendar from './calendar'
import layout from './layout'

const rootReducer = combineReducers({
    users,
    calendar,
    layout
})

export default rootReducer
