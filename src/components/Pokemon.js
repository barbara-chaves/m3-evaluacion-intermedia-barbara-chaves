import React from "react";
import "../stylesheets/pokemon.css";

const Pokemon = props => {
  const { image, id, name, types, cardClass, onclick } = props;

  return (
    <div className={"pokemon " + cardClass} id={id} onClick={onclick}>
      <div className="pokemon__image">
        <img className="pokemon__image__img" src={image} alt={name} />
      </div>
      <ul className="pokemon__types">
        {types.map((type, index) => (
          <li key={index} className="pokemon__types__type">
            {type}
          </li>
        ))}
      </ul>
      <h2 className="pokemon__name">{name}</h2>
    </div>
  );
};

export default Pokemon;
