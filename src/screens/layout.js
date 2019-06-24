import React from 'react'

import Header from '../components/header'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
        <p>Zak Copyrigt</p>
      </div>
    )
  }
}
