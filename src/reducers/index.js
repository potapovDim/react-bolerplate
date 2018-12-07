import {combineReducers} from 'redux'
import {testCases} from './test_case'
import {createStore} from 'redux'

const store = createStore(combineReducers({
  testCases
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {store}
