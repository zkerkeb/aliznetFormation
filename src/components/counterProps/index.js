import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Counter extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    decrement: PropTypes.func,
    increment: PropTypes.func
  }

  render() {
    const {
      label = 'compteur test',
      increment,
      decrement,
      counter
    } = this.props
    return (
      <div className="counter">
        <p>{label}</p>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}
