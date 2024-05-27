import { useContext } from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  MinusIcon,
  PlusIcon,
  DeleteIcon,
} from "./cart-item.styles.jsx";

import { CartContext } from "../../context/cart.context";

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
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          <span onClick={reduceItemFromCartHandler}>
            <MinusIcon width={10} height={10} />
          </span>
          {quantity}{" "}
          <span onClick={addItemToCartHandler}>
            <PlusIcon width={10} height={10} />
          </span>{" "}
          x ${price}{" "}
          <span onClick={removeItemFromCartHandler}>
            <DeleteIcon width={20} height={20} />
          </span>
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};
