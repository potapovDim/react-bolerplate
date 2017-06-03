import React, {Component} from 'react'
import Slider, { Range } from 'rc-slider';
import {activateFilterMoney} from '../reducers/money'

export class MoneyFilter extends Component {
  state = {
    minMoney: 0,
    ranges: [-350000, 0],
    activeFilter: null,
    maxMoney: 350000
  }
  changeMinMoney = (minMoney) => {
    if(minMoney.length > 1 && minMoney[0] === '0') {
      minMoney = minMoney.split('')
      minMoney.shift()
      minMoney = minMoney.join('')
    }
    if(+minMoney > this.state.maxMoney){
      minMoney = this.state.maxMoney - 1000
    }
    if(+minMoney < 0){
      minMoney = 0
    }
    const ranges = [...this.state.ranges]
    ranges[1] = minMoney * -1
    this.setState({
      ...this.state,
      ranges: ranges,
      minMoney: +minMoney
    })
  }
  changeMaxMoney = (maxMoney) => {
    if(+maxMoney < this.state.minMoney){
      maxMoney = this.state.minMoney + 1000
    }
    if(maxMoney > 350000){
      maxMoney = 350000
    }

    const ranges = [...this.state.ranges]
    ranges[0] = maxMoney * -1
    this.setState({
      ...this.state,
      ranges,
      maxMoney: +maxMoney
    })
  }
  handleChange = (rangeValue) => {
    let max = -1 * rangeValue[0]
    let min = -1 * rangeValue[1] 
    this.setState({
      ranges: rangeValue,
      minMoney: min, 
      maxMoney: max
    })
  }
  submiMoneyFilter = () => {
    const {activateFilterByMoney} = this.props
    activateFilterByMoney(activateFilterMoney([this.state.minMoney, this.state.maxMoney]))
  }
  render () {
    return (
      <div>
        <div><button>DSKJSADJSAL</button></div>
        <input type="text" 
               value={this.state.maxMoney}
               onChange={(event) => this.changeMaxMoney(event.target.value)}/>
        <input type="text"
               value={this.state.minMoney}
               onInput={(event) => this.changeMinMoney(event.target.value)}/>
        <button onClick={this.submiMoneyFilter}>OK</button>
        <br />
        <div style={{width: 400}}>
          <Range min={-350000}
                 max={0}
                 defaultValue={[0 , 350000]}
                 value={[this.state.ranges[0], this.state.ranges[1]]}
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
