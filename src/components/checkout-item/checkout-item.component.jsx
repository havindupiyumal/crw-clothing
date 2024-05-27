import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemQuantityValue,
  Arrow,
  RemoveButtonContainer,
  RemoveButton,
} from "./checkout-item.styles.jsx";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemName> {name} </ItemName>
      <ItemQuantity>
        <Arrow onClick={reduceItemFromCartHandler}>&#10094;</Arrow>
        <ItemQuantityValue>{quantity}</ItemQuantityValue>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice> {price}</ItemPrice>
      <RemoveButtonContainer onClick={removeItemFromCartHandler}>
        <RemoveButton width={30} height={30} />
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};
