import React, {Component} from 'react'
import {connect} from 'react-redux'

class TestSuits extends Component {
  render() {
    return (<div>
      Test Suits
    </div>)
  }
}

const ConnectedTestSuits = connect((state) => state)(TestSuits)

export {ConnectedTestSuits}
