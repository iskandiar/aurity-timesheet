import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './config/configureStore'

import Home from './screens/Home'

const store = configureStore()

export default AurityTimesheet = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
