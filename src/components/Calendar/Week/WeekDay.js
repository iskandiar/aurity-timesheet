import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { getDayByWeek } from './../../../utils/date'

import styles from './WeekDay.styles'

const getStyles = active => active ? styles.container : [styles.container, styles.containerInactive]

const getTime = data => `${data.hours}h ${data.minutes}m`

const WeekDay = ({ day, week, activeYear, active, dayData }) => (
  <View style={getStyles(active)}>
    <Text style={styles.text}>{getDayByWeek(activeYear, week, day)}</Text>
    <Text style={styles.timeText}>{dayData ? getTime(dayData) : '-'}</Text>
  </View>
);

WeekDay.propTypes = {
  week: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  dayData: PropTypes.object,
}

WeekDay.componentName = 'WeekDay'

export default WeekDay
