import "./App.css"
import React from 'react';
import Layout from './Layout'
import * as math from 'mathjs';

class App extends React.Component {
  state = { term: '' }

  numberValue = (value) => {
    let isDot = this.state.term.toString()
    if (value === '.' && isDot.indexOf('.') !== -1) {
      return
    } else {
      this.setState({ term: this.state.term + value })
    }
  }

  calcEqual = () => {
    this.setState({ term: math.evaluate(this.state.term) })
  }

  clearDisplay = () => {
    this.setState({ term: '' })
  }
  render() {
    return (
      <div className="main">
        <div className="calc">{this.state.term}</div>

        <Layout numberSubmit={this.numberValue} clearAll={this.clearDisplay} equalVal={this.calcEqual} />

      </div>
    )
  }
}


export default App;