import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleToggle () {
    setInCart(!inCart);
  }

  return (
    <li className={ inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggle} className="add">
      {inCart ? "Remove from Cart" : "Add to Cart"} 
      </button>
    </li>
  );
}

export default Item;

