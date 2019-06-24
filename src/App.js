import React from 'react'
import './App.css'

import Counter from './components/counter'
import CounterProps from './components/counterProps'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter label="Serpentard"></Counter>
        <Counter label="Poufsouffle"></Counter>
        <Counter label="Serdaigle"></Counter>
      </div>
    )
  }
}

export default App
