import React, {Component} from 'react'
import {connect} from 'react-redux'

import {MainPageProjectItem} from './components/main-page-project-item'
import {StatusFilter} from './components/status-filter'
import {CategoryFilter} from './components/category-filter'

class App extends Component {
  state = {
    hash: 1
  }
  addNewHash = () => {
    window.location.hash = this.state.hash + 1
    this.setState({
      hash: this.state.hash + 1
    })
  }
  activateFilterByStatus = (action) => {
    const {dispatch} = this.props
    dispatch(action)
  }
  activateFilterByCategory = (action) => {
    const {dispatch} = this.props
    dispatch(action)
  }
  render () {
    const {projects, statuses, categories} = this.props
    
    let activeProjects = statuses.activeFilterStatus ? projects.filter(project => project.status === statuses.activeFilterStatus)
                : projects 
    activeProjects = categories.activeCategories.length === 0 
                ? activeProjects
                : activeProjects.filter(project => categories.activeCategories.includes(project.category.title))
    activeProjects = activeProjects.map((project, index) => <MainPageProjectItem key={index} {...project}/>)            
    return <div>
    <button onClick={this.addNewHash}>add hash</button>
    {activeProjects}
    bolerplate
    <StatusFilter
        activateFilterByStatus={this.activateFilterByStatus}
        {...statuses}
      />
      <CategoryFilter 
        activateFilterByCategory={this.activateFilterByCategory}
        {...categories} 
      />
    </div>
  }
}

export default connect(state => state)(App)