import React, {Component} from 'react'

class AddEditStep extends Component {

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
