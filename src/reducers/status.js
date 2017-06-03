<<<<<<< HEAD
const initialState = {
  positive: ['Реалізований', 'Реалізований' ,'На реалізацї', 'Успішно оцінений'],
  negative: ['Неможливо реалізувати', 'Відхилений'],
  neutral: ['На рогляді', 'На голосуванні', 'Брав участь']
}

export default  (state = initialState, action) => {

  switch (action.type) {
    case 'positive':
      
      break;
    case 'negative':
    
      break;
    case 'neutral':

      break;
=======
const ACTIVATE_STATUS_FILTER = 'ACTIVATE_STATUS_FILTER'
const DEACTIVATE_STATUS_FILTER = 'DEACTIVATE_STATUS_FILTER'
const DROP_ALL_FILTERS = 'DROP_ALL_FILTERS'

const initialState = {
  positive: ['Реалізований', 'Переможець' ,'На реалізацї', 'Успішно оцінений'],
  negative: ['Неможливо реалізувати', 'Відхилений'],
  neutral: ['На рогляді', 'На голосуванні', 'Брав участь'],
  activeFilterStatus: null
}



export const activateFilterStatus = (status) => ({
  type: ACTIVATE_STATUS_FILTER, status
})

export const deactivateFilterStatus = () => ({type: DEACTIVATE_STATUS_FILTER})

export default  (state = initialState, action) => {

  switch (action.type) {
    case ACTIVATE_STATUS_FILTER:
      return {...state, activeFilterStatus: action.status}
    case DEACTIVATE_STATUS_FILTER:
      return {...state, activeFilterStatus: null}
    case DROP_ALL_FILTERS:
      return {...state, activeFilterStatus: null}
    default: 
      return state
>>>>>>> hash
  }
}