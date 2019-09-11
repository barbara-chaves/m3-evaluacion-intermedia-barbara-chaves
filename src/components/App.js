import React from 'react';
import '../stylesheets/App.css';
import PokeList from './ PokeList'
import { getAndFormatData } from '../data/data'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonList: []
    }

    this.getPokemonList()
  }

  getPokemonList = () => {
    getAndFormatData().then(pokemonList => this.setState({pokemonList}))
  }
  
  render(){
    return (
      <div className="App">
        <h1>Mi lista Pokemon</h1>
       <PokeList
        pokemonList={this.state.pokemonList}
       />
      </div>
    )
  }
}

export default App;
