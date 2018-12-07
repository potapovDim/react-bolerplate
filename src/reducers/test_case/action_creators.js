import {ADD_TEST_CASE, REMOVE_TEST_CASE} from './action_types'

const addTestCase = (testCaseData) => ({type: ADD_TEST_CASE, testCaseData})
const removeTestCase = (testCaseId) => ({type: REMOVE_TEST_CASE, testCaseId})

export {addTestCase, removeTestCase}
