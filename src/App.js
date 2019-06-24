import React from 'react';
import './App.css';

import Header from './components/header'
import Counter from './components/counter'

class App extends React.Component {
  render(){
    return( 
    <div className="App">
<Counter label="Gryffondor"></Counter>
<Counter label="Serpentard"></Counter>
<Counter label="Poufsouffle"></Counter>
<Counter label="Serdaigle"></Counter>
    </div>
    )
  };
}

export default App;
