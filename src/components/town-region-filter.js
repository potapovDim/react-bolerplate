import React, {Component} from 'react'
import {connect} from 'react-redux'
import {activateFilterTownRegion} from '../reducers/towns'

export class TownRegionFilter extends Component {
  componentWillMount() {
    const {activeTownRegion} = this.props
    console.log(this.props.activeTownRegion)
    this.setState({
      activeFilter: activeTownRegion
    })
  }
  state = {
    activeFilter: null
  }
  activateTowrRegion = (towReg, initFilterToGlobal) => {
    this.setState({
      activeFilter: towReg
    })
    initFilterToGlobal(activateFilterTownRegion(towReg))
  }
  render () {
    const {townsRegions, activeTownRegion, activateFilterByTownRegion} = this.props
    const {activeFilter} = this.state

    const statusTitle = activeFilter === null
                        ? 'Місто \ район'
                        : activeFilter
                        
    const townRegionsList = townsRegions.map((towReg, index) => 
              <li key={index}><button onClick={() => this.activateTowrRegion(towReg, activateFilterByTownRegion)}>{towReg}</button></li> )
    return (
      <div>
        <div><button>{statusTitle}</button></div>
        <div>
          <ul>
          {townRegionsList}
          </ul>
        </div>
      </div>
    )
  }
}
