import {ADD_TEST_CASE, REMOVE_TEST_CASE} from './action_types'

const testCases = (state = [], action) => {
  switch(action.type) {
    case ADD_TEST_CASE: {
      return [...state].push(action.testCaseData)
    }
    case REMOVE_TEST_CASE: {
      return state.filter((testCase) => testCase._id !== action.testCaseId)
    }
    default:
      return state
  }
}

export {testCases}