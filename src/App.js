import React from 'react'
import { Provider } from 'react-redux'

import { store } from './config/store'
import Routes from './config/routes'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    )
  }
}

export default App
