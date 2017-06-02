import React, {Component} from 'react'

export class OtherNewComponent extends Component {
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
    console.log('! new component Other new component rendered')
    return <div>
    <button onClick={this.add}>Add</button>
    <h1>ХУЙ   хуй</h1>
    <button onClick={this.rm}>Rm</button>
    bolerplate
    <div>{this.state.counter}</div>
    </div>
  }
}