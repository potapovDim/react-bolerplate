import React, {Component} from 'react'
import ReactDom from 'react-dom'

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
  render () {
    return <div>
    <button onClick={this.addNewHash}>add hash</button>
    bolerplate
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app'))