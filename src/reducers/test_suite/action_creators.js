import {ADD_TEST_SUITE, REMOVE_TEST_SUITE, UPDATE_TEST_SUITE, REMOVE_TEST_SITE_WITH_RELATED_CASES} from '../action_types'

const addTestSuit = ({testSuitData}) => ({type: ADD_TEST_SUITE, testSuitData})
const removeTestSuit = ({testSuitId}) => ({type: REMOVE_TEST_SUITE, testSuitId})
const removeTestTuitWithRelatedCases = ({testSuitId}) => ({type: REMOVE_TEST_SITE_WITH_RELATED_CASES, testSuitId})
const updateTestSuit = ({testSuitData}) => ({type: UPDATE_TEST_SUITE, testSuitData})

export {addTestSuit, removeTestSuit, updateTestSuit, removeTestTuitWithRelatedCases}
