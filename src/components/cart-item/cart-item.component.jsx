import { useContext } from "react";

import "./cart-item.styles.scss";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as Minus } from "../../assests/minus.svg";
import { ReactComponent as Plus } from "../../assests/plus.svg";
import { ReactComponent as Delete } from "../../assests/delete.svg";

export const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

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
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          <span onClick={reduceItemFromCartHandler}>
            <Minus
              width={10}
              height={10}
              style={{ marginRight: 5, cursor: "pointer" }}
            />
          </span>
          {quantity}{" "}
          <span onClick={addItemToCartHandler}>
            <Plus
              width={10}
              height={10}
              style={{ marginRight: 5, cursor: "pointer" }}
            />
          </span>{" "}
          x ${price}{" "}
          <span onClick={removeItemFromCartHandler}>
            <Delete
              width={20}
              height={20}
              style={{ marginLeft: 20, cursor: "pointer" }}
            />
          </span>
        </span>
      </div>
    </div>
  );
};
