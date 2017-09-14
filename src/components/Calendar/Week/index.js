import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { Range, List } from 'immutable'

import WeekNumber from './WeekNumber'
import WeekSummary from './WeekSummary'
import WeekDay from './WeekDay'

import { isDayInMonth } from './../../../utils/date'

import styles from './index.styles'

const getStyle = selected => selected ?
  [styles.container, styles.containerSelected] : styles.container

const Week = ({ onPress, number, activeYear, activeMonth, selected, weekData }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={getStyle(selected)}>
      <WeekNumber number={number}/>
      {Range(0, 7).map((day, key) => (
        <WeekDay
          key={key}
          day={day}
          week={number}
          activeYear={activeYear}
          active={isDayInMonth(activeYear, number, day, activeMonth)}
          dayData={weekData && weekData.days.get(day)}
        />
      ))}
      <WeekSummary/>
    </View>
  </TouchableOpacity>
);

Week.propTypes = {
  onPress: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  activeMonth: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  weekData: PropTypes.object,
}

Week.componentName = 'Week'

export default Week
