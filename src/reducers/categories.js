const ACTIVATE_CATEGORY_FILTER = 'ACTIVATE_CATEGORY_FILTER'
const DEACTIVATE_CATEGORY_FILTER = 'DEACTIVATE_CATEGORY_FILTER'
const DROP_ALL_FILTERS = 'DROP_ALL_FILTERS'

const initialState = {
  categories: [
    'Спорт',
    'Комунальне господарство',
    "Охорона здоров`я",
    'Дорожнє господарство',
    'Навколишнє середовище',
    'Освіта',
    'Засоби масової інформації',
    'Телекомунікації та ІТ',
    'Соціальний захист',
    'Транспорт',
    'Велоінфраструктура',
    'Громадський порядок',
    'Енергозбереження',
    'Культура та туризм'
    ],
  activeCategories: []
}



export const activateFilterCategory = (category) => ({
  type: ACTIVATE_CATEGORY_FILTER, category
})

export const deactivateFilterCategory = (category) => ({
  type: DEACTIVATE_CATEGORY_FILTER, category
})

export const dropAllFilters = () => ({
  type: DROP_ALL_FILTERS
})

export default  (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case ACTIVATE_CATEGORY_FILTER:
      newState.activeCategories.push(action.category)
      return {...state,
                 activeCategories: newState.activeCategories}
    case DEACTIVATE_CATEGORY_FILTER:
      return {...state, 
                 activeCategories: state.activeCategories.filter(category => category != action.category)}
    case DROP_ALL_FILTERS:
      return {...state, activeCategories: []}
    default: 
      return state
  }
}