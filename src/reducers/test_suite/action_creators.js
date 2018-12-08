import {ADD_TEST_SUITE, REMOVE_TEST_SUITE, UPDATE_TEST_SUITE} from './action_types'

const addTestCase = ({testCaseData}) => ({type: ADD_TEST_CASE, testCaseData})
const removeTestCase = ({testCaseId}) => ({type: REMOVE_TEST_CASE, testCaseId})
const updateTestCase = ({testCaseData}) => ({type: UPDATE_TEST_CASE, testCaseData})