import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Picker
} from 'react-native'

import styles from './index.styles'

export default class UserPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedUserId: PropTypes.number,
    users: PropTypes.object.isRequired,
  }

  render() {
    const { selectedUserId, onChange, users } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{'Select user'}</Text>
        <Picker selectedValue={selectedUserId} onValueChange={onChange}>
          {users.map((u, key) => (
            <Picker.Item label={`${u.username} - ${u.email}`} value={u.id} key={key}/>
          )).toList()}
        </Picker>
      </View>
    )
  }
}
