import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as Delete } from "../../assests/delete.svg";

import "./checkout-item.styles.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, addItemToCart, reduceItemFromCart } =
    useContext(CartContext);

  const removeItemFromCartHandler = () => {
    const reponse = window.confirm("Do you want to remove " + name);
    if (reponse) {
      removeItemFromCart(cartItem);
    }
  };

  const addItemToCartHandler = () => addItemToCart(cartItem);

  const reduceItemFromCartHandler = () => reduceItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItemFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={removeItemFromCartHandler}>
        <Delete
          width={30}
          height={30}
          style={{ marginLeft: 20, cursor: "pointer" }}
        />
      </div>
    </div>
  );
};
