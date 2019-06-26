import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from './layout'

export class Ranking extends Component {
  static propTypes = {}

  state = {
    arrayCounter: null
  }

  componentDidMount() {
    this.toArray(this.props.counterState)
  }

  toArray = obj => {
    const sortable = []
    /// on cree un tableau d'objet
    for (let school in obj) {
      sortable.push({ name: school, score: obj[school] })
    }
    console.log('TCL: Ranking -> componentDidMount -> sortable', sortable)

    // on trie le tableau et on le stock dans la state
    this.setState(
      {
        arrayCounter: sortable.sort((a, b) => {
          return b.score - a.score
        })
      },
      () => {
        console.log('after setState', this.state)
      }
    )
  }

  render() {
    console.log('ranking', this.props)
    return (
      <Layout>
        {this.state.arrayCounter ? (
          this.state.arrayCounter.map((school, key) => {
            return (
              <div key={key}>
                <p>{school.name}</p> <p>{school.score}</p>
              </div>
            )
          })
        ) : (
          <p>pas d'info disponible</p>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  counterState: state.counter
})

export default connect(mapStateToProps)(Ranking)
