import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './MonthSelectorArrow.styles'

const MonthSelectorArrow = ({ onPress, symbol }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Text style={styles.text}>{symbol}</Text>
    </View>
  </TouchableOpacity>
);

MonthSelectorArrow.propTypes = {
  symbol: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

MonthSelectorArrow.componentName = 'MonthSelectorArrow'

export default MonthSelectorArrow
