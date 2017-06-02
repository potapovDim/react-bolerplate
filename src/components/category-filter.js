import React, {Component} from 'react'
import {connect} from 'react-redux'

import {activateFilterCategory, deactivateFilterCategory} from '../reducers/categories'

export class CategoryFilter extends Component {
  state = {
    activeFilters: []
  }
  activateCategory = (category, initFilterToGlobal) => {
    const {categories, activeCategories} = this.props
    activeCategories.includes(category)
                      ? initFilterToGlobal(deactivateFilterCategory(category))
                      : initFilterToGlobal(activateFilterCategory(category))
  }
  render () {
    const {categories, activeCategories, activateFilterByCategory} = this.props
    const categoryList = categories.map((category, index) => 
              <li key={index}>
                <input type="checkbox" id={`category-${index}`} onChange={() => this.activateCategory(category, activateFilterByCategory)}
                checked={activeCategories.includes(category)}/>
                <label htmlFor={`category-${index}`}>{category}</label>
              </li> )
    return (
      <div>
        <div><button>Категорії {activeCategories.length}</button></div>
        <div>
          <ul>
          {categoryList}
          </ul>
        </div>
      </div>
    )
  }
}
