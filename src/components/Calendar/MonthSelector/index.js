import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import MonthSelectorArrow from './MonthSelectorArrow'
import MonthSelectorButton from './MonthSelectorButton'

import styles from './index.styles'

const MonthSelector = ({ onPress, activeYear, activeMonth, onPrev, onNext }) => (
  <View style={styles.container}>
    <MonthSelectorArrow symbol='<' onPress={onPrev}/>
    <MonthSelectorButton
      onPress={onPress}
      activeYear={activeYear}
      activeMonth={activeMonth}
    />
    <MonthSelectorArrow symbol='>' onPress={onNext}/>
  </View>
);

MonthSelector.propTypes = {
  activeYear: PropTypes.number.isRequired,
  activeMonth: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}

MonthSelector.componentName = 'MonthSelector'

export default MonthSelector
