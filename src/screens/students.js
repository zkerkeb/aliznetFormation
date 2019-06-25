import React from 'react'
import axios from 'axios'
import Layout from './layout'

import { Link } from 'react-router-dom'

export default class Students extends React.Component {
  state = {
    students: null
  }

  componentDidMount() {
    this.getStudents()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.house !== prevProps.match.params.house) {
      this.getStudents()
    }
  }

  getStudents = () => {
    const house = this.props.match.params.house
    console.log(house)
    axios({
      method: 'GET',
      url: `http://hp-api.herokuapp.com/api/characters/house/${house}`
    })
      .then(res => {
        this.setState({ students: res.data })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('Student', this.props)
    return (
      <Layout>
        <Link to="/students/slytherin">Serpentard</Link>
        <Link to="/students/gryffindor">gryffindor</Link>
        <Link to="/students/ravenclaw">serdaigle</Link>
        <Link to="/students/hufflepuff">poufsouffle</Link>
        {this.state.students ? (
          this.state.students.map(student => (
            <p key={student.name}>{student.name}</p>
          ))
        ) : (
          <p>une erreur est survenue</p>
        )}
      </Layout>
    )
  }
}
