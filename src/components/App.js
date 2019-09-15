import React from "react";
import "../stylesheets/app.css";
import PokeList from "./ PokeList";
import Pokemon from "./Pokemon";
import { getAndFormatData } from "../data/data";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonList: [],
      favoritesList: []
    };

    this.getPokemonList();

    this.handleClick = this.handleClick.bind(this);
  }

  getPokemonList = () => {
    getAndFormatData().then(pokemonList => this.setState({ pokemonList }));
  };

  handleClick = event => {
    const clickedPokemon = event.currentTarget.id;
    this.setState(state => {
      return (
        !state.favoritesList.includes(clickedPokemon)
        ? {favoritesList: [
          ...state.favoritesList, clickedPokemon
        ]}
        : {favoritesList: [
          ...state.favoritesList.filter(item => item !== clickedPokemon)
        ]}
      )
    })
  }

  render() {

    const CreatePokemonList = (pokemonList, favoritesList) => {
      return pokemonList.map(pokemon => {
        const {
          id,
          name,
          image,
          types,
        } = pokemon;
        
        const changeCardClass = () => {
          return favoritesList.includes(id.toString())
          ? 'favorite'
          : ''
        }

        return (
          <li key={id} >
            <Pokemon
              id={id}
              cardClass={changeCardClass()} 
              onclick={this.handleClick}
              image={image}
              name={name}
              types={types}
            />
          </li>
        );
      });
    };

    return (
      <div className="app">
        <h1 className="app__title">Mi lista Pokemon</h1>
        <PokeList>
          {CreatePokemonList(this.state.pokemonList, this.state.favoritesList)}
        </PokeList>
      </div>
    );
  }
}

export default App;
