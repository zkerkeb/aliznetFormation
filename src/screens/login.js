import React from 'react'

import LoginForm from '../components/loginForm'
import axios from 'axios'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  componentDidMount() {
    this.checkToken()
    console.log('le composant vient de se monter')
  }

  checkToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.history.push('/home')
    }
  }

  verificationLogin = () => {
    if (!this.state.password) {
      this.setState({ message: 'veuillez entrer un mot de passe' })
      return false
    }
    this.setState({ message: '' })
    return true
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    if (this.verificationLogin() === false) {
      return
    }
    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: this.state.email,
        password: this.state.password
      }
    })
      .then(res => {
        console.log(res.headers['x-access-token'])
        localStorage.setItem('token', res.headers['x-access-token'])
        this.props.history.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        email={this.state.email}
        password={this.state.password}
        message={this.state.message}
      ></LoginForm>
    )
  }
}
