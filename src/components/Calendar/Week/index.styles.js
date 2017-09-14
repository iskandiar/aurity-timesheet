import { StyleSheet } from 'react-native'

import defaultStyles from './../../../styles/default'

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
  },
  containerSelected: {
    backgroundColor: defaultStyles.yellow
  }
})
