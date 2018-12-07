import {ADD_TEST_CASE, REMOVE_TEST_CASE, UPDATE_TEST_CASE} from './action_types'

/* test case object structure
  {
    isExecuted: boolean
    title: String
    _id: string
    steps: Array<{
      stepPosition: number // should start with,
      stepTitle: string
      expectedResult: string
    }>
  }
*/


const testCases = (state = [], action) => {
  switch(action.type) {
    case ADD_TEST_CASE: {
      return [...state].push(action.testCaseData)
    }
    case REMOVE_TEST_CASE: {
      return state.filter((testCase) => testCase._id !== action.testCaseId)
    }
    case UPDATE_TEST_CASE: {
      const {_id} = action.testCaseData
      return state.map((testCase) => testCase._id === _id ? action.testCaseData : testCase)
    }
    default:
      return state
  }
}

export {testCases}
