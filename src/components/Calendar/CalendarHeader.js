import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './CalendarHeader.styles'

const headers = ['WEEK', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', '']

const CalendarHeader = () => (
  <View style={styles.container}>
    {headers.map((h, key) => (
      <View style={styles.item} key={key}>
        <Text style={styles.text}>{h}</Text>
      </View>
    ))}
  </View>
);

CalendarHeader.componentName = 'CalendarHeader'

export default CalendarHeader
