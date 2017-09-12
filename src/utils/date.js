import moment from 'moment'
import { Range } from 'immutable'

const setDate = (year, month, day = 1) => moment({year, month, day})

const getDate = m => ({
  year: m.year(),
  month: m.month(),
  week: m.weekYear()
})

export const getWeekRange = (year, month, day = 1) => {
  const m = setDate(year, month, day)
  const startWeek = m.week()
  const endWeek = m.endOf('month').week()

  if (endWeek < startWeek) {
    // case when in December weeks 1 starts
    return Range(startWeek, 52).toList().concat([1])
  }

  return Range(startWeek, endWeek + 1).toList()
}

export const getMonthName = month => moment().month(month).format('MMMM')

export const getPreviousMonth = (year, month) => {
  const m = setDate(year, month).subtract(1, 'months')

  return getDate(m)
}

export const getNextMonth = (year, month) => {
  const m = setDate(year, month).add(1, 'months')

  return getDate(m)
}
