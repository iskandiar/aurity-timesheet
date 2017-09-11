import { createStore, applyMiddleware } from 'redux'
import app from './../reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk, promiseMiddleware()))
  return store
}
