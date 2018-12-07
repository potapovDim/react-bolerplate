import React, {Component} from 'react'
import {connect} from 'react-redux'
import {} from './test_case'


const Step = ({stepTitle, expectedResult}) => (<div>
  <div>{stepTitle}</div>
  {expectedResult && <div>{expectedResult}</div>}
</div>)

const TestCaseViewCurrentCase = ({isExecuted, title, steps}) => (<div>
  <div>{title}</div>
  {isExecuted && <span>Executed</span>}
  {steps.map((step, index) => <Step key={index} {...step} />)}
</div>)

class TestCases extends Component {

  render() {
    const {testCases} = this.props
    return (
      <div>
        <button>Update test case</button>
        {testCases.map((testCase, index) => <TestCaseViewCurrentCase key={index} {...testCase} />)}
      </div>
    )
  }
}
class TestCaseList extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const {testCases} = this.props
    return (
      <div>
        <button>Add new Case</button>
        <button>Sort cases</button>
        <TestCases testCases={testCases} />
      </div>
    )
  }
}

const ConnectedTestCaseList = connect((state) => state)(TestCaseList)

export {ConnectedTestCaseList}
