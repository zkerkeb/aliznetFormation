import React from 'react'
import { withRouter } from 'react-router'

import { MenuButtons } from '../buttons'

import './index.css'

class Header extends React.Component {
  state = {
    isToken: false
  }

  componentDidMount() {
    this.checkIfToken()
  }

  checkIfToken = () => {
    this.setState({ isToken: !!localStorage.getItem('token') }, () => {
      console.log(this.state)
    })
  }

  disconnect = () => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  handleLocation = location => {
    this.props.history.push(location)
  }

  render() {
    console.log(this.props)
    return (
      <header className="App-header">
        <div className="left-header">
          <MenuButtons
            // arrow function pour les fonction qui on un parametre,
            //car elle s'active directement sinon
            onClick={() => this.handleLocation('/home')}
            label="Accueil"
          />
          <MenuButtons
            onClick={() => this.handleLocation('/students/gryffindor')}
            label="Eleves"
          />
        </div>
        {this.state.isToken ? (
          <div className="right-header">
            <MenuButtons onClick={this.disconnect} label="deconnexion" />
          </div>
        ) : null}
      </header>
    )
  }
}

export default withRouter(Header)
