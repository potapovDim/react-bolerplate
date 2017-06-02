import React from 'react'
import { IndexRoute, Route, Router, browserHistory} from 'react-router'

import createHistory from 'history/createBrowserHistory'

import {App} from './main'
import {NewComponent} from './new-component'
import {OtherNewComponent} from './other-new-component'

const history = createHistory()

export default (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/new-component" component={NewComponent}/>
        <Route path="/other-new-component" component={OtherNewComponent}/>
      </Route>
  </Router>
)