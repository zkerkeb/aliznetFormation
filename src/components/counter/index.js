import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Counter extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  }
  render() {
    const { label, counter, increment, decrement } = this.props
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
