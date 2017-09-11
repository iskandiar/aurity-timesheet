import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { UserPicker } from './../components'

import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native'

import * as usersActions from './../actions/users-actions'

@connect(
  (s, p) => ({
    users: s.users,
  }),
  d => ({
    usersActions: bindActionCreators(usersActions, d),
  })
)

export default class Home extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    usersActions: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.usersActions.fetch()
  }

  onUserChange = (p = this.props) => user => {

  }

  render() {
    const { users } = this.props
    return (
      <View style={styles.container}>
        <UserPicker users={users} selectedUserId={null} onChange={this.onUserChange()}/>
        <Text style={styles.welcome}>
          {this.props.users.size}
          {process.env.API_URL}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.jsdd12
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
