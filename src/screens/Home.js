import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { UserPicker, Calendar, Toolbar } from './../components'

import {
  View,
  Picker,
  ToolbarAndroid
} from 'react-native'

import * as usersActions from './../actions/users-actions'
import * as layoutActions from './../actions/layout-actions'

@connect(
  (s, p) => ({
    users: s.users,
    selectedUserId: s.layout.get('selectedUserId'),
    activeYear: s.layout.get('activeYear'),
    activeMonth: s.layout.get('activeMonth'),
    selectedWeek: s.layout.get('selectedWeek'),
  }),
  d => ({
    usersActions: bindActionCreators(usersActions, d),
    layoutActions: bindActionCreators(layoutActions, d),
  })
)

export default class Home extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    usersActions: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
    activeYear: PropTypes.number.isRequired,
    activeMonth: PropTypes.number.isRequired,
    selectedWeek: PropTypes.number.isRequired,
  }

  componentDidMount() {
    this.props.usersActions.fetch()
  }

  onUserChange = (p = this.props) => id => p.layoutActions.selectActiveUser({id})

  onWeekChange = (p = this.props) => id => console.log(id)

  onDateChange = (p = this.props) => date => p.layoutActions.setDate(date)

  render() {
    const { users, selectedUserId, activeYear, activeMonth, selectedWeek } = this.props
    return (
      <View>
        <Toolbar/>
        <UserPicker users={users} selectedUserId={selectedUserId} onChange={this.onUserChange()}/>
        <Calendar
          onClick={this.onWeekChange}
          activeYear={activeYear}
          activeMonth={activeMonth}
          selectedWeek={selectedWeek}
          onDateChange={this.onDateChange()}
        />
      </View>
    );
  }
}
