import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { normalizeWeekNumber } from './../../../utils/date'

import styles from './WeekNumber.styles'

const WeekNumber = ({ number }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{normalizeWeekNumber(number)}</Text>
  </View>
);

WeekNumber.propTypes = {
  number: PropTypes.number.isRequired,
}

WeekNumber.componentName = 'WeekNumber'

export default WeekNumber
