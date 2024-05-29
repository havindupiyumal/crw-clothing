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

import {
  addItemToCart,
  removeItemFromCart,
  reduceItemFromCart,
} from "../../store/cart/cart.actions";

import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

export const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const removeItemFromCartHandler = () => {
    const reponse = window.confirm("Do you want to remove " + name);
    if (reponse) {
      dispatch(removeItemFromCart(cartItem, cartItems));
    }
  };

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItem, cartItems));

  const reduceItemFromCartHandler = () =>
    dispatch(reduceItemFromCart(cartItem, cartItems));

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
