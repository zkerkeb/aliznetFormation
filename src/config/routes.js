import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import PrivateRoute from '../utils/privateRoute'

import Login from '../screens/login'
import Home from '../screens/home'
import Students from '../screens/students'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/home" component={Home}></PrivateRoute>
          <PrivateRoute
            path="/students/:house"
            component={Students}
          ></PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
