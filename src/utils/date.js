import moment from 'moment'
import { Range } from 'immutable'

const setDate = (year, month, day = 1) => moment({year, month, day})

const getDate = m => ({
  year: m.year(),
  month: m.month(),
  week: m.isoWeekYear()
})

export const getWeekRange = (year, month, day = 1) => {
  const m = setDate(year, month, day)
  const startWeek = m.isoWeek()
  const endWeek = startWeek + 6

  return Range(startWeek, endWeek).toList()
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

export const getDayByWeek = (year, week, day) => (
  moment().day(day).year(year).week(week).add(1, 'days').date()
)

export const normalizeWeekNumber = (week) => week > 52 ? week - 52 : week

export const isDayInMonth = (year, week, day, activeMonth) => {
  const month = moment().day(day).year(year).week(week).add(1, 'days').month()

  return month === activeMonth
}
