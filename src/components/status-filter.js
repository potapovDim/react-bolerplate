import React, {Component} from 'react'
import {connect} from 'react-redux'
import {activateFilterStatus} from '../reducers/status'

export class StatusFilter extends Component {
  state = {
    activeFilter: null
  }
  activateStatus = (status, initFilterToGlobal) => {
    this.setState({
      activeFilter: status
    })
    initFilterToGlobal(activateFilterStatus(status))
  }
  render () {
    const statusTitle = this.state.activeFilter === null
                        ? 'Оберіть стан проекту'
                        : this.state.activeFilter
    const {positive, negative, neutral, activateFilterByStatus} = this.props
    const positiveStatuses = positive.map((status, index) => 
              <li key={index}><button onClick={() => this.activateStatus(status, activateFilterByStatus)}>{status}</button></li> )
    const negativeStatuses =  negative.map((status, index) => 
              <li key={index}><button onClick={() => this.activateStatus(status, activateFilterByStatus)}>{status}</button></li> )
    const neutralStatuses = neutral.map((status, index) => 
              <li key={index}><button onClick={() => this.activateStatus(status, activateFilterByStatus)}>{status}</button></li> )
    return (
      <div>
        <div><button>{statusTitle}</button></div>
        <div>
          <ul>
          {positiveStatuses}
          {negativeStatuses}
          {neutralStatuses}
          </ul>
        </div>
      </div>
    )
  }
}
