import React from "react";
import "../stylesheets/poke-list.css";

const PokeList = props => {
  return (
    <ul className="poke-list">
      {props.children}
    </ul>
  );
};

export default PokeList;
