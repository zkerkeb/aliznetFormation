import React from 'react'

import './menuButton.css'

export default class MenuButtons extends React.Component {
  render() {
    // equivaut a faire const label = this.props.label
    const { label, onClick } = this.props
    return (
      <div onClick={onClick} className="menuButton">
        <span>{label}</span>
      </div>
    )
  }
}
