import React, {Component} from 'react'
import Slider, { Range } from 'rc-slider';
import {activateFilterTownRegion} from '../reducers/towns'

export class MoneyFilter extends Component {
  changeMinMoney = (minMoney) => {
    console.log(minMoney)
    this.setState({
      ...this.state,
      minMoney: +minMoney
    })
    console.log(this.state)
  }
  changeMaxMoney = (maxMoney) => {
    console.log(maxMoney)
    this.setState({
      ...this.state,
      maxMoney: +maxMoney
    })
    console.log(this.state)
  }
  state = {
    minMoney: 0, 
    activeFilter: null,
    maxMoney: 350000
  }

  handleChange = (rangeValue) => {
    
    console.log(rangeValue, console.log('range changed!!!!!!!!!!!!!!!'))
    let min = rangeValue[0]
    let max = rangeValue[1]
    if(min >= max) {
      min = max - 100
    }
    console.log(rangeValue)
    this.setState({
      minMoney: min, 
      maxMoney: max
    })
  }
  render () {
    console.log('!!!!!!!!!!!!!!' ,this.state.maxMoney,this.state.minMoney)
    return (
      <div>
        <div><button>DSKJSADJSAL</button></div>
        <input type="text" 
               value={this.state.maxMoney}
               onChange={(event) => this.changeMaxMoney(event.target.value)}/>
        <input type="text"
               value={this.state.minMoney}
               onInput={(event) => this.changeMinMoney(event.target.value)}/>
        <button>OK</button>
        <br />
        <div style={{width: 400}}>
          <Range min={0}
                 max={350000}
                 defaultValue={[0 , 350000]}
                 value={[this.state.minMoney, this.state.maxMoney]}
                 tipFormatter={value => `${value}%`} 
                 onChange={this.handleChange}
                 pushable 
                 step={10000}/>
        </div>
        <br />
      </div>
    )
  }
}
