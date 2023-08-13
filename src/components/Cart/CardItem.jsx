import React from "react";

const CardItem = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
        <div>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
