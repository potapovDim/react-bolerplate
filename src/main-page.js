import React, {Component} from 'react'
import { connect } from 'react-redux'

import { MainPageProjectItem } from './components/main-page-project-item'

import { StatusFilter } from './components/status-filter'
import { CategoryFilter } from './components/category-filter'
import { TownRegionFilter } from './components/town-region-filter'
import { MoneyFilter } from './components/money-filter'

import {focusProject} from './reducers/project'

import { Project } from './components/project'

class App extends Component {
  componentWillMount() {
    const { projects: {projectsState}, dispatch} = this.props    
    let conuntAssert = 1
    const assertChangehistory = () => {
      projectsState.forEach((project) => {
        window.location.hash.includes(project.title) && this.initProject(project)
      })
    }
    window.addEventListener('popstate', assertChangehistory);
  }
  initProject = (project) => {
    const {dispatch} = this.props
    dispatch(focusProject(project))
    window.location.hash = project.title
  }
  backStateHistory = () => {
    const {dispatch} = this.props
    dispatch(focusProject(null))
  }
  activateFilterByStatus = (action) => {
    const { dispatch } = this.props
    dispatch(action)
  }

  activateFilterByCategory = (action) => {
    const { dispatch } = this.props
    dispatch(action)
  }

  activateFilterByTownRegion = (action) => {
    const { dispatch } = this.props
    dispatch(action)
  }

  activateFilterByMoney = (action) => {
    const { dispatch } = this.props
    dispatch(action)
  }
  render() {
    const { projects: {projectsState, focusedProject}, statuses, categories, townRegions, money} = this.props
    const joinTownWithRegion = (project) => {
      return project.town.concat(' \\ ') + project.region
    }
    let activeProjects = statuses.activeFilterStatus ? projectsState.filter(project => project.status === statuses.activeFilterStatus)
      : projectsState
    activeProjects = activeProjects.filter(project => money.activeMoneyRange[0] <= project.money && project.money <= money.activeMoneyRange[1])
    activeProjects = townRegions.activeTownRegion ? activeProjects.filter(project => joinTownWithRegion(project) === townRegions.activeTownRegion)
      : activeProjects
    activeProjects = categories.activeCategories.length === 0
      ? activeProjects
      : activeProjects.filter(project => categories.activeCategories.includes(project.category.title))
    activeProjects = activeProjects.map((project, index) => <MainPageProjectItem 
            handleClick={this.initProject} 
            key={index}
            {...project} 
            project={project}/>)
    return <div>
      {focusedProject ? <Project backStateHistory={this.backStateHistory} focusedProject={focusedProject}/> : <div>
        <button onClick={this.addNewHash}>add hash</button>
        {activeProjects}
        bolerplate
        <MoneyFilter
          activateFilterByMoney={this.activateFilterByMoney}
          {...money} />
        <StatusFilter
          activateFilterByStatus={this.activateFilterByStatus}
          {...statuses}
        />
        <CategoryFilter
          activateFilterByCategory={this.activateFilterByCategory}
          {...categories}
        />
        <TownRegionFilter
          activateFilterByTownRegion={this.activateFilterByTownRegion}
          {...townRegions}
        />
      </div> }
    </div>
  }
}

export default connect(state => state)(App)