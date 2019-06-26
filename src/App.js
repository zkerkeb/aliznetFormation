import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './config/store'
import Routes from './config/routes'
import i18next from 'i18next'

import './config/translations'

class App extends React.Component {
  state = {
    reduxState: store.getState()
  }

  componentDidMount() {
    store.subscribe(() => this.setState({ reduxState: store.getState() }))
    this.langageSelector()
    this.forceUpdate()
  }

  langageSelector = () => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', i18next.language)
    } else {
      const currentLanguage = localStorage.getItem('language')
      i18next.changeLanguage(currentLanguage)
    }
  }

  render() {
    const { reduxState } = this.state
    return (
      <ThemeProvider theme={reduxState.themes.currentTheme}>
        <Provider store={store}>
          <Routes></Routes>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
