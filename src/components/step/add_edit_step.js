import React, {Component} from 'react'
import _ from 'lodash'

class AddEditStep extends Component {

  changeResult = ({target: {value}}) => {
    const {updateStep, attachments, title} = this.props
    _.debounce(() => updateStep({result: value, attachments, title}), 1000)
  }

  changeTitle = ({target: {value}}) => {
    const {updateStep, result, attachments} = this.props
    _.debounce(() => updateStep({result, attachments, title: value}), 1000)
  }
  render() {
    const {title, result, attachments} = this.props
    return (<div>
      <div>Test case title <input value={title} /></div>
      <div>Test case expected result <textarea value={result} /></div>
      <div>{attachments.length}</div>
    </div>)
  }
}

export {AddEditStep}
