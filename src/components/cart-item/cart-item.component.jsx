import { useContext } from "react";

import "./cart-item.styles.scss";

import { CartContext } from "../../context/cart.context";

export const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, reduceItemFromCart } =
    useContext(CartContext);

  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const reduceItemFromCartHandler = () => {
    reduceItemFromCart(cartItem);
  };

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} width="50" height="50" />
      <p>
        {name} - {price} - <span onClick={addItemToCartHandler}> + </span>{" "}
        {quantity} <span onClick={reduceItemFromCartHandler}> - </span>
        <span onClick={removeItemFromCartHandler}>X</span>
      </p>
    </div>
  );
};
