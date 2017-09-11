import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native'

export default class UserPicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedUserId: PropTypes.string,
    users: PropTypes.object.isRequired,
  }

  render() {
    const { selectedUserId, onChange, users } = this.props
    return (
      <View>
        <Picker selectedValue={selectedUserId} onValueChange={onChange}>
          {users.map(u => (
            <Picker.Item label={`${u.username} - ${u.email}`} value={u.id}/>
          )).toList()}
        </Picker>
      </View>
    )
  }
}
