import React, {Component} from 'react'
import {connect} from 'react-redux'

class TestCaseList extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <button>Add new step</button>
      </div>
    )
  }
}

const ConnectedTestCaseList = connect((state) => state)(TestCaseList)

export {ConnectedTestCaseList}
