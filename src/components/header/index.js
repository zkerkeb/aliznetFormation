import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import i18n from 'i18next'

import { MenuButtons } from '../buttons'

import './index.css'

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.color.header};
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: row;
  padding: 12px;
`

class Header extends React.Component {
  state = {
    isToken: false
  }

  componentDidMount() {
    this.checkIfToken()
  }

  checkIfToken = () => {
    this.setState({ isToken: !!localStorage.getItem('token') }, () => {})
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
      <HeaderContainer>
        <div className="left-header">
          <MenuButtons
            // arrow function pour les fonction qui on un parametre,
            //car elle s'active directement sinon
            onClick={() => this.handleLocation('/home')}
            label={i18n.t('menu.home')}
          />
          <MenuButtons
            onClick={() => this.handleLocation('/students/gryffindor')}
            label="Eleves"
          />
          <MenuButtons
            onClick={() => this.handleLocation('/ranking')}
            label="Classement"
          />
          <MenuButtons
            onClick={() => this.handleLocation('/spells')}
            label="Sorts"
          />
          <MenuButtons
            onClick={() => this.handleLocation('/options')}
            label="Options"
          />
        </div>
        {this.state.isToken ? (
          <div className="right-header">
            <MenuButtons onClick={this.disconnect} label="deconnexion" />
          </div>
        ) : null}
      </HeaderContainer>
    )
  }
}

export default withRouter(Header)
