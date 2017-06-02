import {combineReducers, createStore} from 'redux'

import projects from './project'
import statuses from './status'
import categories from './categories'

export default createStore(combineReducers({
  projects,
  statuses,
  categories
}))