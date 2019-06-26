import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../actions'

import Layout from './layout'
import { theme, themeDark } from '../config/themes'
import i18next from 'i18next'

export class Options extends Component {
  static propTypes = {}

  changeLanguage = language => {
    i18next.changeLanguage(language)
    localStorage.setItem('language', language)
    this.forceUpdate()
  }

  render() {
    console.log('OPTIONS', this.props)
    return (
      <Layout>
        <h2>Theme</h2>
        <button onClick={() => this.props.actions.themes.changeTheme(theme)}>
          Theme Clair
        </button>
        <button
          onClick={() => this.props.actions.themes.changeTheme(themeDark)}
        >
          Theme Sombre
        </button>
        <button onClick={() => this.changeLanguage('fr')}>Français</button>
        <button onClick={() => this.changeLanguage('en')}>Anglais</button>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    themes: bindActionCreators(allTheActions.themes, dispatch)
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Options)
