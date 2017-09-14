import { createSelector } from 'reselect'
import { OrderedMap } from 'immutable'

const userId = s => s.layout.get('selectedUserId')
const year = s => s.layout.get('activeYear')
const month = s => s.layout.get('activeMonth')
const calendar = s => s.calendar.get('data')

export const getUserCalendarData = createSelector([userId, year, month, calendar],
  (userId, year, month, calendar) => {
    // if (!calendar.hasIn([userId, year, month])) return OrderedMap()
    return calendar.getIn([userId, year, month]) || OrderedMap()
})
