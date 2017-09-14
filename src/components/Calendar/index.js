import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Picker,
  DatePickerAndroid
} from 'react-native'

import { getWeekRange, getNextMonth, getPreviousMonth } from './../../utils/date'

import MonthSelector from './MonthSelector'
import Week from './Week'
import CalendarHeader from './CalendarHeader'

export default class Calendar extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onDateChange: PropTypes.func.isRequired,
    activeYear: PropTypes.number.isRequired,
    activeMonth: PropTypes.number.isRequired,
    selectedWeek: PropTypes.number.isRequired,
    calendarData: PropTypes.object.isRequired,
  }

  getWeeks = (p = this.props) => getWeekRange(p.activeYear, p.activeMonth)

  onDatePicker = (p = this.props) => async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        p.onDateChange({year, month, day})
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message)
    }
  }

  onPrev = (p = this.props) => () => p.onDateChange(getPreviousMonth(p.activeYear, p.activeMonth))

  onNext = (p = this.props) => () => p.onDateChange(getNextMonth(p.activeYear, p.activeMonth))

  onWeekChange = (number, p = this.props) => () => p.onClick(number)

  render() {
    const { selectedUserId, onClick, users, activeYear, activeMonth,
      selectedWeek, calendarData } = this.props

    return (
      <View>
        <MonthSelector
          activeYear={activeYear}
          activeMonth={activeMonth}
          onPress={this.onDatePicker()}
          onNext={this.onNext()}
          onPrev={this.onPrev()}
        />
        <CalendarHeader />
        {this.getWeeks().map((w, key) => (
          <Week
            selected={selectedWeek === w}
            key={key}
            number={w}
            onPress={this.onWeekChange(w)}
            activeMonth={activeMonth}
            activeYear={activeYear}
            weekData={calendarData.get(w)}
          />
        )).toList()}
      </View>
    )
  }
}
