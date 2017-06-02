import React, {Component} from 'react'
import {Link} from 'react-router'

export class App extends Component {
  render () {
    console.log('!!!!!!!! main component rendered')
    return <div>
      Main component
      <Link to='/new-component' > New component</Link>
      <Link to='/other-new-component' > New component</Link>
      {this.props.children}
    </div>
  }
}