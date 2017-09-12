import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

import { getMonthName } from './../../../utils/date'

import styles from './MonthSelectorButton.styles'

const MonthSelectorButton = ({ onPress, activeYear, activeMonth }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Text style={styles.year}>{activeYear}</Text>
      <Text style={styles.month}>{getMonthName(activeMonth)}</Text>
    </View>
  </TouchableOpacity>
);

MonthSelectorButton.propTypes = {
  activeYear: PropTypes.number.isRequired,
  activeMonth: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
}

MonthSelectorButton.componentName = 'MonthSelectorButton'

export default MonthSelectorButton
