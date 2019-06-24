import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }

  render() {
    const { onSubmit, onChange, email, password, message } = this.props
    return (
      <div className="loginDiv">
        <form className="loginForm" onSubmit={onSubmit}>
          <p>{message}</p>
          <input
            name="email"
            type="email"
            value={email}
            onChange={onChange}
          ></input>
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
