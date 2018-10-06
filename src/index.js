import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Dropzone from 'react-dropzone'
// import {Provider} from 'react-redux'


class Basic extends React.Component {
  constructor() {
    super()
    this.state = {files: []}
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}



// import MainPage from './main-page'

ReactDom.render(<Basic />, document.getElementById('app'))