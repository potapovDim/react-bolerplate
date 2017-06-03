const ACTIVATE_TOWN_REGION_FILTER = 'ACTIVATE_TOWN_REGION_FILTER'
const DEACTIVATE_TOWN_REGION_FILTER = 'ACTIVATE_TOWN_REGION_FILTER'
const DROP_ALL_FILTERS = 'DROP_ALL_FILTERS'

const initialState = {
  townsRegions: [
    'Київ \\ Голосіївський',
    'Київ \\ Шевченківський',
    'Київ \\ Деснянський',
    'Харків \\ Шевченківський',
    'Харків \\ Московський',
    'Дніпропетровськ \\ Центральний',
    'Дніпропетровськ \\ Шевченківський',
    ],
  activeTownRegion: null
}

export const activateFilterTownRegion = (townRegion) => ({
  type: ACTIVATE_TOWN_REGION_FILTER, townRegion
})

// export const deactivateFilterCategory = (townRegion) => ({
//   type: DEACTIVATE_TOWN_REGION_FILTER, townRegion
// })

export const dropAllFilters = () => ({
  type: DROP_ALL_FILTERS
})

export default  (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case ACTIVATE_TOWN_REGION_FILTER:
      return {...state,
                 activeTownRegion: action.townRegion }
    // case DEACTIVATE_CATEGORY_FILTER:
    //   return {...state, 
    //              activeCategories: state.activeCategories.filter(category => category != action.category)}
    case DROP_ALL_FILTERS:
      return {...state, activeTownRegion: null}
    default: 
      return state
  }
}