import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './reducers/rootReducer'

<<<<<<< HEAD
import routes from './routes'

ReactDom.render(routes, document.getElementById('app'))
=======
import MainPage from './main-page'

ReactDom.render(
  <Provider store={store}>
    <MainPage />
  </Provider >, document.getElementById('app'))
>>>>>>> hash
