import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './reducers/rootReducer'

import MainPage from './main-page'

ReactDom.render(
  <Provider store={store}>
    <MainPage />
  </Provider >, document.getElementById('app'))