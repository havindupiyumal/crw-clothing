import { useContext } from "react";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../../context/cart.context";

export const CartIcon = () => {
  const { count } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};
