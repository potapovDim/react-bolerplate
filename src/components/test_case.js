import React, {Component} from 'react'

// isExecuted: boolean
// title: String
// _id: string
// steps: Array < {
//   stepPosition: number // should start with,
//   stepTitle: string
//   expectedResult: string
// } >

const Step = ({stepTitle, expectedResult}) => (<div>
  <div>{stepTitle}</div>
  {expectedResult && <div>{expectedResult}</div>}
</div>)

const TestCaseViewCurrentCase = ({isExecuted, title, steps}) => (<div>
  <div>{title}</div>
  {isExecuted && <span>Executed</span>}
  {steps.map((step) => <Step {...step} />)}
</div>)

class TestCase extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const {testCases} = this.props
    console.log(testCases, '!')
    return (
      <div>
        <button>Update test case</button>
        {testCases.map((testCase) => <TestCaseViewCurrentCase {...testCase} />)}
      </div>
    )
  }
}

TestCase

export {TestCase}
