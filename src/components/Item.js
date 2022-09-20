import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  function addToCart(){
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
