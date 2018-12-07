import {ADD_TEST_CASE, REMOVE_TEST_CASE, UPDATE_TEST_CASE} from './action_types'

const addTestCase = ({testCaseData}) => ({type: ADD_TEST_CASE, testCaseData})
const removeTestCase = ({testCaseId}) => ({type: REMOVE_TEST_CASE, testCaseId})
const updateTestCase = ({testCaseData}) => ({type: UPDATE_TEST_CASE, testCaseData})

export {addTestCase, removeTestCase, updateTestCase}
