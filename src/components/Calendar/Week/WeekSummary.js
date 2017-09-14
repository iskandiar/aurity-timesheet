import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './WeekSummary.styles'

const WeekSummary = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{'s'}</Text>
  </View>
);

WeekSummary.propTypes = {
}

WeekSummary.componentName = 'WeekSummary'

export default WeekSummary
