import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../styles/test_case.scss'

const Step = ({stepTitle, expectedResult}) => (<div>
  <div>{stepTitle}</div>
  {expectedResult && <div>{expectedResult}</div>}
</div>)

const TestCaseViewCurrentCase = ({isExecuted, title, steps, suit}) => (<div>
  <div className="test___case_title">{title}</div>
  <div className="test___case_body">
    {suit && <div>{suit}</div>}
    {isExecuted && <span>Executed</span>}
    {steps.map((step, index) => <Step key={index} {...step} />)}
  </div>
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
