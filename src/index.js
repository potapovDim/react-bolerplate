import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './reducers'

import {Menu} from './menu'
import {ConnectedTestCaseList} from './components/test_cases_list'
import {AboutProject} from './components/about_project'


const layouts = {
  preview: 'Main page',
  test_case: 'Test case builder',
  test_case_list: 'Test case list'
}

class Basic extends Component {

  state = {view: layouts.preview}

  openView = (viewItem) => {
    this.setState({view: viewItem})
  }

  getView = () => {
    switch(this.state.view) {
      case layouts.getView:
        return <AboutProject />
      case layouts.test_case_list:
        return <ConnectedTestCaseList />
      case layouts.preview:
        return <AboutProject />
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Menu openView={this.openView} views={layouts} />
        {this.getView()}
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <Basic />
  </Provider>
  , document.getElementById('app'))
