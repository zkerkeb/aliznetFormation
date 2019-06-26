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
import Ranking from '../screens/ranking'
import Spells from '../screens/spells'
import Options from '../screens/options'

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
          <PrivateRoute path="/ranking" component={Ranking}></PrivateRoute>
          <PrivateRoute path="/spells" component={Spells}></PrivateRoute>
          <PrivateRoute path="/options" component={Options}></PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
