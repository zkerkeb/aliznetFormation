import React from 'react'

import './index.css'

export default class Counter extends React.Component{ 

    state = {
        counter: 0
      }
      
      increment = () => {
        this.setState({counter: this.state.counter + 1})
      }
    
      decrement = () => {
        this.setState({counter: this.state.counter - 1})
      }

    render(){
        const {label} = this.props
        const {counter} = this.state
        return(
            <div className="counter"> 
            <p>{label}</p>
            <p>{counter}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        )
    }
}