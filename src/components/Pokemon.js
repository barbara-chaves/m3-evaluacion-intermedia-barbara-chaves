import React from "react";
import "../stylesheets/pokemon.css";

const Pokemon = props => {
  const { image, name, types } = props;

  return (
    <li className="pokemon">
      <div className="pokemon__image">
        <img className="pokmon__image__img" src={image} alt={name} />
      </div>
      <h2 className="pokemon__name">{name}</h2>
      <div className="pokemon__types">
        {types.map((type, index) => (
          <p key={index} className="pokemon__types__type">
            {type}
          </p>
        ))}
      </div>
    </li>
  );
};

export default Pokemon;
