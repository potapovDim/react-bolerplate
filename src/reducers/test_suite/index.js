import {UPDATE_TEST_SUITE, ADD_TEST_SUITE, REMOVE_TEST_SUITE, REMOVE_TEST_SITE_WITH_RELATED_CASES} from '../action_types'
import {addTestSuit, removeTestSuit, updateTestSuit, removeTestTuitWithRelatedCases} from './action_creators'

/* test case object structure
  {
    isExecuted: boolean
    title: String
    _id: string
    testCases: Array<strings> // array with test cases ids
    analitics: Object // need get more requirements
  }
*/


const testCases = (state = [], action) => {
  switch(action.type) {
    case REMOVE_TEST_SITE_WITH_RELATED_CASES: {
      return state.map((testSuite) => testSuite._id !== action.testSuitId)
    }
    default: {
      return state
    }
  }
}