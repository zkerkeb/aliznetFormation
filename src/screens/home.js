import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Layout from './layout'
import Counter from '../components/counter'

import allTheActions from '../actions'

import './home.css'

class Home extends React.Component {
  componentDidMount() {
    this.props.actions.characters.getCharacters('slytherin')
  }

  render() {
    const { counterState, actions } = this.props
    console.log('props home', this.props)
    return (
      <Layout>
        {this.props.characters.isPending ? (
          <p>chargement en cours</p>
        ) : this.props.characters ? (
          this.props.characters.currentCharacters.map(student => (
            <p>{student.name}</p>
          ))
        ) : null}
        <p>mon compteur global</p>
        <p>{this.props.counterState.serpentard}</p>
        <button
          onClick={() =>
            this.props.actions.counter.counterIncrement('serpentard')
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.props.actions.counter.counterDecrement('serpentard')
          }
        >
          -
        </button>
        <div className="counters">
          <Counter
            increment={() => actions.counter.counterIncrement('gryffondor')}
            decrement={() => actions.counter.counterDecrement('gryffondor')}
            counter={counterState.gryffondor}
            label="gryffondor"
          ></Counter>
          <Counter
            increment={() => actions.counter.counterIncrement('serpentard')}
            decrement={() => actions.counter.counterDecrement('serpentard')}
            counter={counterState.serpentard}
            label="Serpentard"
          ></Counter>
          <Counter
            increment={() => actions.counter.counterIncrement('serdaigle')}
            decrement={() => actions.counter.counterDecrement('serdaigle')}
            counter={counterState.serdaigle}
            label="Serdaigle"
          ></Counter>
          <Counter
            increment={() => actions.counter.counterIncrement('pouffsoufle')}
            decrement={() => actions.counter.counterDecrement('pouffsoufle')}
            counter={counterState.pouffsoufle}
            label="Pouffsoufle"
          ></Counter>
        </div>
      </Layout>
    )
  }
}

// les clé de la state disponible sont listé dans l'index du dossier reducers
const mapStateToProps = state => ({
  counterState: state.counter,
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch),
    characters: bindActionCreators(allTheActions.characters, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
