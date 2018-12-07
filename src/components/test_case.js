import React, {Component} from 'react'
import {connect} from 'react-redux'

class TestCase extends Component {

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

const ConnectedTestCase = connect()(TestCase)

export {ConnectedTestCase}
