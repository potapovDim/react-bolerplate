import React, {Component} from 'react'

export class NewComponent extends Component {
  state = {
    counter: 1
  }
  add = () => {
    this.setState({
      counter: this.state.counter+1
    })
  }
  rm = () => {
    this.setState({
      counter: this.state.counter-1
    })
  }
  render () {
    console.log('! new component rendered')
    return <div>
    <h2>Пісюн</h2>
    <button onClick={this.add}>Add</button>
    <button onClick={this.rm}>Rm</button>
    bolerplate
    <div>{this.state.counter}</div>
    </div>
  }
}