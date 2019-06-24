import React from 'react'

import './index.css'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginDiv">
        <form className="loginForm">
          <input name="email" type="email"></input>
          <input name="password" type="password"></input>
        </form>
      </div>
    )
  }
}
