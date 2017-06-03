const ACTIVATE_MONEY_FILTER = 'ACTIVATE_MONEY_FILTER'
const DROP_ALL_FILTERS = 'DROP_ALL_FILTERS'

const initialState = {
  initialMoneyRange: [0, 350000],
  activeMoneyRange: [0, 350000]
}

export const activateFilterMoney = (moneyRange) => ({
  type: ACTIVATE_MONEY_FILTER, moneyRange
})

export const dropAllFilters = () => ({
  type: DROP_ALL_FILTERS
})

export default  (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_MONEY_FILTER:
      return {...state,
                 activeMoneyRange: action.moneyRange}
    case DROP_ALL_FILTERS:
      return initialState
    default: 
      return state
  }
}