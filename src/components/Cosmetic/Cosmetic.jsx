import React from "react";
import { removeItem, setItem } from "../../utilities/utilites";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, id, price } = props.cosmetic;

  return (
    <div className="cosmetic">
      <h4>Name: {name}</h4>
      <p>Price: {price}</p>
      <p>Id: {id}</p>
      <button onClick={() => setItem(id)}>Purchase</button>
      <button onClick={() => removeItem(id)}>Remove Item</button>
    </div>
  );
};

export default Cosmetic;
