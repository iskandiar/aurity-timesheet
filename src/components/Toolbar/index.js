import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'

import styles from './index.styles'

const Toolbar = () => (
  <View style={styles.container}>
    <Image style={styles.image} source={require('./../../static/logo.png')}/>
    <Text style={styles.text}>{'AurityTimesheet'}</Text>
  </View>
)

Toolbar.componentName = 'Toolbar'

export default Toolbar
