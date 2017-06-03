import {combineReducers, createStore} from 'redux'

import projects from './project'
import statuses from './status'
import categories from './categories'
import townRegions from './towns'

export default createStore(combineReducers({
  projects,
  statuses,
  categories,
  townRegions
}))