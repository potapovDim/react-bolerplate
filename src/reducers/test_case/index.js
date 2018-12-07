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

const defaultState = [
  {
    isExecuted: false,
    title: 'TEST TEST CASE 1',
    _id: 'test-id-1',
    steps: [{
      stepPosition: 0,
      stepTitle: 'test step 1',
      expectedResult: 'some expected result'
    }, {
      stepPosition: 1,
      stepTitle: 'test step 2',
      expectedResult: 'some expected result'
    },
    {
      stepPosition: 2,
      stepTitle: 'test step 3',
      expectedResult: 'some expected result dsjadlkasjldkjaslkjldjlksalkdjlkasjj'
    },
    {
      stepPosition: 3,
      stepTitle: 'test step 4'
    }]
  }
]


const testCases = (state = defaultState, action) => {
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
