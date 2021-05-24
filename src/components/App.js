import "./App.css"
import React from 'react';
import Layout from './Layout'
import * as math from 'mathjs';

class App extends React.Component {
  state = { prev: '', present: '' }

  numberValue = (value) => {
    let isDot = this.state.present.toString()
    if (value === '.' && isDot.indexOf('.') !== -1) {
      return
    } else {
      this.setState({ present: this.state.present + value })
    }
  }

  calcEqual = () => {
    this.setState({ prev: this.state.present, present: math.evaluate(this.state.present) })
  }

  clearDisplay = () => {
    this.setState({ present: '', prev: '' })
  }
  render() {
    return (
      <div className="main">

        <div className="calc">
          <div className="prev">{this.state.prev}</div>
          <div className="present"> {this.state.present}</div>
        </div>
        <Layout numberSubmit={this.numberValue} clearAll={this.clearDisplay} equalVal={this.calcEqual} />
      </div>
    )
  }
}


export default App;