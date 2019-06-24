import React from 'react'
import logo from '../../logo.svg';

export default class Header extends React.Component {

    render() {
        console.log(this.props)
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
             {this.props.label}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        )
    }
}
