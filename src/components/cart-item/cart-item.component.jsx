import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  MinusIcon,
  PlusIcon,
  DeleteIcon,
} from "./cart-item.styles.jsx";

import { useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  reduceItemFromCart,
} from "../../store/cart/cart.reducer";

export const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl, quantity } = cartItem;

  const removeItemFromCartHandler = () => {
    const reponse = window.confirm("Do you want to remove " + name);
    if (reponse) {
      dispatch(removeItemFromCart(cartItem));
    }
  };

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItem));

  const reduceItemFromCartHandler = () =>
    dispatch(reduceItemFromCart(cartItem));

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
