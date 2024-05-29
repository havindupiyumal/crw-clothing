import { selectCartCount } from "../../store/cart/cart.selector.js";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { useSelector } from "react-redux";

export const CartIcon = () => {
  const count = useSelector(selectCartCount);

  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};
